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
        className="relative bg-gradient-to-br from-cyan via-sky-600 to-slate-900 pt-24 pb-16 md:pt-28 md:pb-24 px-4 overflow-hidden"
      >
        {/* Dot pattern overlay */}
        <div className="hero-pattern absolute inset-0 pointer-events-none" />

        <div className="relative max-w-2xl mx-auto flex flex-col items-center text-center">
          {/* Icon badge */}
          <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Brand */}
          <p className="text-sm font-semibold tracking-widest text-white/70 uppercase mb-4">
            Chicago In Real Life
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
            Where Chicago&apos;s Tech Scene Meets IRL
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/75 mb-8 md:mb-10 max-w-lg leading-relaxed">
            Every week, we round up the best meetups, talks, and networking events so you never miss what&apos;s happening.
          </p>

          {/* Subscribe Form (hero) */}
          <SubscribeForm formId="form03" variant="hero" />

          <p className="mt-4 text-sm text-white/40">
            Free every Monday. No spam, just events.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-14 md:py-20 px-4 bg-[#FAFAF8]" data-animate>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-cyan uppercase text-center mb-3">
            This Week
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            What&apos;s Happening in Chicago
          </h2>
          <p className="text-slate-500 text-center mb-10 max-w-lg mx-auto">
            Browse upcoming events, find your people, and RSVP. Updated weekly.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <EventCalendar />
          </div>
        </div>
      </section>

      {/* Submit Event CTA */}
      <section id="submit" className="py-12 md:py-16 px-4 bg-sky-50" data-animate>
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan/10 rounded-xl mb-5">
            <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Hosting Something?
          </h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            Got a meetup, workshop, or happy hour? Add it to the calendar and get it in front of the community.
          </p>
          <a
            href="https://forms.gle/Rq9SdNE9ZtizoDho8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan hover:bg-sky-600 text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors"
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
