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
  //   {
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

      {/* 
      
      Container DIV for entire timeline
      - Container DIV for experience OR education entry
      - - If experience: will be on the left side
      - - - Experience DIV container
      - - - - Header DIV for Job Title
      - - - - Details section
      - - - - Company Logo Div Container Left of Details, but under header
      - - - - - Logo
      - - - - - Company Name
      - - If education: will be on the righ side
      - - - Same as Experience DIV but everything is on the right side
        
      */}

      <div className="bg-stone-300">
        <div className="bg-stone-400 ">
          <div className="min-h-96 w-1/2 bg-stone-500">
            <div className="min-h-16 bg-stone-600">
              <h1 className="flex w-3/4 justify-end bg-stone-700">Job Title</h1>
            </div>
            <div className="flex min-h-80 bg-stone-700">
              <div className="w-1/4">Logo</div>
              <div className="w-3/4 bg-stone-800">Details</div>
            </div>
          </div>
        </div>
        <div className="flex  justify-end bg-stone-400">
          <div className="min-h-96 w-1/2 bg-stone-500">
            <div className="min-h-16 bg-stone-600">
              <h1 className="w-3/4 justify-end bg-stone-700">Job Title</h1>
            </div>
            <div className="min-h-16 bg-stone-600">
              <div className="flex min-h-80 bg-stone-700">
                <div className="w-3/4 bg-stone-800">Details</div>
                <div className="w-1/4">Logo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex gap-5 overflow-x-scroll whitespace-nowrap p-5">
        {myResume.map((resume) => (
          <div className="flex flex-col">
            {resume.company ? (
              <div>
                {resume.company} <br /> {resume.title}
              </div>
            ) : (
              <div>
                <br />
                <br />
              </div>
            )}
            <div className="bg-stone-500">
              {resume.endDate} - {resume.startDate}
            </div>
            {resume.institution ? (
              <div>
                {resume.institution} <br /> {resume.program}
              </div>
            ) : (
              <div>
                <br />
                <br />
              </div>
            )}
          </div>
        ))}
      </div> */}

      {/* <>
        {myResume.map((resume) =>
          resume.type === "education" ? (
            <div key={resume.id} className="flex justify-end">
              <div className="md:w-1/2 md:p-10">
                <div>
                  {convertDateFormat(resume.startDate)} -{" "}
                  {convertDateFormat(resume.endDate)}
                </div>
                <div>{resume.institution}</div>
                <div>{resume.program}</div>
                <div>{resume.location}</div>
                <ul className="space-y-5 p-5">
                  <li>{resume.details}</li>
                </ul>
              </div>
            </div>
          ) : (
            <div key={resume.id} className="md:w-1/2 md:p-10">
              <div>
                {convertDateFormat(resume.startDate)} -{" "}
                {convertDateFormat(resume.endDate)}
              </div>
              <div>{resume.company}</div>
              <div>{resume.title}</div>
              <div>{resume.location}</div>
              <ul className="space-y-5 p-5">
                <li>{resume.details}</li>
              </ul>
            </div>
          ),
        )}
      </> */}
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
