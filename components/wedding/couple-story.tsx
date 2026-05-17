"use client"

import { motion } from "framer-motion"

interface StoryMilestone {
  id: string
  number: string
  title: string
  description: string
}

const storyMilestones: StoryMilestone[] = [
  {
    id: "beginning",
    number: "01",
    title: "A Meaningful Beginning",
    description: "Swamy and Satya's journey began with a simple introduction that blossomed into heartfelt conversations, shared laughter, and a deep, beautiful connection."
  },
  {
    id: "families",
    number: "02",
    title: "Families Came Together",
    description: "Guided by family values and cherished traditions, their union began with a respectful meeting, soon growing into a meaningful and harmonious relationship."
  },
  {
    id: "chapter",
    number: "03",
    title: "A New Chapter",
    description: "With love as their foundation, they now step into a new chapter of life, inviting you to witness the moment they promise forever to each other."
  }
]

export function CoupleStory() {
  return (
    <section id="story" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-[#c9a227] uppercase mb-2">Our Story</p>
          <h2 className="text-3xl md:text-4xl text-[#800020]">
            A journey written with warmth and grace
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {/* Number indicator */}
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #c9a227 0%, #d4af37 100%)"
                  }}
                >
                  {milestone.number}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl text-[#800020] font-semibold mb-3">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <svg className="w-8 h-8 mx-auto text-[#c9a227] mb-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p
              className="text-2xl md:text-3xl text-[#800020] italic"
              style={{ fontFamily: "var(--font-great-vibes), cursive" }}
            >
              {"Two souls, one heart, one beautiful journey"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
