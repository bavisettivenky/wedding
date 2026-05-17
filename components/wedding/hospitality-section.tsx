"use client"

import { motion } from "framer-motion"

export function HospitalitySection() {
  const hospitalityItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
        </svg>
      ),
      title: "Welcome Refreshments",
      description: "Served before the main ceremony begins"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
        </svg>
      ),
      title: "Wedding Dinner",
      description: "Festive dinner service from 7PM onwards"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Cuisine Style",
      description: "Traditional wedding feast with curated regional favorites"
    }
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] text-[#c9a227] uppercase mb-2">Food & Hospitality</p>
          <h2 className="text-3xl md:text-4xl text-[#800020]">
            Shared with care for every guest
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Your presence is a blessing to us. With heartfelt hospitality and a spread of traditional 
            delicacies, we look forward to welcoming you with warmth and care throughout the celebration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {hospitalityItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-muted/30 border border-border"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227]">
                {item.icon}
              </div>
              <h3 className="text-lg text-[#800020] font-semibold mb-2 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
