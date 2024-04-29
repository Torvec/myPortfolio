import SectionHeader from "./template/SectionHeader";
import { SocialLinkList } from "./Common";
import { introData } from "../data/aboutMeData";

export default function AboutMeSection() {
  const IntroContent = () => {
    const { introP1, introP2, introP3, cta } = introData;

    return (
      <>
        <div className="flex flex-col justify-between gap-y-16 rounded-lg bg-gradient-to-tl from-stone-800 via-transparent to-stone-800 p-8">
          <main className="space-y-4">
            <p className="text-pretty text-xl font-bold text-stone-300">
              {introP1}
            </p>
            <p className="font-light text-stone-400">{introP2}</p>
            <p className="font-light text-stone-400">{introP3}</p>
          </main>
          <footer className="flex justify-between">
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
      <div className="flex-shrink-0">
        <img
          src={picSrc}
          alt={picAlt}
          className="size-full rounded-lg object-cover md:size-96"
        />
      </div>
    );
  };

  const Intro = () => {
    return (
      <div className="flex flex-col-reverse gap-8 rounded-lg border-t border-white/15 bg-gradient-to-b from-stone-900 p-4 md:flex-row md:items-center md:gap-16 md:p-16">
        <IntroContent />
        <IntroProfilePic />
      </div>
    );
  };

  return (
    <section
      id="about"
      className="container mx-auto flex min-h-screen flex-col justify-center px-4 md:px-0"
    >
      <SectionHeader section="About" title="A Brief Introduction" />
      <Intro />
    </section>
  );
}
