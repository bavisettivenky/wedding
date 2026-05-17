"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
  {
    id: 1,
    title: "Pre-wedding Celebration",
    description: "A beautiful moment captured during the engagement"
  },
  {
    id: 2,
    title: "Together Forever",
    description: "The couple sharing a heartfelt moment"
  },
  {
    id: 3,
    title: "Family Blessings",
    description: "Receiving blessings from both families"
  },
  {
    id: 4,
    title: "Traditional Elegance",
    description: "Dressed in traditional attire"
  },
  {
    id: 5,
    title: "Love and Laughter",
    description: "Candid moments of joy"
  },
  {
    id: 6,
    title: "The Journey Begins",
    description: "Looking forward to a beautiful future"
  }
]

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-[#c9a227] uppercase mb-2">Photo Gallery</p>
          <h2 className="text-3xl md:text-4xl text-[#800020]">
            Moments to Cherish Forever
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(image.id)}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl shadow-md"
            >
              {/* Placeholder image with gradient */}
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(${135 + index * 30}deg, #f5e6d3 0%, #e8d4b8 50%, #d4c4a8 100%)`
                }}
              >
                {/* Decorative couple silhouette */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <svg viewBox="0 0 100 100" className="w-2/3 h-2/3">
                    <g fill="#800020">
                      <circle cx="35" cy="30" r="12" />
                      <path d="M23 42 Q35 55, 47 42 L50 85 L20 85 Z" />
                    </g>
                    <g fill="#c9a227">
                      <circle cx="65" cy="28" r="11" />
                      <path d="M54 39 Q65 50, 76 39 L79 80 L51 80 Z" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#800020]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h4 className="font-semibold mb-1">{image.title}</h4>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-3xl w-full aspect-square rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: `linear-gradient(135deg, #f5e6d3 0%, #e8d4b8 50%, #d4c4a8 100%)`
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-40">
                      <g fill="#800020">
                        <circle cx="35" cy="30" r="12" />
                        <path d="M23 42 Q35 55, 47 42 L50 85 L20 85 Z" />
                      </g>
                      <g fill="#c9a227">
                        <circle cx="65" cy="28" r="11" />
                        <path d="M54 39 Q65 50, 76 39 L79 80 L51 80 Z" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#800020] hover:bg-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Image info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h4 className="text-white text-xl font-semibold">
                    {galleryImages.find(img => img.id === selectedImage)?.title}
                  </h4>
                  <p className="text-white/80 text-sm">
                    {galleryImages.find(img => img.id === selectedImage)?.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
