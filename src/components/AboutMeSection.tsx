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
      <>
        <AboutMeSubHeader headingText={introHeader} />
        <p className="mb-4 text-stone-300">{introP1}</p>
        <p className="text-stone-300">{introP2}</p>
      </>
    );
  };

  const ProfilePic = () => {
    const { src, alt } = profilePicData;

    return (
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-lg object-cover "
      />
    );
  };

  const HobbyItem = ({ hobby, icon }: { hobby: string; icon: string }) => {
    return (
      <li className="flex items-center rounded-lg border-4 border-stone-900 bg-gradient-to-t from-stone-800 text-xs font-light uppercase">
        <span className="px-2 py-1">{icon}</span>
        <span className="px-2 py-1">{hobby}</span>
      </li>
    );
  };

  // TODO: Replace emojis with svg icons
  const HobbiesList = () => {
    const { hobbyHeader, hobbyList } = hobbiesData;

    return (
      <>
        <AboutMeSubHeader headingText={hobbyHeader} />
        <ul className="flex flex-wrap gap-4 pt-4 text-stone-400">
          {hobbyList.map(({ hobby, icon }, index) => (
            <HobbyItem key={index} hobby={hobby} icon={icon} />
          ))}
        </ul>
      </>
    );
  };

  const AvailabilityItem = ({ type, icon }: { type: string; icon: string }) => {
    return (
      <li className="flex items-center justify-between rounded-lg border-4 border-stone-900 bg-gradient-to-tr from-stone-800 p-1 text-stone-400">
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <span className="text-xs uppercase">{type}</span>
        </div>
        <span>✅</span>
      </li>
    );
  };

  const AvailabilityList = () => {
    const { availabilityHeader, availabilityList } = availabilityData;

    return (
      <>
        <AboutMeSubHeader headingText={availabilityHeader} />
        <ul className="flex h-full flex-col justify-center gap-4">
          {availabilityList.map(({ type, icon }, index) => (
            <AvailabilityItem key={index} type={type} icon={icon} />
          ))}
        </ul>
      </>
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
        className="block aspect-square rounded-xl border border-white/10 p-2"
      >
        <li className="flex h-full flex-col items-center justify-center rounded-lg border border-white/20 bg-gradient-to-tr from-stone-800">
          <img src={logo} alt={label} />
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
      <>
        <AboutMeSubHeader headingText={socialLinksHeader} />
        <ul className="grid h-full grid-cols-2 place-content-center gap-8 md:grid-cols-4">
          {socialLinksList.map(({ href, logo, label }, index) => (
            <SocialLinkItem key={index} href={href} logo={logo} label={label} />
          ))}
        </ul>
      </>
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
      <div className="flex aspect-square flex-col items-center justify-between rounded-lg border border-white/10 bg-gradient-to-tr from-stone-900 p-8 text-stone-300 md:col-span-2 md:row-span-2">
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
        <div className="row-span-1 place-content-center md:col-span-4">
          <h3 className="text-center text-3xl text-stone-300 md:text-5xl">
            {devGoalsHeader}
          </h3>
        </div>
        {devGoalList.map(({ text, icon }, index) => (
          <GoalItem key={index} number={index + 1} text={text} icon={icon} />
        ))}
      </>
    );
  };

  return (
    <section id="about" className="container mx-auto">
      <div className="mb-8 grid gap-8 px-4 md:grid-cols-3 md:grid-rows-2 md:px-0">
        <div className="md:col-span-3 md:row-span-1">
          <SectionHeader title="A Brief Introduction" />
        </div>
        <div className="rounded-lg border border-white/10 bg-gradient-to-br from-stone-900 p-8">
          <Intro />
        </div>
        <div className="rounded-lg border border-white/10">
          <ProfilePic />
        </div>
        <div className="rounded-lg border border-white/10 bg-gradient-to-bl from-stone-900 p-8">
          <HobbiesList />
        </div>
      </div>
      <div className="mb-8 grid gap-8 px-4 md:grid-cols-3 md:px-0">
        <div className="rounded-lg border border-white/10 bg-gradient-to-tr from-stone-900 p-8 md:col-span-1 md:aspect-square">
          <AvailabilityList />
        </div>
        <div className="rounded-lg border border-white/10 bg-gradient-to-tl from-stone-900 p-8 md:col-span-2">
          <SocialLinkList />
        </div>
      </div>
      <div className="mb-64 grid gap-8 px-4 md:grid-cols-4 md:grid-rows-3 md:px-0">
        <GoalList />
      </div>
    </section>
  );
}
