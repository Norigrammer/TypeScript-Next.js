'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Stat {
  value: string
  label: string
  suffix?: string
}

interface StatsSectionProps {
  title?: string
  description?: string
  stats: Stat[]
}

export function StatsSection({ title, description, stats }: StatsSectionProps) {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
                {stat.suffix && (
                  <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                )}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
