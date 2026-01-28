import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Users, Briefcase, TrendingUp, ArrowRight, Check, MessageSquare, Target, BarChart3, Handshake } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { FaqSection } from '@/components/sections/faq-section'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionHeader } from '@/components/sections/section-header'

export const metadata: Metadata = {
  title: '営業代行',
  description: 'テレアポ代行からフィールドセールスまで、貴社の営業活動を包括的にサポート。経験豊富な営業チームが成果にコミットします。',
}

const services = [
  {
    icon: Phone,
    title: 'テレアポ代行',
    description: '経験豊富なオペレーターがターゲットリストに基づいて効率的にアポイントを獲得',
    examples: ['新規顧客開拓', 'リスト作成・精査', 'アポイント獲得'],
  },
  {
    icon: MessageSquare,
    title: 'インサイドセールス',
    description: '見込み顧客の育成から商談化まで、非対面での営業活動を代行',
    examples: ['リードナーチャリング', 'メール・電話フォロー', '商談設定'],
  },
  {
    icon: Handshake,
    title: 'フィールドセールス',
    description: '対面での商談・提案活動を代行し、成約までサポート',
    examples: ['訪問営業', '商談・プレゼン', 'クロージング'],
  },
  {
    icon: TrendingUp,
    title: '営業コンサルティング',
    description: '営業プロセスの分析・改善から、営業組織の構築までトータルで支援',
    examples: ['営業戦略策定', 'KPI設計・管理', '営業研修・教育'],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'ヒアリング',
    description: '貴社の商材・ターゲット・課題を詳しくお伺いし、営業戦略の方向性を確認します。',
  },
  {
    number: '02',
    title: '戦略立案',
    description: 'ヒアリング内容をもとに、最適な営業アプローチと具体的な実行計画を策定します。',
  },
  {
    number: '03',
    title: '実行',
    description: '専任チームが営業活動を開始。進捗状況は随時共有し、柔軟に対応します。',
  },
  {
    number: '04',
    title: '報告・改善',
    description: '定期的な報告会で成果を共有。PDCAサイクルを回し、継続的に改善します。',
  },
]

const pricingPlans = [
  {
    name: 'スポットプラン',
    price: '100,000円〜',
    priceUnit: '/月',
    description: '特定のキャンペーンや短期プロジェクト向け',
    features: [
      'テレアポ代行（〜100件/月）',
      'リスト作成サポート',
      '週次レポート',
      'チャットサポート',
    ],
    highlighted: false,
  },
  {
    name: '月額プラン',
    price: '300,000円〜',
    priceUnit: '/月',
    description: '継続的な営業活動をお考えの企業向け',
    features: [
      'テレアポ代行（無制限）',
      'インサイドセールス代行',
      '専任担当者配置',
      '週次ミーティング',
      'CRM連携対応',
    ],
    highlighted: true,
  },
  {
    name: 'フルサポート',
    price: '応相談',
    priceUnit: '',
    description: 'フィールドセールスを含む包括的支援',
    features: [
      '全サービス対応',
      'フィールドセールス代行',
      '営業コンサルティング',
      '成果報酬型オプション',
      '経営層向け報告会',
    ],
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'どのような業種・商材に対応していますか？',
    answer: 'BtoB商材を中心に、IT・製造・サービス業など幅広い業種に対応しています。商材の特性に合わせて最適な営業手法をご提案します。',
  },
  {
    question: '成果報酬型のプランはありますか？',
    answer: 'はい、アポイント獲得や成約に応じた成果報酬型のプランもご用意しています。詳細はお問い合わせください。',
  },
  {
    question: '最低契約期間はありますか？',
    answer: 'スポットプランは1ヶ月から、月額プランは3ヶ月からご契約いただけます。まずは短期間でお試しいただくことも可能です。',
  },
  {
    question: '営業活動の進捗はどのように確認できますか？',
    answer: '週次でレポートを共有し、月次でオンラインミーティングを実施します。CRM連携により、リアルタイムでの進捗確認も可能です。',
  },
]

export default function SalesPage() {
  return (
    <>
      <Hero
        subtitle="Sales Outsourcing"
        title={"営業のプロが\n貴社の成長を加速"}
        description={"テレアポ代行からフィールドセールスまで、\n貴社の営業活動を包括的にサポートします。"}
        primaryCta={{ text: '無料相談', href: '/contact?type=consulting' }}
        backgroundImage="/images/sales/sales_main.jpg"
      />

      {/* Services Section */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="サービス内容"
            description="貴社の営業課題に合わせた最適なソリューションを提供します。"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
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
                      {service.examples.map((example) => (
                        <li key={example} className="flex items-center text-sm">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          {example}
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

      {/* Process Section */}
      <section className="bg-muted/50 py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="導入の流れ"
            description="4つのステップで営業活動を開始します。"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {step.number}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="料金プラン"
            description="お客様のニーズに合わせた柔軟なプランをご用意しています。"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${plan.highlighted ? 'border-primary shadow-lg' : ''}`}
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.priceUnit && (
                      <span className="text-muted-foreground">{plan.priceUnit}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant={plan.highlighted ? 'default' : 'outline'}
                    className="w-full"
                  >
                    <Link href="/contact">
                      お問い合わせ
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 py-10 md:py-24">
        <div className="container mx-auto px-4">
          <FaqSection title="よくあるご質問" faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="営業課題を解決しませんか？"
        description="貴社の営業活動をどのようにサポートできるか、まずはお気軽にご相談ください。"
        primaryCta={{ text: 'お問い合わせ', href: '/contact?type=consulting' }}
      />
    </>
  )
}
