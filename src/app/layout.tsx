import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: {
    default: '一美株式会社 | スーツ販売・不動産・コンサルティング・SNSマーケティング',
    template: '%s | 一美株式会社',
  },
  description:
    '一美株式会社は、スーツ販売、不動産、コンサルティング、SNSマーケティングの4つの事業を通じて、お客様のビジネスと生活を豊かにします。',
  keywords: ['一美株式会社', 'スーツ販売', '不動産', 'コンサルティング', 'SNSマーケティング'],
  authors: [{ name: '一美株式会社' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '一美株式会社',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
