import SectionHeader from "./template/SectionHeader";
import ActionButton from "./template/ActionButton";

export default function ResumeSection() {
  const data = {
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
      <div className="rounded-lg border border-white/25 bg-gradient-to-tl from-stone-800 to-stone-950 p-8">
        <div className="flex justify-between items-baseline">
          <h3 className="mb-2 text-pretty text-lg font-bold text-stone-300">
            {jobTitle || program}
          </h3>
          <div className="flex gap-2 text-stone-300">
            <span>{endDate}</span>
            <span className="material-symbols-sharp">arrow_right</span>
            <span>{startDate}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-5/12">
            <h4 className="mb-1 font-bold text-stone-300">
              {company || institution}
            </h4>
            <h5 className="text-sm uppercase text-stone-400">{location}</h5>
          </div>
          <div className="w-7/12">
            <p className="text-pretty text-sm leading-relaxed text-stone-400">
              {details}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const ResumeList = () => {
    const { myResume } = data;

    return (
      <div className="flex flex-col gap-8">
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
              className={
                id % 2 === 0
                  ? "rounded-lg border border-white/10 bg-stone-900 p-2 md:w-7/12 md:self-end"
                  : "rounded-lg border border-white/10 bg-stone-900 p-2 md:w-7/12"
              }
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

    const buttonData = {
      header: "My Full Resume is available for download in .doc and .pdf format.",
      text1: "DOC Format",
      text2: "PDF Format",
      href: "https://www.linkedin.com/in/edward-von/",
    };

    const { header, text1, text2, href } = buttonData;

    return (
      <div className="mx-auto flex flex-col items-center justify-center py-64 md:w-1/2">
        <h4 className="mb-8 text-pretty text-center text-4xl font-bold text-stone-200">
          {header}
        </h4>
        <div className="flex gap-16">
          <ActionButton text={text1} icon="download" href={href} />
          <ActionButton text={text2} icon="download" href={href} />
        </div>
      </div>
    );
  };

  return (
    <section className="container mx-auto border-b border-white/25 bg-gradient-to-t from-stone-800 to-[2%]">
      <SectionHeader title="My Professional and Academic Journey" />
      <ResumeList />
      <Download />
    </section>
  );
}
