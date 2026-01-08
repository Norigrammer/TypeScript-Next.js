import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, Building2, TrendingUp, Share2, ArrowRight } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '事業一覧',
  description: '一美Groupの4つの事業領域をご紹介します。スーツ販売、不動産、コンサルティング、SNSマーケティング。',
}

const services = [
  {
    title: 'スーツ販売',
    description: '上質な素材と確かな技術で、あなただけの一着をお仕立てします。既製品からフルオーダーまで、幅広いニーズに対応。',
    features: [
      'オーダーメイドスーツ',
      'パターンオーダー',
      '採寸サービス',
      'サイズ保証・補正対応',
    ],
    href: '/services/suits',
    cta: '詳しく見る',
    icon: Briefcase,
  },
  {
    title: '不動産事業',
    description: '売買・賃貸・管理・投資まで、不動産に関するあらゆるニーズにワンストップで対応します。',
    features: [
      '物件売買サポート',
      '賃貸仲介・管理',
      '投資物件相談',
    ],
    href: '/services/real-estate',
    cta: '詳しく見る',
    icon: Building2,
  },
  {
    title: 'コンサルティング',
    description: '経営戦略から業務改善、DX推進まで、ビジネスの成長をトータルでサポートします。',
    features: [
      '経営戦略立案',
      '業務プロセス改善',
      'DX・デジタル化支援',
    ],
    href: '/services/consulting',
    cta: '詳しく見る',
    icon: TrendingUp,
  },
  {
    title: 'SNSマーケティング',
    description: 'Instagram、TikTok、X等のSNS運用からインフルエンサー活用まで、デジタルマーケティングを支援します。',
    features: [
      'SNS運用代行',
      '広告運用',
      'インフルエンサーマーケティング',
    ],
    href: '/services/sns-marketing',
    cta: '詳しく見る',
    icon: Share2,
  },
]

export default function ServicesPage() {
  return (
    <>
      <Hero
        subtitle="Our Services"
        title="4つの事業領域"
        description="それぞれの分野で培った専門性を活かし、お客様の多様なニーズにお応えします。"
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={service.href}>
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">どの事業についてお問い合わせですか？</h2>
          <p className="mb-8 text-muted-foreground">
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
