import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, TrendingUp, Heart, Briefcase } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/sections/section-header'
import { CtaSection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: '採用情報',
  description: '一美株式会社で一緒に働きませんか。私たちは成長意欲のある人材を求めています。',
}

const culture = [
  {
    icon: Users,
    title: 'チームワーク',
    description: '少数精鋭のチームで、一人ひとりの意見を大切にしています',
  },
  {
    icon: TrendingUp,
    title: '成長機会',
    description: 'スタートアップならではの幅広い経験を積むことができます',
  },
  {
    icon: Heart,
    title: '柔軟な働き方',
    description: 'リモートワークなど、柔軟な働き方を推進しています',
  },
  {
    icon: Briefcase,
    title: '多様なキャリア',
    description: '4つの事業で多様なキャリアパスを描くことができます',
  },
]

export default function RecruitPage() {
  return (
    <>
      <Hero
        subtitle="Recruit"
        title="採用情報"
        description="私たちと一緒に、人と企業の可能性を拓きませんか"
        primaryCta={{ text: 'エントリー', href: '/contact?type=recruit' }}
      />

      {/* Culture */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Culture"
            title="私たちの文化"
            description="一美株式会社が大切にしている価値観"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {culture.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold">採用メッセージ</h2>
            <p className="mb-6 text-muted-foreground">
              一美株式会社は2024年に設立したばかりのスタートアップです。
              スーツ販売、不動産、コンサルティング、SNSマーケティングの4つの事業を展開し、
              お客様の多様なニーズにお応えしています。
            </p>
            <p className="text-muted-foreground">
              現在は4名の少数精鋭チームですが、事業拡大に伴い新たな仲間を募集しています。
              スタートアップならではのスピード感と裁量を持って働きたい方、
              ぜひ一緒に会社を成長させていきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="エントリーをお待ちしています"
        description="ご興味のある方は、お気軽にお問い合わせください"
        primaryCta={{ text: 'エントリーする', href: '/contact?type=recruit' }}
        secondaryCta={{ text: '会社情報を見る', href: '/company' }}
      />
    </>
  )
}
