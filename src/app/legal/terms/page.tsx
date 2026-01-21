import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '利用規約',
  description: '一美Groupのウェブサイト利用規約をご確認ください。',
}

export default function TermsPage() {
  return (
    <>
      <Hero
        subtitle="Terms of Service"
        title="利用規約"
      />

      <section className="py-3 md:py-6">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl">
            <CardContent className="prose prose-sm max-w-none p-8">
              <p className="text-sm text-muted-foreground">最終更新日: 2026年3月31日</p>

              <h2 className="mt-8 text-xl font-bold">第1条（適用範囲）</h2>
              <p>
                本利用規約（以下「本規約」）は、一美Group（以下「当社」）が
                運営するウェブサイト（以下「本サイト」）の利用条件を定めるものです。
              </p>

              <h2 className="mt-8 text-xl font-bold">第2条（著作権）</h2>
              <p>
                本サイトに掲載されているコンテンツの著作権は、当社または正当な権利者に帰属します。
              </p>

              <h2 className="mt-8 text-xl font-bold">第3条（禁止事項）</h2>
              <p>利用者は、本サイトの利用にあたり、以下の行為を行ってはなりません：</p>
              <ul>
                <li>法令または公序良俗に違反する行為</li>
                <li>当社または第三者の権利を侵害する行為</li>
                <li>本サイトの運営を妨害する行為</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">第4条（免責事項）</h2>
              <p>
                当社は、本サイトに掲載する情報の正確性、完全性について、いかなる保証も行いません。
              </p>

              <h2 className="mt-8 text-xl font-bold">第5条（準拠法・管轄裁判所）</h2>
              <p>
                本規約の解釈および適用については、日本法を準拠法とします。
              </p>

              <h2 className="mt-8 text-xl font-bold">第6条（お問い合わせ）</h2>
              <p>本規約に関するお問い合わせは、以下までご連絡ください。</p>
              <p>
                一美Group<br />
                Email: info@hitomi-group.jp
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
