import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import SocialLinkList from "../ui/SocialLinkList";

export default function AboutMeSection() {
  return (
    <Container id="about">
      <SectionHeader section="About" title="A Brief Introduction" />
      <div className="flex flex-col-reverse gap-8 rounded-xl border-r border-t border-stone-800 bg-[radial-gradient(circle_at_right_top,_var(--tw-gradient-stops))] from-stone-800 to-stone-950 p-4 lg:flex-row lg:items-start lg:gap-12 lg:p-12">
        <IntroContent />
        <IntroProfilePic />
      </div>
    </Container>
  );
}

const IntroContent = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-y-16 rounded-lg">
        <main className="space-y-4">
          <p className="text-pretty text-xl font-bold text-stone-300">
            With a foundation in robotics and radar systems, I've leveraged my
            14+ years of technician and 5+ years of front-end design and
            development experience to become a full-stack web developer
          </p>
          <p className="font-light text-stone-400">
            After completing UC Berkeley's Full Stack Web Development Boot Camp,
            I'm now building modern, responsive web applications. I primarily
            work with the MERN stack (MongoDB, Express, React, Node.js) and am
            proficient in HTML, CSS, JavaScript, and TypeScript. I'm also
            familiar with Next.js, GraphQL, Astro, Tailwind CSS, Material UI,
            and MySQL.
          </p>
          <p className="font-light text-stone-400">
            I'm currently seeking full-time/contract opportunities in the San
            Francisco Bay Area and I am open to on-site or remote work. I'm
            excited to bring my unique perspective and technical skills to your
            team/project!
          </p>
        </main>
        <div className="flex justify-center pb-8">
          <SocialLinkList />
        </div>
      </div>
    </>
  );
};

const IntroProfilePic = () => {
  return (
    <div className="relative flex-shrink-0">
      <div
        className="absolute inset-0 z-0 translate-y-4 rounded-lg bg-black blur-lg lg:translate-x-4"
        aria-hidden="true"
      />
      <img
        src="about/me2.jpg"
        alt="Me in front of the Unicorn Gundam in Tokyo, Japan"
        className="relative z-10 size-full rounded-lg object-cover lg:size-96"
      />
    </div>
  );
};
