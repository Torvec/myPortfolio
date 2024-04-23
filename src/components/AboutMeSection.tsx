import SectionHeader from "./template/SectionHeader";
import {
  introData,
  profilePicData,
  hobbiesData,
  availabilityData,
  socialLinksData,
  devGoalsData,
} from "../data/aboutMeData";

export default function AboutMeSection() {
  const AboutMeSubHeader = ({ headingText }: { headingText: string }) => {
    return (
      <h3 className="mb-4 text-lg font-bold uppercase text-stone-200">
        {headingText}
      </h3>
    );
  };

  const Intro = () => {
    const { introHeader, introP1, introP2 } = introData;

    return (
      <div className="rounded-lg border border-white/10 bg-gradient-to-tl from-stone-800 p-8 md:w-4/12">
        <AboutMeSubHeader headingText={introHeader} />
        <p className="mb-4 text-stone-300">{introP1}</p>
        <p className="text-stone-300">{introP2}</p>
      </div>
    );
  };

  const ProfilePic = () => {
    const { src, alt } = profilePicData;

    return (
      <div className="rounded-lg border border-white/10 bg-stone-800 p-2 md:w-4/12">
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
      <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-gradient-to-bl from-stone-800 to-stone-950 px-2 py-1.5 text-sm font-light uppercase">
        <span>{icon}</span>
        <span>{hobby}</span>
      </li>
    );
  };

  // TODO: Replace emojis with svg icons
  const HobbiesList = () => {
    const { hobbyHeader, hobbyList } = hobbiesData;

    return (
      <div className="rounded-lg border border-white/10 bg-gradient-to-bl from-stone-800 p-8 md:w-4/12">
        <AboutMeSubHeader headingText={hobbyHeader} />
        <ul className="flex flex-wrap gap-4 pt-4 text-stone-400">
          {hobbyList.map(({ hobby, icon }, index) => (
            <HobbyItem key={index} hobby={hobby} icon={icon} />
          ))}
        </ul>
      </div>
    );
  };

  const AvailabilityItem = ({ type, icon }: { type: string; icon: string }) => {
    return (
      <li className="flex items-center justify-between rounded-lg border border-white/10 bg-gradient-to-tr from-stone-800 to-stone-950 p-2 text-stone-400">
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <span className="text-sm font-light uppercase">{type}</span>
        </div>
        <span>✅</span>
      </li>
    );
  };

  const AvailabilityList = () => {
    const { availabilityHeader, availabilityList } = availabilityData;

    return (
      <div className="rounded-lg border border-white/10 bg-gradient-to-tr from-stone-800 p-8 md:w-4/12">
        <AboutMeSubHeader headingText={availabilityHeader} />
        <ul className="flex flex-col gap-8">
          {availabilityList.map(({ type, icon }, index) => (
            <AvailabilityItem key={index} type={type} icon={icon} />
          ))}
        </ul>
      </div>
    );
  };

  const SocialLinkItem = ({
    href,
    logo,
    label,
  }: {
    href: string;
    logo: string;
    label: string;
  }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group w-1/2 border-white/25`}
      >
        <li className="flex flex-col items-center justify-center gap-2 py-8">
          <img src={logo} alt={label} className="h-8" />
          <span className="text-orange-500 transition-all duration-300 ease-in-out hover:text-orange-600">
            {label}
          </span>
        </li>
      </a>
    );
  };

  // TODO: Social Link logos are temporary, need to change them to svg
  const SocialLinkList = () => {
    const { socialLinksHeader, socialLinksList } = socialLinksData;

    return (
      <div className="rounded-lg border border-white/10 bg-gradient-to-br from-stone-800 p-8 md:w-4/12">
        <AboutMeSubHeader headingText={socialLinksHeader} />
        <ul className="flex flex-wrap">
          {socialLinksList.map(({ href, logo, label }, index) => (
            <SocialLinkItem key={index} href={href} logo={logo} label={label} />
          ))}
        </ul>
      </div>
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
      <div className="mb-8 flex flex-col gap-8 px-4 md:flex-row md:px-0">
        <Intro />
        <ProfilePic />
        <AvailabilityList />
      </div>
      <div className="flex flex-col justify-center gap-8 px-4 md:flex-row md:px-0">
        <HobbiesList />
        <SocialLinkList />
      </div>
      <GoalList />
    </section>
  );
}
