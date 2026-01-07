import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Shield, Ruler, Scissors } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { FaqSection } from '@/components/sections/faq-section'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionHeader } from '@/components/sections/section-header'

export const metadata: Metadata = {
  title: 'スーツ販売',
  description: '上質な素材と確かな技術で、あなただけの一着をお仕立てします。オーダーメイドから既製品まで幅広く対応。',
}

const orderTypes = [
  {
    title: '既製品',
    description: '豊富なサイズ展開とデザインから選べる既製スーツ',
    price: '¥29,800〜',
    features: ['幅広いサイズ展開', '即日お持ち帰り可能', '補正対応可'],
  },
  {
    title: 'パターンオーダー',
    description: 'ベースパターンから体型に合わせて調整',
    price: '¥49,800〜',
    features: ['生地・デザイン選択可', '細かなサイズ調整', 'ネーム刺繍対応'],
  },
  {
    title: 'フルオーダー',
    description: 'ゼロから型紙を作成する完全オーダーメイド',
    price: '¥98,000〜',
    features: ['完全オリジナル型紙', '最高級生地対応', '仮縫い確認あり'],
  },
]

const features = [
  {
    icon: Scissors,
    title: '熟練の職人技',
    description: '経験豊富な職人が一着一着丁寧に仕立てます',
  },
  {
    icon: Ruler,
    title: '精密な採寸',
    description: '20箇所以上を測定し、完璧なフィット感を実現',
  },
  {
    icon: Shield,
    title: 'サイズ保証',
    description: '納品後のサイズ調整は無料で対応いたします',
  },
  {
    icon: Clock,
    title: 'スピード対応',
    description: 'お急ぎの場合は特急仕上げにも対応可能',
  },
]

const faqs = [
  {
    question: '採寸にはどのくらい時間がかかりますか？',
    answer: '初回の採寸は約30分〜1時間程度お時間をいただいております。',
  },
  {
    question: '完成後にサイズが合わなかった場合はどうなりますか？',
    answer: '納品後1ヶ月以内のサイズ調整は無料で対応いたします。',
  },
  {
    question: '急ぎで必要な場合は対応可能ですか？',
    answer: 'パターンオーダーの場合、追加料金にて1週間程度での特急仕上げも承っております。',
  },
]

export default function SuitsPage() {
  return (
    <>
      <Hero
        subtitle="Suits"
        title="上質なスーツで、あなたの魅力を引き出す"
        description="確かな技術と厳選された素材で、ビジネスシーンを彩る一着をお仕立てします。"
        primaryCta={{ text: 'お問い合わせ', href: '/contact?type=suits-reservation' }}
      />

      {/* Order Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Order Types"
            title="3つのオーダータイプ"
            description="ご予算やニーズに合わせて最適なオーダー方法をお選びいただけます"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {orderTypes.map((type, index) => (
              <Card key={type.title} className={index === 2 ? 'border-primary' : ''}>
                {index === 2 && (
                  <div className="bg-primary px-4 py-1 text-center text-sm text-primary-foreground">
                    おすすめ
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{type.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Why Choose Us"
            title="選ばれる理由"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-background">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="よくあるご質問"
        faqs={faqs}
      />

      {/* CTA */}
      <CtaSection
        title="まずはお問い合わせから"
        description="プロのスタイリストがあなたに最適な一着をご提案します"
        primaryCta={{ text: 'お問い合わせ', href: '/contact?type=suits-reservation' }}
      />
    </>
  )
}
