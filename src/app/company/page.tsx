import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/sections/hero'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/sections/section-header'
import { CtaSection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: '会社情報',
  description: '一美Groupの会社概要、経営理念、チーム情報をご紹介します。',
}

const companyInfo = [
  { label: '会社名', value: '一美Group' },
  { label: '設立', value: '2026年3月31日' },
  { label: '代表取締役', value: '渡辺 翔太' },
  { label: '従業員数', value: '2名' },
  { label: '事業内容', value: 'AI、スーツ販売' },
  { label: 'メール', value: 'info@hitomi.co.jp' },
]

const values = [
  {
    title: '成長',
    description: '常に学び続け、自己成長を追求します。',
  },
  {
    title: '挑戦',
    description: '失敗を恐れず、新しいことに果敢に挑みます。',
  },
  {
    title: '感謝',
    description: 'お客様や仲間への感謝の心を大切にします。',
  },
  {
    title: 'チームワーク',
    description: '互いを尊重し、支え合います。',
  },
]

const team = [
  {
    name: '渡辺 翔太',
    role: '代表取締役 CEO',
    description: '創業者、スーツ販売責任者\n経営全般を統括',
  },
  {
    name: '下川 大慶',
    role: '取締役 CTO',
    description: '技術部門を統括\nシステム・インフラ全般を担当',
    image: '/images/company/company_shimogawa.jpg',
  },
]

export default function CompanyPage() {
  return (
    <>
      <Hero
        subtitle="Company"
        title="会社情報"
        description="一美Groupについてご紹介します。"
        backgroundImage="/images/company/company_main.jpg"
      />

      {/* Company Philosophy */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">企業理念</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground sm:mb-12 sm:text-xl">
              「誰かのために、社会のために。」
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              私たち一美グループは若手を中心としたチームで、AI・スーツ販売の2つの事業を通じて、お客様一人ひとりと真摯に向き合います。
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/50 py-10 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">経営理念</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground sm:mb-12 sm:text-xl">
              「一人ひとりの幸せが、社会を変える。」
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              人の可能性を最大限に引き出し、ビジネスの成功だけでなく、日常生活そのものが豊かになる未来の実現を支援します。
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 md:py-24">
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
      <section className="bg-muted/50 py-10 md:py-24">
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
                        <th className="whitespace-nowrap bg-muted/50 px-4 py-3 text-left font-medium text-sm sm:text-base">{item.label}</th>
                        <td className="p-4 text-sm sm:text-base">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Team"
            title="経営陣"
            description="一美Groupを率いるメンバー"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center">
                  {member.image ? (
                    <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted" />
                  )}
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="mb-2 text-sm text-primary">{member.role}</p>
                  <p className="whitespace-pre-line text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="お問い合わせ"
        description="ご質問・ご相談がございましたら、お気軽にお問い合わせください。"
        primaryCta={{ text: 'お問い合わせ', href: '/contact' }}
        secondaryCta={{ text: '採用情報', href: '/recruit' }}
      />
    </>
  )
}
