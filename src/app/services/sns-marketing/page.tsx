import type { Metadata } from 'next'
import Link from 'next/link'
import { Instagram, Twitter, Video, Users, BarChart3, Megaphone, PenTool } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { FaqSection } from '@/components/sections/faq-section'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionHeader } from '@/components/sections/section-header'

export const metadata: Metadata = {
  title: 'SNSマーケティング',
  description: 'Instagram、TikTok、X等のSNS運用からインフルエンサー活用まで、デジタルマーケティングを支援します。',
}

const platforms = [
  {
    icon: Instagram,
    name: 'Instagram',
    description: 'ビジュアル重視のブランディングとEC連携',
    features: ['フィード投稿', 'ストーリーズ', 'リール制作'],
  },
  {
    icon: Video,
    name: 'TikTok',
    description: 'ショート動画でZ世代・ミレニアル世代へリーチ',
    features: ['動画企画・制作', 'トレンド活用', 'UGC促進'],
  },
  {
    icon: Twitter,
    name: 'X (Twitter)',
    description: 'リアルタイム発信とコミュニティ形成',
    features: ['投稿運用', 'トレンド対応', 'キャンペーン'],
  },
]

const services = [
  {
    icon: PenTool,
    title: 'コンテンツ制作',
    description: '写真・動画・デザインまでワンストップで制作',
  },
  {
    icon: Megaphone,
    title: '運用代行',
    description: '投稿計画から実行、分析レポートまで完全代行',
  },
  {
    icon: BarChart3,
    title: '広告運用',
    description: '各プラットフォームの広告を最適化運用',
  },
  {
    icon: Users,
    title: 'インフルエンサー',
    description: 'KOL・インフルエンサーのキャスティング・管理',
  },
]

const faqs = [
  {
    question: 'どのSNSから始めるべきですか？',
    answer: 'ターゲット層や商材によって最適なプラットフォームは異なります。無料診断で貴社に最適なプラットフォームをご提案いたします。',
  },
  {
    question: '投稿内容は確認できますか？',
    answer: 'はい、投稿前に必ずクライアント様に確認いただいております。',
  },
  {
    question: '効果測定はどのように行いますか？',
    answer: '月次レポートでフォロワー推移、エンゲージメント率、リーチ数などを詳細にご報告します。',
  },
]

export default function SnsMarketingPage() {
  return (
    <>
      <Hero
        subtitle="SNS Marketing"
        title="SNSでブランドの認知を拡大"
        description="Instagram、TikTok、Xの運用からインフルエンサー活用まで。デジタルマーケティングのプロがブランドの成長を支援します。"
        primaryCta={{ text: '無料診断', href: '/contact?type=sns-marketing' }}
      />

      {/* Platforms */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Platforms"
            title="対応プラットフォーム"
            description="主要SNSプラットフォームを網羅的にサポート"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {platforms.map((platform) => {
              const Icon = platform.icon
              return (
                <Card key={platform.name}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{platform.name}</CardTitle>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-muted px-3 py-1 text-sm"
                        >
                          {feature}
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

      {/* Services */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Services"
            title="サービス内容"
            description="SNSマーケティングに必要なすべてをワンストップで提供"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-background">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
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
        title="まずは無料診断から"
        description="貴社のSNSアカウントを分析し、最適な戦略をご提案します"
        primaryCta={{ text: '無料診断を申し込む', href: '/contact?type=sns-marketing' }}
      />
    </>
  )
}
