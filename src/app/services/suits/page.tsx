import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Shield, Ruler, Scissors } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { FaqSection } from '@/components/sections/faq-section'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionHeader } from '@/components/sections/section-header'

export const metadata: Metadata = {
  title: 'スーツ販売',
  description: '上質な素材と確かな技術で、あなただけの一着をお仕立てします。パターンオーダーからフルオーダーまで対応。',
}

const orderTypes = [
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
        title={"上質なスーツで\nあなたの魅力を引き出す"}
        description="確かな技術と厳選された素材で、ビジネスシーンを彩る一着をお仕立てします。"
        primaryCta={{ text: 'お問い合わせ', href: '/contact?type=suits-reservation' }}
        backgroundImage="/images/suits/suits_main.jpg"
      />

      {/* Order Types */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Order Types"
            title="2つのオーダータイプ"
            description="ご予算やニーズに合わせて最適なオーダー方法をお選びいただけます"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {orderTypes.map((type, index) => (
              <Card key={type.title} className={index === 1 ? 'border-primary' : ''}>
                {index === 1 && (
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

      {/* Style Gallery */}
      <section className="bg-muted/50 py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Style Gallery"
            title="スタイルギャラリー"
            description="シーンに合わせた最適なスタイルをご提案します。"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'ビジネス',
                description: '毎日の仕事に最適な、機能性と品格を兼ね備えたスタイル。',
                image: '/images/suits/suits_bussiness.png',
              },
              {
                title: 'フォーマル',
                description: '結婚式や式典など、特別な日のための格式高いスタイル。',
                image: '/images/suits/suits_formal.png',
              },
              {
                title: 'カジュアル',
                description: '休日やカジュアルな場面で活躍する、リラックス感のあるスタイル。',
                image: '/images/suits/suits_casual.png',
              },
            ].map((style) => (
              <Card key={style.title} className="group overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-fill transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-xl font-bold text-white">{style.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{style.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Process"
            title="ご注文の流れ"
            description="初めての方でも安心。5つのステップで理想の一着をお届けします。"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {[
              { number: '01', title: '相談・採寸', description: 'ご要望をヒアリングし、20箇所以上を丁寧に採寸します。' },
              { number: '02', title: '生地選び', description: '100種類以上の生地から、用途や好みに合わせてお選びいただけます。' },
              { number: '03', title: 'デザイン決定', description: 'ボタン・裏地・ポケットなど細部までカスタマイズ可能です。' },
              { number: '04', title: '仕立て', description: '熟練の職人が一着一着丁寧に仕立てます。' },
              { number: '05', title: '納品・調整', description: 'フィッティング確認後、必要に応じて無料で調整いたします。' },
            ].map((step, index) => (
              <div key={step.number} className="relative text-center">
                {index < 4 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-primary/20 md:block" style={{ transform: 'translateX(50%)' }} />
                )}
                <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mb-2 font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/50 py-10 md:py-24">
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
        description="プロのスタイリストがあなたに最適な一着をご提案します。"
        primaryCta={{ text: 'お問い合わせ', href: '/contact?type=suits-reservation' }}
      />
    </>
  )
}
