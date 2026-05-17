'use client';

import { motion } from 'framer-motion';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  dressCode: string;
  icon: React.ReactNode;
}

const events: Event[] = [
  {
    id: 'wedding',
    title: 'Main Wedding',
    date: 'Friday, June 26, 2026',
    time: '8:49 PM',
    description: 'Join us as Swamy and Satya begin their married life.',
    location: 'Achutha Krishna function hall, Gandhinagar, Gollaprolu',
    dressCode: 'Traditional elegance in cream, gold, or crimson',
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="currentColor">
        <path
          d="M20 5 C10 15, 5 25, 5 32 C5 35, 8 38, 20 38 C32 38, 35 35, 35 32 C35 25, 30 15, 20 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="22" r="6" />
        <path
          d="M14 22 Q20 12, 26 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: 'bride-haldi',
    title: 'Haldi Ceremony',
    date: 'June 27, 2026',
    time: '5:00 PM - 9:00 PM',
    description: 'A joyful morning ceremony filled with turmeric blessings.',
    location: 'At home',
    dressCode: 'Yellow or ivory traditional wear',
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="currentColor">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="20" r="8" />
        <path d="M20 2 L20 10" stroke="currentColor" strokeWidth="2" />
        <path d="M20 30 L20 38" stroke="currentColor" strokeWidth="2" />
        <path d="M2 20 L10 20" stroke="currentColor" strokeWidth="2" />
        <path d="M30 20 L38 20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'groom-haldi',
    title: 'Reception',
    date: 'June 28, 2026',
    time: '12:30 PM',
    description:
      'A celebration of love, joy, and delight.',
    location: 'Kotthem vari funtion hall, Gollaprolu',
    dressCode: 'Indian tradition',
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="currentColor">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="20" r="8" />
        <path d="M20 2 L20 10" stroke="currentColor" strokeWidth="2" />
        <path d="M20 30 L20 38" stroke="currentColor" strokeWidth="2" />
        <path d="M2 20 L10 20" stroke="currentColor" strokeWidth="2" />
        <path d="M30 20 L38 20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export function EventsTimeline() {
  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-[#c9a227] uppercase mb-2">
            Wedding Events
          </p>
          <h2 className="text-3xl md:text-4xl text-[#800020]">
            A celebration across cherished moments
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="w-12 h-12 text-[#c9a227] mb-4">{event.icon}</div>

              {/* Date & Time */}
              <div className="mb-4">
                <p className="text-sm text-[#800020] font-semibold uppercase tracking-wide">
                  {event.date}
                </p>
                <p className="text-sm text-muted-foreground">{event.time}</p>
              </div>

              {/* Title */}
              <h3 className="text-xl text-[#800020] font-semibold mb-3">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {event.description}
              </p>

              {/* Location */}
              <p className="text-sm text-muted-foreground mb-3">
                <span className="font-medium">Location:</span> {event.location}
              </p>

              {/* Dress Code */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium">Dress code:</span>{' '}
                  {event.dressCode}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
