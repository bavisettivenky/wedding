"use client"

import { motion } from "framer-motion"

export function FamilySection() {
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
          <p className="text-sm tracking-[0.3em] text-[#c9a227] uppercase mb-2">Our Families</p>
          <h2 className="text-3xl md:text-4xl text-[#800020]">
            With the blessings of our parents
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Groom's Family */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-sm tracking-[0.2em] text-[#c9a227] uppercase mb-4">
              {"Groom's Family"}
            </p>
            <h3 className="text-2xl text-[#800020] font-semibold mb-2">Chandina Ramudu</h3>
            <h3 className="text-2xl text-[#800020] font-semibold mb-4">Chanti</h3>
            <p className="text-muted-foreground italic">
              {"With love from Swamy's family"}
            </p>
          </motion.div>

          {/* Bride's Family */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-sm tracking-[0.2em] text-[#c9a227] uppercase mb-4">
              {"Bride's Family"}
            </p>
            <h3 className="text-2xl text-[#800020] font-semibold mb-2">Katta Srinivas</h3>
            <h3 className="text-2xl text-[#800020] font-semibold mb-4">prabhavati</h3>
            <p className="text-muted-foreground italic">
              {"With blessings from Satya's family"}
            </p>
          </motion.div>
        </div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c9a227]" />
          <svg className="w-8 h-8 text-[#c9a227]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L9 9L2 12L9 15L12 22L15 15L22 12L15 9L12 2Z" />
          </svg>
          <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c9a227]" />
        </motion.div>
      </div>
    </section>
  )
}
