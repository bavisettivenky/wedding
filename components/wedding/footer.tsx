"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-16 bg-[#800020] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Thank you message */}
          <h2 className="text-3xl md:text-4xl mb-4">Thank You</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            With hearts full of gratitude, we cherish your love and blessings. Your gracious presence 
            will add joy and meaning to our celebration as we begin this beautiful journey together.
          </p>

          {/* Signature */}
          <div className="mb-8">
            <p className="text-[#c9a227] italic mb-2">With Love & Blessings,</p>
            <p
              className="text-3xl text-white"
              style={{ fontFamily: "var(--font-great-vibes), cursive" }}
            >
              Swamy & Satya
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c9a227]" />
            <svg className="w-6 h-6 text-[#c9a227]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c9a227]" />
          </div>

          {/* Final message */}
          <p className="text-white/60 text-sm mb-4">
            We look forward to celebrating this beautiful day with you.
          </p>
          <h3
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: "var(--font-great-vibes), cursive" }}
          >
            Swamy Weds Satya
          </h3>

          {/* Copyright */}
          <p className="text-white/40 text-xs mt-8">
            Made with <span className="text-red-400">❤</span> • May 2026
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
