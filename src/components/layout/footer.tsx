'use client'

import React from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const footerLinks = {
  services: [
    { name: 'AI', href: '/services/ai' },
    { name: 'スーツ販売', href: '/services/suits' },
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

const footerSections = [
  { title: '事業内容', links: footerLinks.services },
  { title: '企業情報', links: footerLinks.company },
  { title: 'サポート', links: footerLinks.support },
  { title: '法務情報', links: footerLinks.legal },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        {/* Desktop Layout */}
        <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold">
              一美Group
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AI・スーツ販売の2つの事業を通じて、
              お客様のビジネスと生活を豊かにします。
            </p>
            <div className="mt-6">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>info@hitomi-group.jp</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
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
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Company Info */}
          <div className="mb-6">
            <Link href="/" className="text-xl font-bold">
              一美Group
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AI・スーツ販売の2つの事業を通じて、
              お客様のビジネスと生活を豊かにします。
            </p>
            <div className="mt-6">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>info@hitomi-group.jp</span>
              </div>
            </div>
          </div>

          {/* Accordion Links */}
          <Accordion type="multiple" className="w-full">
            {footerSections.map((section) => (
              <AccordionItem key={section.title} value={section.title}>
                <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
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
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
