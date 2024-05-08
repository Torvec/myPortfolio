import Container from "../components/ui/Container";
import SectionHeader from "../components/SectionHeader";
import SocialLinkList from "../components/SocialLinkList";
import { CornerRightDown } from "lucide-react";

export default function AboutMeSection() {
  const IntroContent = () => {
    return (
      <>
        <div className="flex flex-col justify-between gap-y-16 rounded-lg md:p-8">
          <main className="space-y-4">
            <p className="text-pretty text-xl font-bold text-stone-300">
              With a foundation in robotics and radar systems, I've leveraged my
              14+ years of technician and 5+ years of front-end design and
              development experience to become a full-stack web developer
            </p>
            <p className="font-light text-stone-400">
              After completing UC Berkeley's Full Stack Web Development Boot
              Camp, I'm now building modern, responsive web applications. I
              primarily work with the MERN stack (MongoDB, Express, React,
              Node.js) and am proficient in HTML, CSS, JavaScript, and
              TypeScript. I'm also familiar with Next.js, GraphQL, Astro,
              Tailwind CSS, Material UI, and MySQL.
            </p>
            <p className="font-light text-stone-400">
              I'm currently seeking full-time/contract opportunities in the San
              Francisco Bay Area and I am open to on-site or remote work. I'm
              excited to bring my unique perspective and technical skills to
              your team/project!
            </p>
          </main>
          <footer className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-0">
            <button
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
              className="flex w-max items-end gap-2 text-orange-500 transition-all duration-300 ease-in-out hover:scale-110 hover:text-orange-600"
            >
              Let's Connect! <CornerRightDown size={20} />
            </button>
            <SocialLinkList />
          </footer>
        </div>
      </>
    );
  };

  const IntroProfilePic = () => {
    return (
      <div className="relative flex-shrink-0">
        <div
          className="absolute inset-0 z-0 translate-y-4 rounded-lg bg-black blur-lg md:translate-x-4"
          aria-hidden="true"
        />
        <img
          src="about/me.jpg"
          alt="Me at the Grand Canyon"
          className="relative z-10 size-full rounded-lg object-cover md:size-96"
        />
      </div>
    );
  };

  const Intro = () => {
    return (
      <div className="flex flex-col-reverse gap-8 rounded-lg border-t border-white/15 bg-[radial-gradient(circle_at_right_top,_var(--tw-gradient-stops))] from-stone-900 p-4 md:flex-row md:items-center md:gap-16 md:p-16">
        <IntroContent />
        <IntroProfilePic />
      </div>
    );
  };

  return (
    <Container id="about">
      <SectionHeader section="About" title="A Brief Introduction" />
      <Intro />
    </Container>
  );
}
