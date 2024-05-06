import SectionHeader from "../components/SectionHeader";
import SocialLinkList from "../components/SocialLinkList";
import { introData } from "../data/aboutMeData";

export default function AboutMeSection() {
  const IntroContent = () => {
    const { introP1, introP2, introP3, cta } = introData;

    return (
      <>
        <div className="flex flex-col justify-between gap-y-16 rounded-lg md:p-8">
          <main className="space-y-4">
            <p className="text-pretty text-xl font-bold text-stone-300">
              {introP1}
            </p>
            <p className="font-light text-stone-400">{introP2}</p>
            <p className="font-light text-stone-400">{introP3}</p>
          </main>
          <footer className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-0">
            <button
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
              className="w-max text-orange-500 transition-all duration-300 ease-in-out hover:scale-110 hover:text-orange-600"
            >
              {cta}
            </button>
            <SocialLinkList />
          </footer>
        </div>
      </>
    );
  };

  const IntroProfilePic = () => {
    const { picSrc, picAlt } = introData;

    return (
      <div className="relative flex-shrink-0">
        <div
          className="absolute inset-0 z-0 translate-y-4 rounded-lg bg-black blur-lg md:translate-x-4"
          aria-hidden="true"
        />
        <img
          src={picSrc}
          alt={picAlt}
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
    <section
      id="about"
      className="container mx-auto flex flex-col justify-center px-4 md:px-0"
    >
      <SectionHeader section="About" title="A Brief Introduction" />
      <Intro />
    </section>
  );
}
