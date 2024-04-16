import SectionHeader from "./template/SectionHeader";
import ActionButton from "./template/ActionButton";

export default function ResumeSection() {
  const data = {
    sectionHeader: {
      title: "My Chronological Resume",
    },
    myResume: [
      {
        id: 9,
        type: "experience",
        startDate: "10.2023",
        endDate: "Present",
        company: "Freelance",
        jobTitle: "Full Stack Web Developer",
        location: "San Francisco Bay Area, CA",
        details:
          "Specializing in React, Typescript, and Tailwind CSS for front-end development and Node.js, Express, GraphQL, MySQL, and MongoDB for back-end development. Continuously honing my skills and knowledge in other frameworks/libraries like Next.js, Astro, and Framer Motion.",
      },
      {
        id: 8,
        type: "education",
        startDate: "04.2023",
        endDate: "10.2023",
        institution: "UC Berkeley Extension",
        program: "Full Stack Web Development Course",
        location: "Online",
        details:
          "Intensive, 6-month, full-stack web development boot camp led by a senior full stack developer with 20+ years of experience. Project-driven curriculum, with 19 weekly challenges and 3 collaborative projects to build out our portfolio. Developed skills and experience with everything from the fundamentals of HTML, CSS, and JavaScript, to React, Node.js, MySQL, MongoDB, and GraphQL in order to make full stack MERN applications.",
      },
      {
        id: 7,
        type: "education",
        startDate: "12.2022",
        endDate: "12.2022",
        institution: "E and M Training Course",
        program: "Siemens TIA Portal Software Development",
        location: "Fremont, CA",
        details:
          "Two week, instructor-led, hands-on course using TIA Portal software to integrate PLC, HMI, and Variable Frequency Drive (VFD) controls. Learned how to program in Ladder Logic, Function Block Diagrams, Sequential Function Charts, and Structured Text.",
      },
      {
        id: 6,
        type: "experience",
        startDate: "09.2020",
        endDate: "01.2024",
        company: "Tesla Motors Inc.",
        jobTitle: "Automation Controls Technician",
        location: "Fremont, CA",
        details:
          "The go-to technician for any task that needed technical expertise with electronics, PLC programming, automation, robotic systems, and any engineering department projects.",
      },
      {
        id: 5,
        type: "experience",
        startDate: "10.2019",
        endDate: "09.2020",
        company: "Tesla Motors Inc.",
        jobTitle: "Equipment Maintenance Technician",
        location: "Fremont, CA",
        details:
          "Adapted quickly to dozens of unfamiliar mechanical, electronic, and robotic systems, diagnosing and correcting numerous faults. Collaborated with engineering for successful equipment commissioning and problem analysis.",
      },
      {
        id: 4,
        type: "experience",
        startDate: "12.2010",
        endDate: "10.2018",
        company: "United States Navy",
        jobTitle: "Electronics Technician",
        location: "Japan & San Diego, CA",
        details:
          "Led two of the largest shipboard work centers, consistently excelling in inspections (90%+ scores). Resolved 25+ radar system casualties and boosted electronic test equipment readiness by 15%. Trained 47 personnel with dedication.",
      },
      {
        id: 3,
        type: "education",
        startDate: "12.2010",
        endDate: "04.2016",
        institution: "US Navy Training Schools",
        program: "Electronics Technology Courses",
        location: "Various Locations, USA",
        details:
          "Mastered seamanship fundamentals, electrical theory, and radio/radar electronics. Excelled in six equipment schools, specializing in air traffic control radar systems, and became the lead technician on both assigned ships.",
      },
      {
        id: 2,
        type: "experience",
        startDate: "05.2005",
        endDate: "12.2010",
        company: "Freelance",
        jobTitle: "Front-End Web Developer",
        location: "Atlanta Metro Area, GA",
        details:
          "Built and maintained multiple websites for small businesses and schools, leveraging web design and development skills in Dreamweaver, Photoshop, HTML, and CSS.  Created promotional content to drive user engagement.",
      },
      {
        id: 1,
        type: "education",
        startDate: "08.2001",
        endDate: "05.2005",
        institution: "Norcross High School",
        program: "High School Diploma",
        location: "Norcross, GA",
        details:
          "Spearheaded the creation of the school website, rapidly learning front-end web design and development principles to lead a successful class project.",
      },
    ],
    download: {
      text: "Download",
      href: "https://www.linkedin.com/in/edward-von/",
    },
  };

  const ResumeItem = ({
    id,
    startDate,
    endDate,
    company,
    institution,
    jobTitle,
    program,
    location,
    details,
  }: {
    id: number;
    startDate: string;
    endDate: string;
    company: string | undefined;
    institution: string | undefined;
    jobTitle: string | undefined;
    program: string | undefined;
    location: string;
    details: string;
  }) => {
    return (
      <div
        className={
          id % 2 === 0
            ? "flex flex-col text-stone-300 md:flex-row"
            : "flex flex-col text-stone-300 md:flex-row-reverse"
        }
      >
        <div className="flex justify-center gap-2 border border-white/25 bg-stone-900 p-4 text-center text-sm font-bold md:flex-col">
          <span className="block">{endDate}</span>
          <span className="material-symbols-sharp hidden md:block">
            arrow_drop_down
          </span>
          <span className="material-symbols-sharp md:hidden">arrow_right</span>
          <span className="block">{startDate}</span>
        </div>
        <div className="flex flex-col gap-4 border border-white/15 bg-stone-950 p-8 md:flex-row">
          <div className="md:w-5/12 md:self-center">
            <h3 className="text-pretty text-2xl font-bold">
              {jobTitle || program}
            </h3>
            <h4 className="uppercase text-stone-500">
              {company || institution}
            </h4>
            <h5 className="text-stone-500">{location}</h5>
          </div>
          <p className="text-pretty text-sm leading-relaxed text-stone-400 md:w-7/12">
            {details}
          </p>
        </div>
      </div>
    );
  };

  const ResumeList = () => {
    const { myResume } = data;

    return (
      <div className="mx-auto flex flex-col gap-16 px-4 py-64 md:px-8">
        {myResume.map(
          ({
            id,
            startDate,
            endDate,
            company,
            institution,
            jobTitle,
            program,
            location,
            details,
          }) => (
            <div
              key={id}
              className={id % 2 === 0 ? "md:w-1/2 md:self-end" : "md:w-1/2"}
            >
              <ResumeItem
                id={id}
                startDate={startDate}
                endDate={endDate}
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
    const { text, href } = data.download;

    return (
      <div className="flex items-center justify-center bg-stone-950 pb-64">
        <ActionButton text={text} icon="download" href={href} />
      </div>
    );
  };

  const { title } = data.sectionHeader;

  return (
    <section>
      <SectionHeader title={title} />
      <ResumeList />
      <Download />
    </section>
  );
}
