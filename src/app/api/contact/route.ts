import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// メールアドレス設定（環境変数から取得）
const COMPANY_EMAIL = process.env.COMPANY_EMAIL || 'info@example.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@example.com'
const COMPANY_NAME = process.env.COMPANY_NAME || '一美Group'

const inquiryTypeLabels: Record<string, string> = {
  'suits-reservation': 'スーツ販売 - 無料相談',
  'suits-inquiry': 'スーツ販売 - お問い合わせ',
  'real-estate': '不動産 - 物件のお問い合わせ',
  'consulting': 'AIコンサルティング - 無料相談',
  'sns-marketing': 'SNSマーケティング - お問い合わせ',
  'recruit': '採用に関するお問い合わせ',
  'other': 'その他',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { inquiryType, company, name, email, phone, message } = body

    // Validate required fields
    if (!inquiryType || !name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません。' },
        { status: 400 }
      )
    }

    const inquiryLabel = inquiryTypeLabels[inquiryType] || inquiryType
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'メール送信設定が未構成です。管理者にお問い合わせください。' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    // Send notification email to company
    await resend.emails.send({
      from: `お問い合わせフォーム <${FROM_EMAIL}>`,
      to: [COMPANY_EMAIL],
      subject: `【お問い合わせ】${inquiryLabel} - ${name}様`,
      html: `
        <h2>お問い合わせがありました</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <th style="border: 1px solid #ddd; padding: 10px; text-align: left; background: #f5f5f5;">お問い合わせ種別</th>
            <td style="border: 1px solid #ddd; padding: 10px;">${inquiryLabel}</td>
          </tr>
          <tr>
            <th style="border: 1px solid #ddd; padding: 10px; text-align: left; background: #f5f5f5;">会社名・団体名</th>
            <td style="border: 1px solid #ddd; padding: 10px;">${company || '-'}</td>
          </tr>
          <tr>
            <th style="border: 1px solid #ddd; padding: 10px; text-align: left; background: #f5f5f5;">お名前</th>
            <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
          </tr>
          <tr>
            <th style="border: 1px solid #ddd; padding: 10px; text-align: left; background: #f5f5f5;">メールアドレス</th>
            <td style="border: 1px solid #ddd; padding: 10px;">${email}</td>
          </tr>
          <tr>
            <th style="border: 1px solid #ddd; padding: 10px; text-align: left; background: #f5f5f5;">電話番号</th>
            <td style="border: 1px solid #ddd; padding: 10px;">${phone || '-'}</td>
          </tr>
          <tr>
            <th style="border: 1px solid #ddd; padding: 10px; text-align: left; background: #f5f5f5;">お問い合わせ内容</th>
            <td style="border: 1px solid #ddd; padding: 10px; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
      `,
    })

    // Send confirmation email to customer
    await resend.emails.send({
      from: `${COMPANY_NAME} <${FROM_EMAIL}>`,
      to: [email],
      subject: `【${COMPANY_NAME}】お問い合わせありがとうございます`,
      html: `
        <p>${name} 様</p>
        <p>この度は${COMPANY_NAME}にお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けました。<br>
        内容を確認の上、担当者より2営業日以内にご連絡いたします。</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p><strong>お問い合わせ種別:</strong> ${inquiryLabel}</p>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        ${phone ? `<p><strong>電話番号:</strong> ${phone}</p>` : ''}
        <p><strong>お問い合わせ内容:</strong></p>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p>※このメールは自動送信されています。<br>
        ※このメールにご返信いただいてもお答えできませんのでご了承ください。</p>
        <p style="margin-top: 30px;">
          ${COMPANY_NAME}<br>
          Email: ${COMPANY_EMAIL}
        </p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'メールの送信に失敗しました。しばらく経ってから再度お試しください。' },
      { status: 500 }
    )
  }
}
