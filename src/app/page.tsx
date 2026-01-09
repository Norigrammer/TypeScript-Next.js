'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, Building2, TrendingUp, Share2, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/sections/hero'
import { ServiceCard } from '@/components/sections/service-card'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionHeader } from '@/components/sections/section-header'

const services = [
  {
    title: '不動産事業',
    description: '売買・賃貸・管理まで、不動産のあらゆるニーズにお応えします。',
    features: ['物件売買サポート', '賃貸管理', '投資相談'],
    href: '/services/real-estate',
    ctaText: '物件を探す',
    icon: Building2,
    backgroundImage: '/images/home_backimage_real-estate.jpg',
  },
  {
    title: 'スーツ販売',
    description: '上質な素材と確かな技術で、あなただけの一着をお仕立てします。',
    features: ['オーダーメイド対応', '採寸サービス', 'サイズ保証'],
    href: '/services/suits',
    ctaText: '来店予約',
    icon: Briefcase,
    backgroundImage: '/images/home_backimage_suits.jpg',
  },
  {
    title: 'コンサルティング',
    description: '戦略立案から実行支援まで、ビジネスの成長をサポートします。',
    features: ['経営戦略', '業務改善', 'DX推進'],
    href: '/services/consulting',
    ctaText: '無料相談',
    icon: TrendingUp,
    backgroundImage: '/images/home_backimage_consulting.jpg',
  },
  {
    title: 'SNSマーケティング',
    description: 'SNS運用・広告・インフルエンサー活用で、ブランドの認知拡大を支援します。',
    features: ['運用代行', '広告運用', 'KOL活用'],
    href: '/services/sns-marketing',
    ctaText: '無料診断',
    icon: Share2,
    backgroundImage: '/images/home_backimage_sns.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="一美Group"
        title="ビジネスと生活を豊かにする4つの事業"
        description={"不動産、スーツ販売、コンサルティング、SNSマーケティング。\nそれぞれの分野で培った専門性を活かし、お客様の課題解決に貢献します。"}
        primaryCta={{ text: 'お問い合わせ', href: '/contact' }}
        secondaryCta={{ text: '事業一覧を見る', href: '/services' }}
        wideButtons
        backgroundImage="/images/home_backimage_main.jpg"
      />

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Services"
            title="4つの事業領域"
            description={"各分野のプロフェッショナルが\nお客様のニーズに合わせた最適なソリューションを提供します。"}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Why Choose Us"
            title="選ばれる理由"
            description="一美Groupが選ばれる理由をご紹介します。"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: '専門性の高いチーム',
                description:
                  '各事業分野において豊富な経験と専門知識を持つプロフェッショナルが対応します。',
              },
              {
                title: 'ワンストップサービス',
                description:
                  'ビジネスから生活まで、幅広いニーズに一社で対応できる総合力が強みです。',
              },
              {
                title: '長期的なパートナーシップ',
                description:
                  '一時的な取引ではなく、長期的な信頼関係を築くことを重視しています。',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="お気軽にお問い合わせください"
        description="各事業に関するご相談・お見積りは無料で承っております。まずはお気軽にご連絡ください。"
        primaryCta={{ text: 'お問い合わせ', href: '/contact' }}
      />
    </>
  )
}
