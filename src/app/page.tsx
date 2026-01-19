'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, Brain, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/sections/hero'
import { ServiceCard } from '@/components/sections/service-card'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionHeader } from '@/components/sections/section-header'

const services = [
  {
    title: 'AI',
    description: 'ChatGPTや機械学習を活用したAI導入支援。業務自動化を支援します。',
    features: ['AI戦略策定', '業務自動化', '生成AI導入'],
    href: '/services/ai',
    ctaText: '無料相談',
    icon: Brain,
    backgroundImage: '/images/home/home_backimage_ai.jpg',
  },
  {
    title: 'スーツ販売',
    description: '上質な素材と確かな技術であなただけの一着をお仕立てします。',
    features: ['オーダーメイド対応', '採寸サービス', 'サイズ保証'],
    href: '/services/suits',
    ctaText: '無料相談',
    icon: Briefcase,
    backgroundImage: '/images/home/home_backimage_suits.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="一美Group"
        title={"ビジネスと生活を豊かにする\n2つの事業"}
        description={"AI・スーツ販売。\nそれぞれの分野で培った専門性を活かし、お客様の課題解決に貢献します。"}
        primaryCta={{ text: 'お問い合わせ', href: '/contact' }}
        backgroundImage="/images/home/home_backimage_main.jpg"
      />

      {/* Services Section */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Services"
            title="2つの事業領域"
            description="各分野のプロフェッショナルがお客様のニーズに合わせた最適なソリューションを提供します。"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 py-10 md:py-24">
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
