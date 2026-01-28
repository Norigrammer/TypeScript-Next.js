import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, Brain, Phone, ArrowRight } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '事業一覧',
  description: '一美Groupの3つの事業領域をご紹介します。営業代行・AI・スーツ販売。',
}

const services = [
  {
    title: '営業代行',
    description: 'テレアポ代行からフィールドセールスまで、貴社の営業活動を包括的にサポート。経験豊富な営業チームが成果にコミットします。',
    features: [
      'テレアポ代行',
      'インサイドセールス',
      'フィールドセールス',
      '営業コンサルティング',
    ],
    href: '/services/sales',
    cta: '詳しく見る',
    icon: Phone,
    isMain: true,
  },
  {
    title: 'AI',
    description: 'ChatGPTや機械学習を活用したAI導入支援、および、業務自動化から生成AI活用まで、AIでビジネスを変革します。',
    features: [
      'AI戦略策定',
      '業務自動化・効率化',
      '生成AI導入支援',
    ],
    href: '/services/ai',
    cta: '詳しく見る',
    icon: Brain,
    isMain: false,
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
    isMain: false,
  },
]

export default function ServicesPage() {
  return (
    <>
      <Hero
        subtitle="Our Services"
        title="3つの事業領域"
        description="それぞれの分野で培った専門性を活かし、お客様の多様なニーズにお応えします。"
      />

      {/* Services Grid */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className={`flex flex-col ${service.isMain ? 'border-primary shadow-lg' : ''}`}
                >
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      {service.isMain && (
                        <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                          メイン事業
                        </span>
                      )}
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
                    <Button asChild variant={service.isMain ? 'default' : 'outline'}>
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
