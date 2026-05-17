"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Petal {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  rotation: number
  color: string
}

const petalColors = ["#ffb6c1", "#ffc0cb", "#ffccd5", "#ff8fa3", "#ff758f"]

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    // Generate random petals
    const newPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15,
      rotation: Math.random() * 360,
      color: petalColors[Math.floor(Math.random() * petalColors.length)]
    }))
    setPetals(newPetals)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            x: `${petal.x}vw`,
            y: "-5vh",
            rotate: petal.rotation,
            opacity: 0.8
          }}
          animate={{
            y: "105vh",
            rotate: petal.rotation + 720,
            opacity: [0.8, 1, 0.8, 0]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute"
          style={{
            width: petal.size,
            height: petal.size
          }}
        >
          <svg
            viewBox="0 0 20 20"
            className="w-full h-full"
            style={{ color: petal.color }}
          >
            <ellipse
              cx="10"
              cy="10"
              rx="8"
              ry="10"
              fill="currentColor"
              opacity="0.7"
            />
            <ellipse
              cx="10"
              cy="10"
              rx="4"
              ry="8"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
