import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, Cog, Monitor, Users, ArrowRight, CheckCircle, Store, Factory, Building, Check } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { FaqSection } from '@/components/sections/faq-section'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionHeader } from '@/components/sections/section-header'

export const metadata: Metadata = {
  title: 'AI',
  description: 'ChatGPTや機械学習を活用したAI導入支援。\n業務自動化から生成AI活用まで、AIでビジネスを変革します。',
}

const capabilities = [
  {
    icon: Target,
    title: 'AI戦略策定',
    description: '企業のAI活用ビジョンと導入ロードマップを策定',
    examples: ['AI導入計画', '投資対効果分析', 'AI活用領域特定'],
  },
  {
    icon: Cog,
    title: '業務自動化',
    description: 'AIを活用した業務プロセスの自動化・効率化を支援',
    examples: ['RPA×AI連携', 'データ入力自動化', '問い合わせ対応自動化'],
  },
  {
    icon: Monitor,
    title: '生成AI導入',
    description: 'ChatGPT等の生成AIを業務に活用するための導入支援',
    examples: ['ChatGPT活用', '社内AI基盤構築', 'プロンプト設計'],
  },
  {
    icon: Users,
    title: 'AI人材育成',
    description: 'AI活用スキルを持つ人材の育成と組織体制の構築',
    examples: ['AI研修プログラム', 'ハンズオン講座', 'AI推進チーム構築'],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'ヒアリング',
    description: '現状の課題やAI活用の目的を詳しくお伺いし、お客様のビジネスを深く理解します。',
  },
  {
    number: '02',
    title: '課題分析',
    description: 'ヒアリング内容をもとに、AI導入による解決可能な課題を特定・分析します。',
  },
  {
    number: '03',
    title: 'AI戦略提案',
    description: '最適なAIソリューションと導入ロードマップをご提案いたします。',
  },
  {
    number: '04',
    title: '導入支援',
    description: 'AIシステムの構築から社内への展開まで、スムーズな導入をサポートします。',
  },
  {
    number: '05',
    title: '運用サポート',
    description: '導入後の運用改善や追加機能の開発など、継続的にサポートいたします。',
  },
]

const useCases = [
  {
    icon: Store,
    industry: '小売業',
    examples: [
      '顧客データ分析による購買予測',
      '在庫最適化とロス削減',
      'チャットボットによる顧客対応自動化',
      '売上予測による仕入れ最適化',
    ],
  },
  {
    icon: Factory,
    industry: '製造業',
    examples: [
      '品質検査の自動化・異常検知',
      '生産ラインの最適化',
      '予知保全による機械故障の未然防止',
      'AI画像認識による不良品検出',
    ],
  },
  {
    icon: Building,
    industry: 'サービス業',
    examples: [
      '問い合わせ対応の自動化',
      '顧客満足度予測と改善提案',
      'マーケティング施策の最適化',
      '営業支援ツールの構築',
    ],
  },
]

const pricingPlans = [
  {
    name: 'スポット相談',
    price: '50,000円〜',
    priceUnit: '/回',
    description: 'まずはAI活用の可能性を探りたい方向け',
    features: [
      'AI活用可能性診断',
      '基本的な導入相談',
      '活用事例紹介',
      '概算見積もり',
    ],
    highlighted: false,
  },
  {
    name: '基本プラン',
    price: '300,000円〜',
    priceUnit: '/月',
    description: '本格的なAI導入をお考えの企業向け',
    features: [
      'AI戦略策定サポート',
      '導入プロジェクト支援',
      '社内研修・勉強会',
      '月次レポート・改善提案',
      'チャット・メールサポート',
    ],
    highlighted: true,
  },
  {
    name: 'フルサポート',
    price: '応相談',
    priceUnit: '',
    description: 'AI専門チームによる包括的支援',
    features: [
      'カスタムAI開発',
      '専任コンサルタント配置',
      '24時間サポート',
      'AI人材育成プログラム',
      '経営層向け報告会',
    ],
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'AI導入にはどのくらいの期間が必要ですか?',
    answer: 'プロジェクトの規模により異なりますが、一般的には3〜6ヶ月程度です。まずはスモールスタートで効果を検証し、段階的に拡大することも可能です。',
  },
  {
    question: 'AI導入に必要な初期費用はどのくらいですか?',
    answer: '導入するAIソリューションにより異なります。まずは無料相談で課題をお伺いし、最適なプランをご提案いたします。',
  },
  {
    question: '社内にAI人材がいなくても大丈夫ですか?',
    answer: 'はい、問題ございません。AI人材育成プログラムもご提供しておりますので、導入と並行してスキルアップが可能です。',
  },
  {
    question: 'どのような業種・規模の企業が対象ですか?',
    answer: '業種・規模を問わず対応可能です。中小企業から大企業まで、それぞれの状況に合わせた最適なソリューションをご提案します。',
  },
]

export default function AiPage() {
  return (
    <>
      <Hero
        subtitle="AI"
        title={"AIソリューションで\nビジネスを変革"}
        description={"ChatGPTや機械学習を活用したAI導入支援。\n業務自動化から生成AI活用まで、AIでビジネスを変革します。"}
        primaryCta={{ text: '無料相談', href: '/contact?type=consulting' }}
        backgroundImage="/images/ai/ai_main.jpg"
      />

      {/* Capabilities Section */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="サービス内容"
            description="企業のAI活用を包括的に支援します。"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon
              return (
                <Card key={capability.title}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{capability.title}</CardTitle>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {capability.examples.map((example) => (
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
            description="お客様に寄り添った5つのステップでAI導入を実現します。"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Use Cases Section */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="業種別AI活用シーン"
            description="様々な業種でAIが活躍しています。"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <Card key={useCase.industry}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{useCase.industry}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {useCase.examples.map((example) => (
                        <li key={example} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{example}</span>
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

      {/* Pricing Section */}
      <section className="bg-muted/50 py-10 md:py-24">
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
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <FaqSection title="よくあるご質問" faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="AI導入について相談してみませんか?"
        description="お客様のビジネスにAIがどう活用できるか、まずはお気軽にご相談ください。"
        primaryCta={{ text: 'お問い合わせ', href: '/contact?type=consulting' }}
      />
    </>
  )
}
