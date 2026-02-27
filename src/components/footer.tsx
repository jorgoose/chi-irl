import { SubscribeForm } from "./subscribe-form";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-cyan rounded-md flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">CHI IRL</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              The pulse of Chicago&apos;s tech community, delivered to your inbox every Monday.
            </p>
          </div>

          {/* Quick Links column */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#events" className="text-sm text-slate-400 hover:text-cyan transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#submit" className="text-sm text-slate-400 hover:text-cyan transition-colors">
                  Submit Event
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/CwNuyQjCCS2Q9K7L9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-cyan transition-colors"
                >
                  Sponsorship
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected column */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Stay Connected</h4>
            <SubscribeForm formId="form01" variant="footer" />
            <a
              href="tel:3128472515"
              className="inline-block mt-4 text-sm text-slate-400 hover:text-cyan transition-colors"
            >
              Text (312) 847-2515
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} CHI IRL. All rights reserved.</p>
          <p>
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/arlissb/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-300 transition-colors"
            >
              Arliss Banks
            </a>
            {" "}&middot;{" "}
            Maintained by{" "}
            <a
              href="https://www.linkedin.com/in/hugoseguin/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-300 transition-colors"
            >
              Hugo Seguin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
