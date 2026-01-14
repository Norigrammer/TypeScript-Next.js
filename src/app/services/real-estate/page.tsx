import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Building, TrendingUp, Users } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { FaqSection } from '@/components/sections/faq-section'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionHeader } from '@/components/sections/section-header'

export const metadata: Metadata = {
  title: '不動産事業',
  description: '売買・賃貸・管理・投資まで、不動産に関するあらゆるニーズにワンストップで対応します。',
}

const services = [
  {
    icon: Home,
    title: '住宅売買',
    description: 'マイホームの購入・売却をトータルサポート',
    features: ['物件紹介・内見', '住宅ローン相談', '売却査定・仲介'],
  },
  {
    icon: Building,
    title: '賃貸仲介',
    description: 'お部屋探しから契約まで丁寧にサポート',
    features: ['物件検索・紹介', '内見同行', '契約サポート'],
  },
  {
    icon: TrendingUp,
    title: '投資相談',
    description: '不動産投資のプロがアドバイス',
    features: ['投資物件紹介', '収益シミュレーション', '運用アドバイス'],
  },
  {
    icon: Users,
    title: 'オーナーサポート',
    description: '賃貸経営のお悩みを解決',
    features: ['入居者募集', '建物管理', '収支レポート'],
  },
]

const faqs = [
  {
    question: '物件の内見は無料ですか？',
    answer: 'はい、内見は無料です。何件でもお気軽にご依頼ください。',
  },
  {
    question: '投資用物件の相談もできますか？',
    answer: 'はい、投資用物件のご相談も承っております。収益物件の選定から運用アドバイスまでサポートいたします。',
  },
  {
    question: '取り扱いエリアはどこですか？',
    answer: '東京都を中心に、神奈川・千葉・埼玉の一都三県をカバーしております。',
  },
]

export default function RealEstatePage() {
  return (
    <>
      <Hero
        subtitle="Real Estate"
        title="住まいと投資のトータルパートナー"
        description="売買・賃貸・管理・投資まで、不動産に関するあらゆるニーズにワンストップで対応します。"
        primaryCta={{ text: 'お問い合わせ', href: '/contact?type=real-estate' }}
      />

      {/* Services */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Services"
            title="サービス内容"
            description="お客様のニーズに合わせた多様なサービスをご提供します"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
        title="まずはお気軽にご相談ください"
        description="物件探しから売却・投資相談まで、専門スタッフが対応いたします。"
        primaryCta={{ text: 'お問い合わせ', href: '/contact?type=real-estate' }}
      />
    </>
  )
}
