'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  features?: string[]
  href: string
  ctaText?: string
  icon?: LucideIcon
  index?: number
}

export function ServiceCard({
  title,
  description,
  features,
  href,
  ctaText = '詳しく見る',
  icon: Icon,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="flex h-full flex-col transition-shadow hover:shadow-lg">
        <CardHeader>
          {Icon && (
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {features && features.length > 0 && (
          <CardContent className="flex-1">
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-muted-foreground">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        )}
        <CardFooter>
          <Button asChild variant="ghost" className="group p-0">
            <Link href={href}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
