import Container from "../components/ui/container";
import SocialLinkList from "../components/ui/social-link-list";

export default function AboutMeSection() {
  return (
    <Container id="about">
      <div className="z-40 flex flex-col-reverse gap-8 rounded-xl border border-stone-800 bg-[radial-gradient(circle_at_right_top,_var(--tw-gradient-stops))] from-stone-800 to-stone-950 p-4 lg:flex-row lg:items-center lg:gap-12 lg:p-12">
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
          <p className="text-pretty text-xl font-bold text-stone-200">
            With a foundation in robotics and radar systems, I've leveraged my
            14+ years of technician and 5+ years of front-end design and
            development experience to become a full-stack web developer
          </p>
          <p className="font-light text-stone-300">
            After completing UC Berkeley's Full Stack Web Development Boot Camp,
            I'm now building modern, responsive web applications. I primarily
            work with the MERN stack (MongoDB, Express, React, Node.js) and am
            proficient in HTML, CSS, JavaScript, and TypeScript. I'm also
            familiar with Next.js, GraphQL, Astro, Vue, Tailwind CSS, Material
            UI, and MySQL.
          </p>
          <p className="font-light text-stone-300">
            I'm currently seeking full-time/contract opportunities in the San
            Francisco Bay Area and I am open to on-site or remote work. I'm
            excited to bring my unique perspective and technical skills to your
            team/project!
          </p>
        </main>
        <div className="flex flex-col justify-between gap-4 pb-8 sm:flex-row">
          <a
            href="mailto:me@edward-vonschondorf.dev"
            className="text-orange-500 transition-colors duration-150 ease-in-out hover:text-orange-600"
          >
            Contact Me
          </a>
          <SocialLinkList />
        </div>
      </div>
    </>
  );
};

const IntroProfilePic = () => {
  return (
    <div className="mx-auto w-max max-w-full flex-shrink-0 rounded-lg shadow-xl shadow-white/25">
      <img
        src="about/me3-rev.jpg"
        alt="Me in front of the Unicorn Gundam in Tokyo, Japan"
        className="rounded-lg"
      />
    </div>
  );
};
