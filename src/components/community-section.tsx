const partners = [
  { name: "Arliss Banks", linkedin: "https://www.linkedin.com/in/arlissb/" },
  { name: "Abhinaya Konduru", linkedin: "https://www.linkedin.com/in/itsabhinaya/" },
  { name: "Nitin Murali", linkedin: "https://www.linkedin.com/in/nitin-murali/" },
  { name: "Alex Nova", linkedin: "https://www.linkedin.com/in/aleksstefanova/" },
];

export function CommunitySection() {
  return (
    <section className="bg-slate-900 py-20 px-4" data-animate>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: Community Partners */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-cyan uppercase mb-3">
            Community Partners
          </p>
          <h3 className="text-2xl font-bold text-white mb-2">
            Powered by People
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            The folks who help make Chicago&apos;s tech community feel like home.
          </p>
          <ul className="space-y-3">
            {partners.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-cyan transition-colors"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 text-slate-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm">{partner.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Sponsorship CTA */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-cyan uppercase mb-3">
            Sponsor
          </p>
          <h3 className="text-2xl font-bold text-white mb-2">
            Help Us Grow
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            CHI IRL is free, always. Your sponsorship helps us reach more people
            and keep Chicago&apos;s tech scene connected.
          </p>
          <a
            href="https://forms.gle/CwNuyQjCCS2Q9K7L9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-6 py-3 rounded-full transition-colors"
          >
            Become a Sponsor
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
