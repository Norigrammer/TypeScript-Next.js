import type { Metadata } from 'next'
import Link from 'next/link'
import { Youtube, Mail } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/sections/section-header'
import { CtaSection } from '@/components/sections/cta-section'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '会社情報',
  description: '一美Groupの会社概要、経営理念、チーム情報をご紹介します。',
}

const companyInfo = [
  { label: '会社名', value: '一美Group' },
  { label: '設立', value: '2024年' },
  { label: '代表取締役', value: '渡辺 翔太' },
  { label: '従業員数', value: '4名' },
  { label: '事業内容', value: '不動産事業、スーツ販売、コンサルティング、SNSマーケティング' },
  { label: 'メール', value: 'info@kazumi.co.jp' },
]

const values = [
  {
    title: '誠実',
    description: 'お客様、パートナー、社会に対して常に誠実であり続けます',
  },
  {
    title: '挑戦',
    description: '現状に満足せず、常に新しい価値創造に挑戦し続けます',
  },
  {
    title: '成長',
    description: '個人と組織の成長を通じて、社会に貢献します',
  },
  {
    title: '協創',
    description: 'お客様と共に考え、共に創り、共に成長します',
  },
]

const team = [
  {
    name: '渡辺 翔太',
    role: '代表取締役 CEO',
    description: '創業者。経営全般を統括。',
  },
  {
    name: '矢加部 桂馬',
    role: '取締役 COO',
    description: '不動産事業責任者・スーツ販売責任者。事業運営全般を統括。',
  },
  {
    name: '下川 大慶',
    role: '取締役 CTO',
    description: '技術部門を統括。システム・インフラ全般を担当。',
  },
  {
    name: '平尾 拳成',
    role: 'CMO',
    description: 'SNSマーケティング事業責任者。マーケティング戦略を統括。',
  },
]

export default function CompanyPage() {
  return (
    <>
      <Hero
        subtitle="Company"
        title="会社情報"
        description="一美Groupについてご紹介します"
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold">経営理念</h2>
            <p className="mb-12 text-xl leading-relaxed text-muted-foreground">
              「人と企業の可能性を拓く」
            </p>
            <p className="text-muted-foreground">
              私たち一美Groupは、不動産、スーツ販売、コンサルティング、SNSマーケティングの4つの事業を通じて、
              お客様一人ひとりの可能性を最大限に引き出し、ビジネスと生活の両面から豊かな未来の実現をサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Values"
            title="私たちの価値観"
            description="一美Groupが大切にしている4つの価値観"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 text-xl font-bold text-primary">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Overview"
            title="会社概要"
          />
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody>
                    {companyInfo.map((item, index) => (
                      <tr key={item.label} className={index !== companyInfo.length - 1 ? 'border-b' : ''}>
                        <th className="w-1/3 bg-muted/50 p-4 text-left font-medium">{item.label}</th>
                        <td className="p-4">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* YouTube Link */}
            <div className="mt-8 text-center">
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://youtube.com/@kazumi-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube className="h-5 w-5" />
                  YouTubeチャンネル
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Team"
            title="経営陣"
            description="一美Groupを率いるメンバー"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted" />
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="mb-2 text-sm text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="お問い合わせ"
        description="ご質問・ご相談がございましたら、お気軽にお問い合わせください"
        primaryCta={{ text: 'お問い合わせ', href: '/contact' }}
        secondaryCta={{ text: '採用情報', href: '/recruit' }}
      />
    </>
  )
}
