import { SubscribeForm } from "./subscribe-form";

export function Footer() {
  return (
    <footer className="bg-dark text-white py-16 mt-8">
      <div className="max-w-[900px] mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          The pulse of Chicago Tech & Startup events, delivered weekly
        </h2>

        <SubscribeForm formId="form01" />

        <h2 className="text-2xl md:text-3xl font-bold text-center mt-10 mb-16">
          Text (312) 847-2515
        </h2>

        <div className="w-full text-left text-sm text-white/70">
          <p>
            @ 2025 Created by{" "}
            <a
              href="https://www.linkedin.com/in/arlissb/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Arliss Banks
            </a>
          </p>
          <p>
            @Maintained by{" "}
            <a
              href="https://www.linkedin.com/in/hugoseguin/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Hugo Seguin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
