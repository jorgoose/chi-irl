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
    isSpecialThanks: true,
  },
];

export function TeamSection() {
  return (
    <section className="flex flex-col items-center px-4 py-12">
      <div className="max-w-[900px] w-full">
        <p className="text-xl text-white text-center mb-10">
          Thank you to our Team:
        </p>

        <div className="flex flex-col gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-1 text-left">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline text-lg hover:opacity-80 transition-opacity"
                >
                  {member.isSpecialThanks
                    ? `Special Thanks to ${member.name}`
                    : `${member.name}: ${member.role}`}
                </a>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={176}
                  height={176}
                  className="rounded-none object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
