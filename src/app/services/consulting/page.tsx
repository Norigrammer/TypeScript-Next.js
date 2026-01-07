import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, Cog, Monitor, Users } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { FaqSection } from '@/components/sections/faq-section'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionHeader } from '@/components/sections/section-header'

export const metadata: Metadata = {
  title: 'コンサルティング',
  description: '経営戦略から業務改善、DX推進まで、ビジネスの成長をトータルでサポートします。',
}

const capabilities = [
  {
    icon: Target,
    title: '経営戦略',
    description: '中長期ビジョンの策定から事業計画立案まで',
    examples: ['経営ビジョン策定', '事業計画立案', '新規事業開発'],
  },
  {
    icon: Cog,
    title: '業務改善',
    description: '業務プロセスの可視化・分析から改善施策の実行まで',
    examples: ['業務プロセス改善', 'コスト削減', '品質管理'],
  },
  {
    icon: Monitor,
    title: 'DX推進',
    description: 'デジタル技術を活用した業務変革とイノベーション創出',
    examples: ['DX戦略策定', 'システム導入支援', 'データ活用'],
  },
  {
    icon: Users,
    title: '組織・人材開発',
    description: '組織設計から人材育成まで、持続的成長を支える基盤づくり',
    examples: ['組織設計', '人事制度構築', 'リーダー育成'],
  },
]

const faqs = [
  {
    question: 'どのような業界に対応していますか？',
    answer: '製造業、小売業、サービス業、IT業界など幅広い業界に対応しております。',
  },
  {
    question: '小規模な会社でも相談できますか？',
    answer: 'はい、企業規模に関わらずご相談いただけます。予算に応じた柔軟なプランをご用意しております。',
  },
  {
    question: 'オンラインでのコンサルティングは可能ですか？',
    answer: 'はい、オンラインミーティングに完全対応しております。',
  },
]

export default function ConsultingPage() {
  return (
    <>
      <Hero
        subtitle="Consulting"
        title="ビジネスの成長を加速する"
        description="経営戦略から業務改善、DX推進まで。課題解決のプロフェッショナルがビジネスの成長をサポートします。"
        primaryCta={{ text: '無料相談', href: '/contact?type=consulting' }}
      />

      {/* Capabilities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Capabilities"
            title="支援領域"
            description="4つの領域で、お客様のビジネス課題を解決します"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <Card key={cap.title}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{cap.title}</CardTitle>
                    <CardDescription>{cap.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {cap.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-full bg-muted px-3 py-1 text-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
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
        title="まずは無料相談から"
        description="貴社の課題をお聞かせください。最適なソリューションをご提案します。"
        primaryCta={{ text: '無料相談を予約', href: '/contact?type=consulting' }}
      />
    </>
  )
}
