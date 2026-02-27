import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { SubscribeForm } from "@/components/subscribe-form";
import { EventCalendar } from "@/components/event-calendar";
import { TeamSection } from "@/components/team-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";
import { ScrollAnimator } from "@/components/scroll-animator";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollAnimator />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-cyan via-cyan-dark to-gray-900 pt-28 pb-20 px-4 overflow-hidden"
      >
        {/* Dot pattern overlay */}
        <div className="hero-pattern absolute inset-0 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Logo */}
          <Image
            src="/assets/images/logo.jpg"
            alt="CHI IRL Logo"
            width={120}
            height={120}
            className="rounded-2xl shadow-xl mb-8"
            priority
          />

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Discover Chicago&apos;s Best Tech &amp; Startup Events
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            Your weekly guide to the meetups, talks, and networking events shaping Chicago&apos;s tech scene.
          </p>

          {/* Subscribe Form (hero) */}
          <SubscribeForm formId="form03" variant="hero" />

          <p className="mt-4 text-sm text-white/50">
            Free weekly newsletter every Monday. No spam.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-warm-white" data-animate>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-cyan uppercase text-center mb-3">
            Events
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            What&apos;s Happening in Chicago
          </h2>
          <EventCalendar />
        </div>
      </section>

      {/* Submit Event CTA */}
      <section id="submit" className="py-16 px-4 bg-cyan-light" data-animate>
        <div className="max-w-3xl mx-auto text-center">
          {/* Calendar icon */}
          <div className="text-4xl mb-4">&#128197;</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Don&apos;t See Your Event?
          </h2>
          <p className="text-gray-900/70 mb-6 max-w-md mx-auto">
            Got an upcoming meetup, talk, or networking event? Submit it and reach Chicago&apos;s tech community.
          </p>
          <a
            href="https://forms.gle/Rq9SdNE9ZtizoDho8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan hover:bg-cyan-dark text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors"
          >
            Submit Your Event
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Community Section (partners + sponsorship) */}
      <CommunitySection />

      {/* Footer */}
      <Footer />
    </>
  );
}
