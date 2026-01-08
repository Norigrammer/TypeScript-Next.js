import React from 'react'
import Link from 'next/link'
import { Mail, Youtube } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'スーツ販売', href: '/services/suits' },
    { name: '不動産事業', href: '/services/real-estate' },
    { name: 'コンサルティング', href: '/services/consulting' },
    { name: 'SNSマーケティング', href: '/services/sns-marketing' },
  ],
  company: [
    { name: '会社情報', href: '/company' },
    { name: '採用情報', href: '/recruit' },
  ],
  support: [
    { name: 'お問い合わせ', href: '/contact' },
  ],
  legal: [
    { name: 'プライバシーポリシー', href: '/legal/privacy' },
    { name: '利用規約', href: '/legal/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold">
              一美Group
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              スーツ販売、不動産、コンサルティング、SNSマーケティングの4つの事業を通じて、
              お客様のビジネスと生活を豊かにします。
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>info@kazumi.co.jp</span>
              </div>
              <a
                href="https://youtube.com/@kazumi-company"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm transition-colors hover:text-primary"
              >
                <Youtube className="h-4 w-4 text-muted-foreground" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold">事業内容</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">企業情報</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="font-semibold">サポート</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-semibold">法務情報</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} 一美Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
