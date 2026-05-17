"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  const handleEnter = () => {
    setIsVisible(false)
    setTimeout(onEnter, 500)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #faf7f0 0%, #f5f0e6 50%, #faf7f0 100%)"
          }}
        >
          {/* Decorative mandala background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="mandalaPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="8" fill="none" stroke="#800020" strokeWidth="0.3" />
                  <circle cx="10" cy="10" r="4" fill="none" stroke="#c9a227" strokeWidth="0.2" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#mandalaPattern)" />
            </svg>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center px-8"
          >
            {/* Decorative top ornament */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <img className="hero-ganesh" alt="Ganesh" src="bg-ganesh-Doltar5t.png"></img>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm tracking-[0.3em] text-[#800020] uppercase mb-4"
            >
              Wedding Invitation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-5xl md:text-7xl text-[#800020] mb-2"
              style={{ fontFamily: "var(--font-great-vibes), cursive" }}
            >
              Swamy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl text-[#c9a227] tracking-widest mb-2"
            >
              weds
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-5xl md:text-7xl text-[#800020] mb-8"
              style={{ fontFamily: "var(--font-great-vibes), cursive" }}
            >
              Satya
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-muted-foreground mb-8"
            >
              Friday, June 26, 2026 • 8:49 PM
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="px-10 py-4 rounded-full text-primary-foreground font-medium tracking-wide transition-all shadow-lg"
              style={{
                background: "linear-gradient(135deg, #800020 0%, #a02040 100%)"
              }}
            >
              Open Invitation
            </motion.button>

            {/* Decorative bottom ornament */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="mt-8"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9a227]" />
                <svg className="w-6 h-6 text-[#c9a227]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L9 9L2 12L9 15L12 22L15 15L22 12L15 9L12 2Z" />
                </svg>
                <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9a227]" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
