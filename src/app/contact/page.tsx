'use client'

import React, { useState } from 'react'
import { Mail, Youtube, Send } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const inquiryTypes = [
  { value: 'suits-reservation', label: 'スーツ販売 - 来店予約' },
  { value: 'suits-inquiry', label: 'スーツ販売 - お問い合わせ' },
  { value: 'real-estate', label: '不動産 - 物件のお問い合わせ' },
  { value: 'consulting', label: 'コンサルティング - 無料相談' },
  { value: 'sns-marketing', label: 'SNSマーケティング - お問い合わせ' },
  { value: 'recruit', label: '採用に関するお問い合わせ' },
  { value: 'other', label: 'その他' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    inquiryType: '',
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <>
        <Hero
          subtitle="Contact"
          title="お問い合わせ"
        />
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="mx-auto max-w-2xl">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">送信完了</h2>
                <p className="text-muted-foreground">
                  お問い合わせありがとうございます。
                  <br />
                  内容を確認の上、担当者より2営業日以内にご連絡いたします。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Hero
        subtitle="Contact"
        title="お問い合わせ"
        description="各種お問い合わせ、ご相談はこちらからお気軽にご連絡ください"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>お問い合わせ先</CardTitle>
                  <CardDescription>
                    メールでもお問い合わせいただけます
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">メール</p>
                      <p className="text-muted-foreground">info@kazumi.co.jp</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Youtube className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">YouTube</p>
                      <a
                        href="https://youtube.com/@kazumi-company"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        @kazumi-company
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>お問い合わせフォーム</CardTitle>
                  <CardDescription>
                    必須項目をご入力の上、送信してください
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">お問い合わせ種別 *</Label>
                      <select
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">選択してください</option>
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">会社名・団体名</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="株式会社○○"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">お名前 *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          placeholder="山田 太郎"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">メールアドレス *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="example@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">電話番号</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="090-1234-5678"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">お問い合わせ内容 *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="お問い合わせ内容をご記入ください"
                        rows={6}
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        checked={formData.privacy}
                        onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                        required
                        className="mt-1"
                      />
                      <Label htmlFor="privacy" className="text-sm">
                        <a href="/legal/privacy" className="text-primary underline">
                          プライバシーポリシー
                        </a>
                        に同意します *
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? '送信中...' : '送信する'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
