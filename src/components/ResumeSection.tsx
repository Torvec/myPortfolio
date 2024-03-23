export default function ResumeSection() {
  // const myResume = [
  //   {
  //     id: 9,
  //     type: "experience",
  //     startDate: "Oct 2023",
  //     endDate: "Present",
  //     company: "Freelance",
  //     title: "Full Stack Web Developer",
  //     location: "Fremont, CA, USA",
  //     details: "",
  //   },
  //   {
  //     id: 8,
  //     type: "education",
  //     startDate: "Apr 2023",
  //     endDate: "Oct 2023",
  //     institution: "UC Berkeley Extension",
  //     program: "Full Stack Web Development Course",
  //     location: "Online",
  //     details: "",
  //   },
  //   {npm
  //     id: 7,
  //     type: "education",
  //     startDate: "Dec 2022",
  //     endDate: "Dec 2022",
  //     institution: "E and M Training Course",
  //     program: "Siemens TIA Portal Software Development I/II",
  //     location: "Fremont, CA, USA",
  //     details: "",
  //   },
  //   {
  //     id: 6,
  //     type: "experience",
  //     startDate: "Sep 2020",
  //     endDate: "Jan 2024",
  //     company: "Tesla Motors Inc.",
  //     title: "Automation Controls Technician IV",
  //     location: "Fremont, CA, USA",
  //     details: "",
  //   },
  //   {
  //     id: 5,
  //     type: "experience",
  //     startDate: "Oct 2019",
  //     endDate: "Sep 2020",
  //     company: "Tesla Motors Inc.",
  //     title: "Equipment Maintenance Technician II",
  //     location: "Fremont, CA, USA",
  //     details: "",
  //   },
  //   {
  //     id: 4,
  //     type: "experience",
  //     startDate: "Dec 2010",
  //     endDate: "Oct 2018",
  //     company: "United States Navy",
  //     title: "Electronics Technician",
  //     location: "Japan and San Diego, CA, USA",
  //     details: "",
  //   },
  //   {
  //     id: 3,
  //     type: "education",
  //     startDate: "Dec 2010",
  //     endDate: "Apr 2016",
  //     institution: "US Navy Training Schools",
  //     program: "Certificates, Electronics Technology",
  //     location: "Various Locations Nationwide",
  //     details: "",
  //   },
  //   {
  //     id: 2,
  //     type: "experience",
  //     startDate: "May 2005",
  //     endDate: "Dec 2010",
  //     company: "Freelance",
  //     title: "Front-End Web Developer",
  //     location: "Atlanta, GA, USA",
  //     details: "",
  //   },
  //   {
  //     id: 1,
  //     type: "education",
  //     startDate: "Aug 2001",
  //     endDate: "May 2005",
  //     institution: "Norcross High School",
  //     program: "High School Diploma",
  //     location: "Norcross, GA, USA",
  //     details: "",
  //   },
  // ];

  const mySkills = [
    "skill 1",
    "skill 2",
    "skill 3",
    "skill 4",
    "skill 5",
    "skill 6",
    "skill 7",
    "skill 8",
    "skill 9",
    "skill 10",
  ];

  interface LinkButtonProps {
    text: string;
    href: string;
  }

  function LinkButton({ text, href }: LinkButtonProps) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-lg border border-stone-200 p-2 transition-all duration-300 ease-in-out hover:border-orange-600 hover:text-orange-600"
      >
        <span className="text-lg uppercase">{text}</span>
        <span className="material-symbols-outlined text-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
          download
        </span>
      </a>
    );
  }

  return (
    <section id="resume" className="min-h-screen space-y-10 p-10">
      <div className="flex min-h-screen flex-col items-center justify-center gap-10">
        <h2 className="text-center text-5xl font-bold uppercase">My Resume</h2>
        <div>
          <LinkButton
            text="Download PDF"
            href="https://www.linkedin.com/in/edward-von/"
          />
        </div>
      </div>

      <div className="relative space-y-5">
        <div className="absolute left-1/2 top-0 z-0 md:z-20 h-full w-2 -translate-x-1/2 transform bg-orange-500"></div>
        <div>
          <div className="relative z-10 md:w-1/2">
            <div className="mb-4">
              <h2 className="text-balance bg-stone-600 p-4 font-bold uppercase">
                Full Stack Web Developer
              </h2>
            </div>
            <div className="flex">
              <div className="flex w-1/4 flex-col items-center gap-5">
                <img
                  src="https://picsum.photos/200"
                  alt="Logo"
                  className="w-full object-contain"
                />
                <h3 className="text-sm font-bold">Freelance</h3>
              </div>
              <div className="w-3/4 space-y-4 text-balance px-4 text-lg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Culpa dolorem quisquam dolorum sunt et beatae,</p>
                <p>
                  perferendis laboriosam maiores consequuntur aut alias non
                  nihil
                </p>
                <p>molestias omnis inventore reiciendis sed velit illo.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex md:justify-end">
          <div className="relative z-10 md:w-1/2">
            <div className="mb-4">
              <h2 className="text-balance bg-stone-600 p-4 font-bold uppercase">
                Full Stack Web Development Bootcamp
              </h2>
            </div>
            <div className="flex flex-row-reverse">
              <div className="flex w-1/4 flex-col items-center gap-5">
                <img
                  src="https://picsum.photos/200"
                  alt="Logo"
                  className="w-full object-contain"
                />
                <h3 className="text-sm font-bold">UC Berkeley Extension</h3>
              </div>
              <div className="w-3/4 space-y-4 text-balance px-4 text-lg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Culpa dolorem quisquam dolorum sunt et beatae,</p>
                <p>
                  perferendis laboriosam maiores consequuntur aut alias non
                  nihil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center gap-10">
        <h3 className="text-4xl font-bold uppercase">Skills</h3>
        <ul className="flex gap-5">
          {mySkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
