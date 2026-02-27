import Image from "next/image";
import { SubscribeForm } from "@/components/subscribe-form";
import { TeamSection } from "@/components/team-section";
import { PartnersSection } from "@/components/partners-section";
import { EventCalendar } from "@/components/event-calendar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center px-4 pt-8 pb-12">
        <div className="max-w-[900px] w-full flex flex-col items-center">
          {/* Logo */}
          <Image
            src="/assets/images/logo.jpg"
            alt="Chicago IRL Logo"
            width={176}
            height={176}
            className="mb-8"
            priority
          />

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            The Top Tech & Startup Events in Chicago
          </h1>

          {/* Subtitle */}
          <p className="text-xl font-bold text-white text-center mb-2">
            Chicago In Real Life (CHI IRL)
          </p>
          <p className="text-base text-white text-center mb-2">
            Subscribe to CHI IRL to receive Weekly Events every Monday
          </p>
          <p className="text-base text-white text-center mb-6">
            Text (312) 847-2515 and subscribe below
          </p>

          {/* Subscribe Form (Hero) */}
          <SubscribeForm formId="form03" />
        </div>
      </section>

      {/* Events Section */}
      <section className="flex flex-col items-center px-4 pb-12">
        <div className="max-w-[900px] w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Events
          </h1>

          {/* Elfsight Event Calendar */}
          <EventCalendar />
        </div>
      </section>

      {/* Submit Event CTA */}
      <section className="flex flex-col items-center px-4 py-16">
        <div className="max-w-[900px] w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
            Don&apos;t see your event?
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Have an upcoming Event?
          </h2>
          <a
            href="https://forms.gle/Rq9SdNE9ZtizoDho8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-red-hover transition-colors"
          >
            Submit Your Event Here
          </a>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Sponsorship CTA */}
      <section className="flex flex-col items-center px-4 py-8">
        <div className="max-w-[900px] w-full text-center">
          <p className="text-lg text-white mb-2">
            CHI IRL will always be free for the community.
          </p>
          <p className="text-lg text-white mb-6">
            Help us grow sponsoring this page
          </p>
          <a
            href="https://forms.gle/CwNuyQjCCS2Q9K7L9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-red-hover transition-colors"
          >
            Interested in Sponsoring?
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
