import SectionHeader from "./template/SectionHeader";
import ActionButton from "./template/ActionButton";

export default function ResumeSection() {
  const experience = [
    {
      id: 5,
      type: "experience",
      startDate: "10.2023",
      endDate: "Present",
      company: "Freelance",
      logo: "ev_old_logo.png",
      jobTitle: "Full Stack Web Developer",
      location: "San Francisco Bay Area, CA",
      details:
        "Specializing in React, Typescript, and Tailwind CSS for front-end development and Node.js, Express, GraphQL, MySQL, and MongoDB for back-end development. Continuously honing my skills and knowledge in other frameworks/libraries like Next.js, Astro, and Framer Motion.",
    },
    {
      id: 4,
      type: "experience",
      startDate: "09.2020",
      endDate: "01.2024",
      logo: "tesla_logo.svg",
      company: "Tesla Motors Inc.",
      jobTitle: "Automation Controls Technician",
      location: "Fremont, CA",
      details:
        "The go-to technician for any task that needed technical expertise with electronics, PLC programming, automation, robotic systems, and any engineering department projects.",
    },
    {
      id: 3,
      type: "experience",
      startDate: "10.2019",
      endDate: "09.2020",
      logo: "tesla_logo.svg",
      company: "Tesla Motors Inc.",
      jobTitle: "Equipment Maintenance Technician",
      location: "Fremont, CA",
      details:
        "Adapted quickly to dozens of unfamiliar mechanical, electronic, and robotic systems, diagnosing and correcting numerous faults. Collaborated with engineering for successful equipment commissioning and problem analysis.",
    },
    {
      id: 2,
      type: "experience",
      startDate: "12.2010",
      endDate: "10.2018",
      logo: "usn_logo.svg",
      company: "United States Navy",
      jobTitle: "Electronics Technician",
      location: "Japan & San Diego, CA",
      details:
        "Led two of the largest shipboard work centers, consistently excelling in inspections (90%+ scores). Resolved 25+ radar system casualties and boosted electronic test equipment readiness by 15%. Trained 47 personnel with dedication.",
    },
    {
      id: 1,
      type: "experience",
      startDate: "05.2005",
      endDate: "12.2010",
      logo: "ev_old_logo.png",
      company: "Freelance",
      jobTitle: "Front-End Web Developer",
      location: "Atlanta Metro Area, GA",
      details:
        "Built and maintained multiple websites for small businesses and schools, leveraging web design and development skills in Dreamweaver, Photoshop, HTML, and CSS.  Created promotional content to drive user engagement.",
    },
  ];

  const education = [
    {
      id: 4,
      type: "education",
      startDate: "04.2023",
      endDate: "10.2023",
      logo: "ucb_logo.svg",
      institution: "UC Berkeley Extension",
      program: "Full Stack Web Development Course",
      location: "Online",
      details:
        "Intensive, 6-month, full-stack web development boot camp led by a senior full stack developer with 20+ years of experience. Project-driven curriculum, with 19 weekly challenges and 3 collaborative projects to build out our portfolio. Developed skills and experience with everything from the fundamentals of HTML, CSS, and JavaScript, to React, Node.js, MySQL, MongoDB, and GraphQL in order to make full stack MERN applications.",
    },
    {
      id: 3,
      type: "education",
      startDate: "12.2022",
      endDate: "12.2022",
      logo: "eandm_logo.png",
      institution: "E and M Training Course",
      program: "Siemens TIA Portal Software Development Course",
      location: "Fremont, CA",
      details:
        "Two week, instructor-led, hands-on course using TIA Portal software to integrate PLC, HMI, and Variable Frequency Drive (VFD) controls. Learned how to program in Ladder Logic, Function Block Diagrams, Sequential Function Charts, and Structured Text.",
    },
    {
      id: 2,
      type: "education",
      startDate: "12.2010",
      endDate: "04.2016",
      logo: "usn_logo.svg",
      institution: "US Navy Training Schools",
      program: "Electronics Technology Schools",
      location: "Various Locations, USA",
      details:
        "Mastered seamanship fundamentals, electrical theory, and radio/radar electronics. Excelled in six equipment schools, specializing in air traffic control radar systems, and became the lead technician on both assigned ships.",
    },
    {
      id: 1,
      type: "education",
      startDate: "08.2001",
      endDate: "05.2005",
      logo: "nhs_logo.png",
      institution: "Norcross High School",
      program: "High School Diploma",
      location: "Norcross, GA",
      details:
        "Spearheaded the creation of the school website, rapidly learning front-end web design and development principles to lead a successful class project.",
    },
  ];

  const ResumeItem = ({
    startDate,
    endDate,
    logo,
    company,
    institution,
    jobTitle,
    program,
    location,
    details,
  }: {
    startDate: string;
    endDate: string;
    logo: string;
    company: string | undefined;
    institution: string | undefined;
    jobTitle: string | undefined;
    program: string | undefined;
    location: string;
    details: string;
  }) => {
    return (
      <div className="flex h-full gap-4 rounded-lg border border-white/10 bg-gradient-to-tl from-stone-800 to-stone-950 p-4">
        <div className="flex-shrink-0 pt-1">
          <img src={logo} alt={jobTitle || program} className="h-max w-auto" />
        </div>
        <div>
          <div>
            <div className="flex gap-2 text-sm font-medium uppercase text-stone-400">
              <span>{endDate}</span>
              <span className="material-symbols-sharp">arrow_right</span>
              <span>{startDate}</span>
            </div>
            <h3 className="text-balance text-lg font-extrabold text-stone-300">
              {jobTitle || program}
            </h3>
            <div className="mb-4 flex flex-col justify-between space-y-2 text-sm uppercase text-stone-400 lg:flex-row">
              <h4 className="font-light">{company || institution}</h4>
              <h5>{location}</h5>
            </div>
            <p className="text-balance font-light leading-relaxed text-stone-400">
              {details}
            </p>
          </div>
        </div>
      </div>
    );
  };

  type ResumeItem = {
    id: number;
    type: string;
    startDate: string;
    endDate: string;
    logo: string;
    company?: string;
    institution?: string;
    jobTitle?: string;
    program?: string;
    location: string;
    details: string;
  };

  const ResumeList = ({ list }: { list: ResumeItem[] }) => {
    return (
      <div className="space-y-8 md:w-1/2">
        {list.map(
          ({
            id,
            type,
            startDate,
            endDate,
            logo,
            company,
            institution,
            jobTitle,
            program,
            location,
            details,
          }: ResumeItem) => (
            <div
              key={id}
              className={`rounded-lg border border-white/10 bg-stone-900/75 p-2 ${type === "education" ? "md:translate-y-16" : ""}`}
            >
              <ResumeItem
                startDate={startDate}
                endDate={endDate}
                logo={logo}
                company={company}
                institution={institution}
                jobTitle={jobTitle}
                program={program}
                location={location}
                details={details}
              />
            </div>
          ),
        )}
      </div>
    );
  };

  const Download = () => {
    const buttonData = {
      header: "Download my full resume in .doc or .pdf format",
      text1: "DOC Format",
      text2: "PDF Format",
      href: "https://www.linkedin.com/in/edward-von/",
    };

    const { header, text1, text2, href } = buttonData;

    return (
      <div className="mx-auto flex flex-col items-center justify-center border-y border-white/25 bg-gradient-to-t from-stone-900 to-10% px-4 py-64 md:px-0">
        <h4 className="mb-8 max-w-[30ch] text-balance text-center text-4xl font-medium text-stone-300">
          {header}
        </h4>
        <div className="flex gap-8 md:gap-16">
          <ActionButton text={text1} icon="download" href={href} />
          <ActionButton text={text2} icon="download" href={href} />
        </div>
      </div>
    );
  };

  return (
    <section id="resume">
      <SectionHeader title="My Professional and Academic Journey" />
      <div className="container mx-auto pb-64 flex flex-col gap-16 px-4 md:flex-row md:px-0">
        <ResumeList list={experience} />
        <ResumeList list={education} />
      </div>
      <Download />
    </section>
  );
}
