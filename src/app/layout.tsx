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
    default: '一美Group | 不動産・スーツ販売・AIコンサルティング・SNSマーケティング',
    template: '%s | 一美Group',
  },
  description:
    '一美Groupは、不動産・スーツ販売・AIコンサルティング・SNSマーケティングの4つの事業を通じて、お客様のビジネスと生活を豊かにします。',
  keywords: ['一美Group', '不動産', 'スーツ販売', 'AIコンサルティング', 'SNSマーケティング'],
  authors: [{ name: '一美Group' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '一美Group',
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
