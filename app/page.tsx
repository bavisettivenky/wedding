"use client"

import { useState } from "react"
import { EntryScreen } from "@/components/wedding/entry-screen"
import { Navigation } from "@/components/wedding/navigation"
import { HeroSection } from "@/components/wedding/hero-section"
import { CountdownTimer } from "@/components/wedding/countdown-timer"
import { FamilySection } from "@/components/wedding/family-section"
import { EventsTimeline } from "@/components/wedding/events-timeline"
import { CoupleStory } from "@/components/wedding/couple-story"
import { PhotoGallery } from "@/components/wedding/photo-gallery"
import { VenueSection } from "@/components/wedding/venue-section"
import { HospitalitySection } from "@/components/wedding/hospitality-section"
import { RSVPForm } from "@/components/wedding/rsvp-form"
import { Footer } from "@/components/wedding/footer"
import { MusicToggle } from "@/components/wedding/music-toggle"
import { FloatingPetals } from "@/components/wedding/floating-petals"
import { WhatsAppShare } from "@/components/wedding/whatsapp-share"

export default function WeddingInvitation() {
  const [showContent, setShowContent] = useState(false)

  return (
    <main className="relative">
      {/* Entry Screen */}
      {!showContent && <EntryScreen onEnter={() => setShowContent(true)} />}

      {/* Main Content */}
      {showContent && (
        <>
          {/* Floating Elements */}
          {/* <FloatingPetals /> */}
          <MusicToggle />
          {/* <WhatsAppShare /> */}
          <Navigation />

          {/* Page Sections */}
          <HeroSection />
          <CountdownTimer />
          <FamilySection />
          <EventsTimeline />
          <CoupleStory />
          <PhotoGallery />
          <VenueSection />
          <HospitalitySection />
          <Footer />
        </>
      )}
    </main>
  )
}
