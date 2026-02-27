const partners = [
  { name: "Arliss Banks", linkedin: "https://www.linkedin.com/in/arlissb/" },
  {
    name: "Abhinaya Konduru",
    linkedin: "https://www.linkedin.com/in/itsabhinaya/",
  },
  {
    name: "Nitin Murali",
    linkedin: "https://www.linkedin.com/in/nitin-murali/",
  },
  {
    name: "Alex Nova",
    linkedin: "https://www.linkedin.com/in/aleksstefanova/",
  },
];

export function PartnersSection() {
  return (
    <section className="flex flex-col items-center px-4 py-8">
      <div className="max-w-[900px] w-full">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <p className="text-xl text-white">Our Partners</p>
          </div>
          <div className="flex-1">
            <ul className="list-none p-0 m-0 space-y-1">
              {partners.map((partner) => (
                <li key={partner.name}>
                  <a
                    href={partner.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline text-sm hover:opacity-80 transition-opacity"
                  >
                    {partner.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
