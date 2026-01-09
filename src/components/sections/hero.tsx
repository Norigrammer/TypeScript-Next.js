'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  children?: React.ReactNode
  wideButtons?: boolean
  backgroundImage?: string
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  children,
  wideButtons = false,
  backgroundImage,
}: HeroProps) {
  const buttonContainerClass = wideButtons
    ? 'flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto sm:flex-row'
    : 'flex flex-col items-center justify-center gap-4 sm:flex-row'
  const baseButtonClass = wideButtons ? 'flex-1 py-6 text-base' : ''
  const primaryButtonClass = backgroundImage
    ? baseButtonClass + ' shadow-lg'
    : baseButtonClass
  const secondaryButtonClass = backgroundImage
    ? baseButtonClass + ' shadow-lg border-2 bg-background/90'
    : baseButtonClass

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {backgroundImage ? (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-0 bg-background/70" />
        </>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-muted/50 to-background" />
      )}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-sm font-medium uppercase tracking-wider text-primary"
            >
              {subtitle}
            </motion.p>
          )}
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mb-8 whitespace-pre-line text-lg text-muted-foreground md:text-xl">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={buttonContainerClass}
            >
              {primaryCta && (
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href={primaryCta.href}>
                    {primaryCta.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant="outline" size="lg" className={secondaryButtonClass}>
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </motion.div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
