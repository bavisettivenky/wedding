"use client"

import { motion } from "framer-motion"

export function VenueSection() {
  const venueAddress = "Achutha Krishna function hall, Gandhinagar, Gollaprolu, East Godavari, Andhra Pradesh"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8!2d82.2823482!3d17.1549092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39d4b829408ff7:0xc7b3c40bbe8666a7!2sACHUTHA+KRISHNA+FUNCTION+HALL!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin`

  return (
    <section id="venue" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] text-[#c9a227] uppercase mb-2">Venue & Location</p>
          <h2 className="text-3xl md:text-4xl text-[#800020]">
            Join us at Gollaprolu
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-muted/50 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Map placeholder */}
            <div className="relative aspect-video bg-muted">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Wedding Venue Location"
              />
              {/* Fallback if iframe doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/80 pointer-events-none opacity-0 group-hover:opacity-100">
                <div
                  className="w-full h-full"
                  style={{
                    background: `linear-gradient(135deg, #e8d4b8 0%, #d4c4a8 100%)`
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-[#800020] opacity-30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue details */}
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-sm tracking-[0.2em] text-[#c9a227] uppercase mb-2">Venue</p>
                  <h3 className="text-xl text-[#800020] font-semibold mb-2">Achutha Krishna function hall</h3>
                  <p className="text-muted-foreground">
                    Gandhinagar, Gollaprolu,<br />
                    East Godavari, Andhra Pradesh
                  </p>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-primary-foreground font-medium tracking-wide transition-all shadow-lg hover:shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #800020 0%, #a02040 100%)"
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Get Directions
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
