import Image from "next/image";

const teamMembers = [
  {
    name: "Hugo Seguin",
    role: "Project Lead / Developer",
    image: "/assets/images/team-hugo.jpg",
    linkedin: "https://www.linkedin.com/in/hugoseguin/",
  },
  {
    name: "Arliss Banks",
    role: "Head of Platform",
    image: "/assets/images/team-arliss.jpg",
    linkedin: "https://www.linkedin.com/in/arlissb/",
  },
  {
    name: "Catherine Witt",
    role: "Community Liaison",
    image: "/assets/images/team-catherine.jpg",
    linkedin: "https://www.linkedin.com/in/catherinewitt/",
  },
  {
    name: "Michael (Bo) Driscoll",
    role: "Special Thanks",
    image: "/assets/images/team-bo.jpg",
    linkedin: "https://www.linkedin.com/in/michaelfdriscoll/",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 bg-[#FAFAF8]" data-animate>
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-cyan uppercase text-center mb-3">
          The Humans Behind It
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Built by Chicago, for Chicago
        </h2>
        <p className="text-slate-500 text-center mb-12 max-w-lg mx-auto">
          We&apos;re a small crew of community lovers who think the best connections happen face to face.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-animate>
          {teamMembers.map((member) => (
            <a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100 hover:shadow-md hover:border-cyan/30 transition-all duration-300"
              data-stagger
            >
              <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden ring-3 ring-slate-100 group-hover:ring-cyan/40 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-sm text-slate-400 mb-3">{member.role}</p>
              {/* LinkedIn icon */}
              <svg
                className="mx-auto w-4 h-4 text-slate-300 group-hover:text-cyan transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
