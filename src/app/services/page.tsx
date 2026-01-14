import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, Building2, Brain, Share2, ArrowRight } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '事業一覧',
  description: '一美Groupの4つの事業領域をご紹介します。不動産・スーツ販売・AIコンサルティング・SNSマーケティング。',
}

const services = [
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
    title: 'スーツ販売',
    description: '上質な素材と確かな技術で、あなただけの一着をお仕立てします。既製品からフルオーダーまで、幅広いニーズに対応。',
    features: [
      'オーダーメイド対応',
      'パターンオーダー',
      '採寸サービス',
      'サイズ保証・補正対応',
    ],
    href: '/services/suits',
    cta: '詳しく見る',
    icon: Briefcase,
  },
  {
    title: 'AIコンサルティング',
    description: 'ChatGPTや機械学習を活用したAI導入支援、および、業務自動化から生成AI活用まで、AIでビジネスを変革します。',
    features: [
      'AI戦略策定',
      '業務自動化・効率化',
      '生成AI導入支援',
    ],
    href: '/services/ai-consulting',
    cta: '詳しく見る',
    icon: Brain,
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
      <section className="py-10 md:py-24">
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
      <section className="bg-muted/50 py-10 md:py-24">
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
