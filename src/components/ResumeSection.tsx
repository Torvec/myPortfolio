import { motion, MotionStyle } from "framer-motion";

type ResumeSectionProps = {
  style: MotionStyle;
};

export default function ResumeSection({ style }: ResumeSectionProps) {
  const myResume = [
    {
      id: 9,
      type: "experience",
      startDate: "Oct 2023",
      endDate: "Present",
      company: "Freelance",
      jobTitle: "Full Stack Web Developer",
      location: "Fremont, CA, USA",
      details: [
        "Continuously and enthusiastically learning new technologies and languages.",
        "Adding to my portfolio by creating new personal projects and collaborating with my fellow UC Berkeley Extension alumni.",
      ],
    },
    {
      id: 8,
      type: "education",
      startDate: "Apr 2023",
      endDate: "Oct 2023",
      institution: "UC Berkeley Extension",
      program: "Full Stack Web Development Course",
      location: "Online",
      details: [
        "Intensive, 6-month, full-stack web development bootcamp led by a senior full stack developer with 20+ years of experience",
        "Project-driven curriculum, with weekly challenges and 3 collaborative pojects to build out our portfolio.",
        "Developed skills in everything from the basics of HTML, CSS, and JavaScript, to MySQL, MongoDB, and GraphQL in order to make full stack MERN applications.",
      ],
    },
    {
      id: 7,
      type: "education",
      startDate: "Dec 2022",
      endDate: "Dec 2022",
      institution: "E and M Training Course",
      program: "Siemens TIA Portal Software Development I/II",
      location: "Fremont, CA, USA",
      details: [
        "Two-part instructor-led, hands-on course using TIA Portal software to integrate PLC, HMI, and Variable Frequency Drive (VFD) controls.",
        "Learned how to program in Ladder Logic, Function Block Diagrams, Sequential Function Charts, and Structured Text.",
      ],
    },
    {
      id: 6,
      type: "experience",
      startDate: "Sep 2020",
      endDate: "Jan 2024",
      company: "Tesla Motors Inc.",
      jobTitle: "Automation Controls Technician IV",
      location: "Fremont, CA, USA",
      details: [
        "Actively pursued and completed various complex projects from engineering at every opportunity.",
        "Utilized multiple PLC programs to troubleshoot, make modifications, and add functionality to existing equipment.",
        "The go-to technician for any critical system that had a major fault or was down for long periods of time.",
        "Proficient in delivering comprehensive training to team members.",
      ],
    },
    {
      id: 5,
      type: "experience",
      startDate: "Oct 2019",
      endDate: "Sep 2020",
      company: "Tesla Motors Inc.",
      jobTitle: "Equipment Maintenance Technician II",
      location: "Fremont, CA, USA",
      details: [
        "Troubleshot, diagnosed, and corrected hundreds of faults.",
        "Learned the intricacies of multiple systems with no prior knowledge.",
        "Collaborated with engineering to commission new equipment.",
        "Monitored and analyzed recurring problems with various equipment.",
      ],
    },
    {
      id: 4,
      type: "experience",
      startDate: "Dec 2010",
      endDate: "Oct 2018",
      company: "United States Navy",
      jobTitle: "Electronics Technician",
      location: "Japan and San Diego, CA, USA",
      details: [
        "Consistently scored up to 90% on over a dozen ship-wide certifications and inspections.",
        "Maintained 3 radars and corrected over 25 major and minor system casualties.",
        "Significantly increased calibration readiness of all 455 electronic test equipment units onboard.",
        "Aggressively and thoroughly trained 47 personnel.",
      ],
    },
    {
      id: 3,
      type: "education",
      startDate: "Dec 2010",
      endDate: "Apr 2016",
      institution: "US Navy Training Schools",
      program: "Certificates, Electronics Technology",
      location: "Various Locations Nationwide",
      details: [
        "Learned the fundamentals of seamanship, electrical theory, and radio/radar electronics",
        "Attended and excelled at six radar and radio equipment schools, becoming the lead tech on both ships I was assigned to.",
      ],
    },
    {
      id: 2,
      type: "experience",
      startDate: "May 2005",
      endDate: "Dec 2010",
      company: "Freelance",
      jobTitle: "Front-End Web Developer",
      location: "Atlanta, GA, USA",
      details: [
        "Designed, developed, and maintained several small business and school websites.",
        "Created web content for various promotional advertisements.",
      ],
    },
    {
      id: 1,
      type: "education",
      startDate: "Aug 2001",
      endDate: "May 2005",
      institution: "Norcross High School",
      program: "High School Diploma",
      location: "Norcross, GA, USA",
      details: [
        "My first experience with web development was leading a class in creating the school website using HTML and CSS",
      ],
    },
  ];

  const mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "React",
    "Node",
    "MongoDB",
    "MySQL",
    "MERN",
    "Express",
    "Visual Studio Code",
    "Postman",
    "Insomnia",
    "Heroku",
    "Git",
    "GitHub",
    "Git Bash",
    "MongoDB Compass",
    "MySQL Workbench",
    "Astro",
    "GraphQL",
    "Apollo Server",
    "REST API's",
    "jQuery",
    "Bootstrap",
    "Teamwork",
    "Time Management",
    "Project Management",
    "Root Cause Analysis",
    "Interpersonal Communication",
    "Test-Driven Development",
    "Agile Development",
    "Figma",
    "Mongoose",
    "Sequelize",
    "Jest",
    "Material UI",
    "Bulma CSS",
    "Materialize CSS",
    "Troubleshooting",
    "Responsive Web Design",
    "Continuous Integration",
    "Continuous Development",
    "Handlebars JS",
    "Inquirer JS",
    "Microsoft Office",
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

  function ResumeItem({ id }: { id: number }) {
    const resume = myResume.find((item) => item.id === id);

    if (!resume) {
      return null;
    }

    const {
      startDate,
      endDate,
      company,
      institution,
      jobTitle,
      program,
      location,
      details,
    } = resume;

    return (
      <div
        key={id}
        className="text-pretty rounded-lg border-2 border-white/20 p-5 text-stone-300 md:w-5/12"
      >
        <span className="mx-auto block w-max -translate-y-8 rounded-sm bg-orange-700 px-2 text-center text-lg font-black uppercase">
          {startDate} -&gt; {endDate}
        </span>
        <h2 className="text-2xl font-bold">{jobTitle || program}</h2>
        <div className="flex justify-between text-sm uppercase">
          <h3>{company || institution}</h3>
          <span>{location}</span>
        </div>
        <ul className="space-y-2 p-5 text-lg">
          {details.map((detailsItem, index) => (
            <li key={index} className="list-disc">
              {detailsItem}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <motion.section className="min-h-screen py-96" style={style}>
      <div className="mb-96 flex flex-col items-center justify-center gap-10">
        <h2 className="text-center text-5xl font-bold uppercase">My Resume</h2>
        <div>
          <LinkButton
            text="Download PDF"
            href="https://www.linkedin.com/in/edward-von/"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 px-5">
        <div className="flex justify-center">
          <ResumeItem id={9} />
        </div>
        <div className="flex flex-col justify-center gap-10 md:flex-row">
          <ResumeItem id={6} />
          <ResumeItem id={8} />
        </div>
        <div className="flex flex-col-reverse justify-center gap-10 md:flex-row">
          <ResumeItem id={5} />
          <ResumeItem id={7} />
        </div>
        <div className="flex flex-col justify-center gap-10 md:flex-row">
          <ResumeItem id={4} />
          <ResumeItem id={3} />
        </div>
        <div className="flex justify-center">
          <ResumeItem id={2} />
        </div>
        <div className="flex justify-center">
          <ResumeItem id={1} />
        </div>
      </div>

      <div className="mx-5 mt-10 rounded-lg border-2 border-stone-700 p-4 md:mx-auto md:w-7/12">
        <h3 className="mx-auto w-max -translate-y-8 rounded-sm bg-stone-700 px-2 text-center text-2xl font-black uppercase">
          Skills
        </h3>
        <ul className="flex flex-wrap justify-center gap-4 px-4">
          {mySkills.map((skill, index) => (
            <li
              key={index}
              className="rounded-md bg-orange-700 p-2 text-sm font-bold uppercase text-white"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
