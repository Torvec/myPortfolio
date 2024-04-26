import SectionHeader from "./template/SectionHeader";
import {
  introData,
  profilePicData,
  hobbiesData,
  devGoalsData,
} from "../data/aboutMeData";
import { socialLinksData } from "../data/commonData";
import { twMerge } from "tailwind-merge";

export default function AboutMeSection() {
  const Intro = () => {
    const { introP1, introP2, introP3, cta } = introData;

    return (
      <div className="flex flex-col justify-center gap-4 rounded-lg border border-white/10 bg-gradient-to-tl from-stone-800 p-8 md:col-span-9 md:row-span-2">
        <p className="text-pretty text-2xl font-bold text-stone-300">
          {introP1}
        </p>
        <p className="font-light text-stone-300">{introP2}</p>
        <p className="font-light text-stone-300">{introP3}</p>
        <button
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          className="mb-8 w-max text-orange-500"
        >
          {cta}
        </button>
        <HobbiesList />
      </div>
    );
  };

  const ProfilePic = () => {
    const { src, alt } = profilePicData;

    return (
      <div className="rounded-lg border border-white/10 bg-stone-800 p-2 md:col-span-3">
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-lg border border-white/15 object-cover"
        />
      </div>
    );
  };

  const HobbyItem = ({ hobby, icon }: { hobby: string; icon: string }) => {
    return (
      <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-gradient-to-bl from-stone-800 to-stone-950 px-2 py-1.5 text-xs uppercase">
        <span>{icon}</span>
        <span>{hobby}</span>
      </li>
    );
  };

  // TODO: Replace emojis with svg icons
  const HobbiesList = () => {
    const { hobbyHeader, hobbyList } = hobbiesData;

    return (
      <div>
        <h4 className="font-bold text-stone-300">{hobbyHeader}</h4>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-4 text-stone-400">
          {hobbyList.map(({ hobby, icon }, index) => (
            <HobbyItem key={index} hobby={hobby} icon={icon} />
          ))}
        </ul>
      </div>
    );
  };

  const SocialLinkItem = ({
    href,
    logo,
    label,
    className,
  }: {
    href: string;
    logo: string;
    label: string;
    className?: string;
  }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(
          "aspect-square rounded-lg border border-white/25 bg-white/10 p-2",
          className,
        )}
      >
        <li
          className={twMerge(
            "grid h-full w-full place-content-center rounded-lg border border-white/15 bg-gradient-to-tr to-black",
            className,
          )}
        >
          <img src={logo} alt={label} className="h-10" />
        </li>
      </a>
    );
  };

  // TODO: Social Link logos are temporary, need to change them to svg
  const SocialLinkList = () => {
    // Order = linkedin, github, dev.to, youtube
    const bgGradientColors = [
      "from-[#0077b5]",
      "from-[#2dba4e]",
      "from-white/20",
      "from-[#FF0000]",
    ];

    return (
      <ul className="grid grid-cols-2 grid-rows-2 gap-4 md:col-span-3">
        {socialLinksData.map(({ href, logo, label }, index) => (
          <SocialLinkItem
            key={index}
            href={href}
            logo={logo}
            label={label}
            className={bgGradientColors[index % bgGradientColors.length]} // index Cycle through colors
          />
        ))}
      </ul>
    );
  };

  const GoalItem = ({
    number,
    text,
    icon,
  }: {
    number: number;
    text: string;
    icon: string;
  }) => {
    return (
      <div className="flex h-[40vh] flex-col items-center justify-between rounded-lg border border-white/10 bg-gradient-to-b from-stone-800 p-8 text-stone-300">
        <span>0{number}</span>
        <img src={icon} alt="" className="size-32" />
        <p className="text-pretty text-lg">{text}</p>
      </div>
    );
  };

  // TODO: Icons are temporary, need to come up with a unique design and save as svg
  const GoalList = () => {
    const { devGoalsHeader, devGoalList } = devGoalsData;

    return (
      <>
        <h3 className="pb-16 pt-32 text-center text-3xl text-stone-300 md:text-5xl">
          {devGoalsHeader}
        </h3>
        <div className="flex flex-col gap-8 px-4 md:flex-row md:px-0">
          {devGoalList.map(({ text, icon }, index) => (
            <GoalItem key={index} number={index + 1} text={text} icon={icon} />
          ))}
        </div>
      </>
    );
  };

  return (
    <section id="about" className="container mx-auto">
      <SectionHeader title="A Brief Introduction" />
      <div className="grid gap-8 px-4 md:grid-cols-12 md:grid-rows-2 md:px-0">
        <Intro />
        <ProfilePic />
        <SocialLinkList />
      </div>
      <GoalList />
    </section>
  );
}
