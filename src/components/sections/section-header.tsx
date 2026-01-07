'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'mx-auto max-w-3xl text-center' : ''}`}
    >
      {subtitle && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
          {subtitle}
        </p>
      )}
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </motion.div>
  )
}
