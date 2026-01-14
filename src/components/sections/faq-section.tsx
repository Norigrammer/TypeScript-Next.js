'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  title?: string
  description?: string
  faqs: FaqItem[]
}

export function FaqSection({ title, description, faqs }: FaqSectionProps) {
  return (
    <section className="py-10 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          {(title || description) && (
            <div className="mb-8 text-center sm:mb-12">
              {title && (
                <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">{title}</h2>
              )}
              {description && (
                <p className="text-sm text-muted-foreground sm:text-base md:text-lg">{description}</p>
              )}
            </div>
          )}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
