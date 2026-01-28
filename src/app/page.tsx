'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Briefcase, Brain, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/sections/hero'
import { ServiceCard } from '@/components/sections/service-card'
import { CtaSection } from '@/components/sections/cta-section'
import { SectionHeader } from '@/components/sections/section-header'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

// メイン事業: 営業代行
const mainService = {
  title: '営業代行',
  description: 'テレアポ代行からフィールドセールスまで、貴社の営業活動を包括的にサポート。経験豊富な営業チームが成果にコミットします。',
  features: ['テレアポ代行', 'インサイドセールス', 'フィールドセールス', '営業コンサルティング'],
  href: '/services/sales',
  ctaText: '詳しく見る',
  icon: Phone,
  backgroundImage: '/images/home/home_backimage_sales.jpg',
}

// その他の事業
const otherServices = [
  {
    title: 'AI',
    description: 'ChatGPTや機械学習を活用したAI導入支援。業務自動化を支援します。',
    features: ['AI戦略策定', '業務自動化', '生成AI導入'],
    href: '/services/ai',
    ctaText: '詳しく見る',
    icon: Brain,
    backgroundImage: '/images/home/home_backimage_ai.jpg',
  },
  {
    title: 'スーツ販売',
    description: '上質な素材と確かな技術であなただけの一着をお仕立てします。',
    features: ['オーダーメイド対応', '採寸サービス', 'サイズ保証'],
    href: '/services/suits',
    ctaText: '詳しく見る',
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
        title={"ビジネスと生活を豊かにする\n3つの事業"}
        description={"営業代行・AI・スーツ販売。\nそれぞれの分野で培った専門性を活かし、お客様の課題解決に貢献します。"}
        primaryCta={{ text: 'お問い合わせ', href: '/contact' }}
        backgroundImage="/images/home/home_backimage_main.jpg"
      />

      {/* Services Section */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Services"
            title="3つの事業領域"
            description="各分野のプロフェッショナルがお客様のニーズに合わせた最適なソリューションを提供します。"
          />

          {/* メイン事業: 営業代行 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Card className="group relative overflow-hidden border-primary transition-shadow hover:shadow-xl">
              {mainService.backgroundImage && (
                <>
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={mainService.backgroundImage}
                      alt=""
                      fill
                      className="object-cover blur-[2px] transition-all duration-300 group-hover:blur-[0.5px] group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 z-0 bg-background/80 transition-opacity duration-300 group-hover:bg-background/70" />
                </>
              )}
              <div className="relative z-10 p-6 md:p-8 lg:p-10">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-7 w-7 text-primary" />
                      </div>
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        メイン事業
                      </span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold md:text-3xl">{mainService.title}</h3>
                    <p className="text-muted-foreground">{mainService.description}</p>
                  </div>
                  <div className="flex items-center">
                    <ul className="grid w-full gap-3 sm:grid-cols-2">
                      {mainService.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm md:text-base">
                          <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild size="lg" className="group/btn transition-colors hover:bg-white hover:text-black">
                    <Link href={mainService.href}>
                      {mainService.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* その他の事業 */}
          <div className="grid gap-6 md:grid-cols-2">
            {otherServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index + 1} />
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
