'use client';

import { motion } from 'framer-motion';
import { CountdownTimer } from './countdown-timer';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative shadow-[0px_20px_45px_rgba(91,33,33,0.08)] bg-[linear-gradient(rgba(253,246,236,0.98),rgba(255,250,244,0.94))] border border-[rgba(139,26,26,0.14)] rounded-[28px] overflow-hidden p-4 mb-2">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="heroPattern"
              x="0"
              y="0"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="12.5"
                cy="12.5"
                r="10"
                fill="none"
                stroke="#800020"
                strokeWidth="0.2"
              />
              <circle
                cx="12.5"
                cy="12.5"
                r="5"
                fill="none"
                stroke="#c9a227"
                strokeWidth="0.15"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#heroPattern)" />
        </svg>
      </div> */}

      <Image src="/bg.jpeg" alt="background" fill className="object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,247,240,0.85)_0%,rgba(245,240,230,0.85)_50%,rgba(250,247,240,0.85)_100%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Decorative icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <img
                className="w-16 h-16 text-[#c9a227]"
                alt="Ganesh"
                src="bg-ganesh-Doltar5t.png"
              ></img>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm tracking-[0.3em] text-[#800020] uppercase mb-4"
            >
              Chandina's
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm tracking-[0.3em] text-[#800020] uppercase mb-4"
            >
              Wedding Invitation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-6xl md:text-8xl text-[#800020] mb-2"
              style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
            >
              Swamy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-2xl text-[#c9a227] tracking-[0.2em] my-4"
            >
              weds
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-6xl md:text-8xl text-[#800020]"
              style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
            >
              Satya
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 space-y-2 text-muted-foreground"
            >
              <p className="text-lg tracking-wide">
                Friday, June 26, 2026 • 8:49 PM
              </p>
              <p className="text-base">
                Achutha Krishna function hall, Gandhinagar, Gollaprolu
              </p>
            </motion.div>

            <CountdownTimer />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#venue"
                className="px-8 py-3 rounded-full text-primary-foreground font-medium tracking-wide transition-all shadow-lg hover:shadow-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #800020 0%, #a02040 100%)',
                }}
              >
                View Venue
              </a>
              <a
                href="#story"
                className="px-8 py-3 rounded-full border-2 border-[#c9a227] text-[#800020] font-medium tracking-wide transition-all hover:bg-[#c9a227]/10"
              >
                Our Story
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Decorative card with couple illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              {/* Decorative frame corners */}
              {/* <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#800020]" /> */}
              {/* <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#800020]" /> */}
              {/* <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#800020]" /> */}
              {/* <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#800020]" /> */}

              {/* <div className="absolute inset-0 flex flex-col items-center justify-center p-8"> */}
              <div className="photo-card">
                <video
                  className="hero-photo"
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Ramana and Annapurna wedding video"
                >
                  <source src="video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
