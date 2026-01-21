import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '一美Groupの個人情報保護方針についてご説明します。',
}

export default function PrivacyPage() {
  return (
    <>
      <Hero
        subtitle="Privacy Policy"
        title="プライバシーポリシー"
      />

      <section className="py-3 md:py-6">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl">
            <CardContent className="prose prose-sm max-w-none p-8">
              <p className="text-sm text-muted-foreground">最終更新日: 2026年3月31日</p>

              <h2 className="mt-8 text-xl font-bold">1. 基本方針</h2>
              <p>
                一美Group（以下「当社」）は、お客様の個人情報の重要性を認識し、
                その適正な取得、利用、管理に努めます。当社は、個人情報保護に関する法令および
                その他の規範を遵守し、お客様の個人情報の保護に努めます。
              </p>

              <h2 className="mt-8 text-xl font-bold">2. 個人情報の取得</h2>
              <p>当社は、以下の方法により個人情報を取得することがあります：</p>
              <ul>
                <li>お問い合わせフォームからのご入力</li>
                <li>電話、メール等によるお問い合わせ</li>
                <li>サービスのお申し込み</li>
                <li>採用活動における応募</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">3. 個人情報の利用目的</h2>
              <p>当社は、取得した個人情報を以下の目的で利用いたします：</p>
              <ul>
                <li>お問い合わせへの対応</li>
                <li>サービスの提供・運営</li>
                <li>契約の履行</li>
                <li>サービスに関するご案内</li>
                <li>採用活動における選考・連絡</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">4. スーツ販売における採寸データの取り扱い</h2>
              <p>
                当社のスーツ販売サービスをご利用いただく際に取得する採寸データ（身体のサイズ、体型情報等）については、以下のとおり取り扱います：
              </p>
              <ul>
                <li>採寸データは、お客様のスーツ製作およびサイズ調整の目的にのみ使用いたします</li>
                <li>お客様の同意なく、採寸データを第三者に提供することはありません</li>
                <li>採寸データは、お客様との取引終了後も、再注文時の利便性向上のため適切に保管いたします</li>
                <li>お客様のご要望により、採寸データの削除に応じます</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">5. AI導入支援における顧客データの取り扱い</h2>
              <p>
                当社のAI導入支援サービスにおいて、お客様からお預かりするデータについては、以下のとおり取り扱います：
              </p>
              <ul>
                <li>お預かりしたデータは、AI導入支援サービスの提供目的にのみ使用いたします</li>
                <li>データは厳重なセキュリティ対策を施した環境で取り扱います</li>
                <li>プロジェクト終了後、お客様のご要望に応じてデータを返却または削除いたします</li>
                <li>お客様の同意なく、データを学習目的や第三者への提供に使用することはありません</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">6. 個人情報の第三者提供</h2>
              <p>
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>

              <h2 className="mt-8 text-xl font-bold">7. 個人情報の管理</h2>
              <p>
                当社は、個人情報の漏えい、滅失または毀損を防止するため、適切な安全管理措置を講じます。
              </p>

              <h2 className="mt-8 text-xl font-bold">8. お問い合わせ</h2>
              <p>本プライバシーポリシーに関するお問い合わせは、以下までご連絡ください。</p>
              <p>
                一美Group<br />
                Email: info@hitomi-group.jp
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
