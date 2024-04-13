import SectionHeader from "./template/SectionHeader";
import ActionButton from "./template/ActionButton";

export default function ResumeSection() {
  const data = {
    sectionHeader: {
      title: "Resume",
      number: "03",
    },
    myResume: [
      {
        id: 9,
        type: "experience",
        startDate: "Oct 2023",
        endDate: "Present",
        company: "Freelance",
        jobTitle: "Full Stack Web Developer",
        details:
          "Specializing in React, Typescript, and Tailwind CSS for front-end development and Node.js, Express, GraphQL, MySQL, and MongoDB for back-end development. Continuously honing my skills and knowledge in other frameworks/libraries like Next.js, Astro, and Framer Motion.",
      },
      {
        id: 8,
        type: "education",
        startDate: "Apr 2023",
        endDate: "Oct 2023",
        institution: "UC Berkeley Extension",
        program: "Full Stack Web Development Course",
        details:
          "Intensive, 6-month, full-stack web development boot camp led by a senior full stack developer with 20+ years of experience. Project-driven curriculum, with 19 weekly challenges and 3 collaborative projects to build out our portfolio. Developed skills and experience with everything from the fundamentals of HTML, CSS, and JavaScript, to React, Node.js, MySQL, MongoDB, and GraphQL in order to make full stack MERN applications.",
      },
      {
        id: 7,
        type: "education",
        startDate: "Dec 2022",
        endDate: "Dec 2022",
        institution: "E and M Training Course",
        program: "Siemens TIA Portal Software Development I/II",
        details:
          "Two week, instructor-led, hands-on course using TIA Portal software to integrate PLC, HMI, and Variable Frequency Drive (VFD) controls. Learned how to program in Ladder Logic, Function Block Diagrams, Sequential Function Charts, and Structured Text.",
      },
      {
        id: 6,
        type: "experience",
        startDate: "Sep 2020",
        endDate: "Jan 2024",
        company: "Tesla Motors Inc.",
        jobTitle: "Automation Controls Technician IV",
        details:
          "The go-to technician for any task that needed technical expertise with electronics, PLC programming, automation, robotic systems, and any engineering department projects.",
      },
      {
        id: 5,
        type: "experience",
        startDate: "Oct 2019",
        endDate: "Sep 2020",
        company: "Tesla Motors Inc.",
        jobTitle: "Equipment Maintenance Technician II",
        details:
          "Adapted quickly to dozens of unfamiliar mechanical, electronic, and robotic systems, diagnosing and correcting numerous faults. Collaborated with engineering for successful equipment commissioning and problem analysis.",
      },
      {
        id: 4,
        type: "experience",
        startDate: "Dec 2010",
        endDate: "Oct 2018",
        company: "United States Navy",
        jobTitle: "Electronics Technician",
        details:
          "Led two of the largest shipboard work centers, consistently excelling in inspections (90%+ scores). Resolved 25+ radar system casualties and boosted electronic test equipment readiness by 15%. Trained 47 personnel with dedication.",
      },
      {
        id: 3,
        type: "education",
        startDate: "Dec 2010",
        endDate: "Apr 2016",
        institution: "US Navy Training Schools",
        program: "Electronics Technology Courses",
        details:
          "Mastered seamanship fundamentals, electrical theory, and radio/radar electronics. Excelled in six equipment schools, specializing in air traffic control radar systems, and became the lead technician on both assigned ships.",
      },
      {
        id: 2,
        type: "experience",
        startDate: "May 2005",
        endDate: "Dec 2010",
        company: "Freelance",
        jobTitle: "Front-End Web Developer",
        details:
          "Built and maintained multiple websites for small businesses and schools, leveraging web design and development skills in Dreamweaver, Photoshop, HTML, and CSS.  Created promotional content to drive user engagement.",
      },
      {
        id: 1,
        type: "education",
        startDate: "Aug 2001",
        endDate: "May 2005",
        institution: "Norcross High School",
        program: "High School Diploma",
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
    details,
  }: {
    startDate: string;
    endDate: string;
    company: string | undefined;
    institution: string | undefined;
    jobTitle: string | undefined;
    program: string | undefined;
    details: string;
  }) => {
    return (
      <>
        <div className="border border-white/15 bg-stone-950 p-8">
          <div className="w-max border border-white/15  px-4 py-2 text-sm font-bold uppercase">
            <span className="text-stone-500">{startDate}</span>{" "}
            <span className="text-orange-600">-&gt;</span>{" "}
            <span className="text-stone-300">{endDate}</span>
          </div>
          <h3 className="text-sm uppercase text-stone-500 md:text-base">
            {company || institution}
          </h3>
          <h4 className="mb-2 text-pretty text-xl font-bold text-stone-300 md:text-2xl">
            {jobTitle || program}
          </h4>
          <p className="text-pretty text-sm text-stone-400 md:text-lg">
            {details}
          </p>
        </div>
      </>
    );
  };

  const ResumeList = () => {
    const { myResume } = data;

    return (
      <div className="container mx-auto py-32 px-4 md:px-0 flex flex-col gap-16">
        {myResume.map(
          ({
            id,
            startDate,
            endDate,
            company,
            institution,
            jobTitle,
            program,
            details,
          }) => (
            <div
              key={id}
              // className={
              //   type === "education"
              //     ? "ml-8 md:w-5/6 md:self-end"
              //     : "mr-8 md:w-5/6"
              // }
            >
              <ResumeItem
                startDate={startDate}
                endDate={endDate}
                company={company}
                institution={institution}
                jobTitle={jobTitle}
                program={program}
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
      <div className="flex min-h-[50vh] items-center justify-center border-t border-white/15 bg-stone-950">
        <ActionButton text={text} icon="download" href={href} />
      </div>
    );
  };

  const { title, number } = data.sectionHeader;

  return (
    <section>
      <SectionHeader title={title} number={number} />
      <ResumeList />
      <Download />
    </section>
  );
}
