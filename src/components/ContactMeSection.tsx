import SectionHeader from "./template/SectionHeader";

export default function ContactMeSection() {
  const data = {
    sectionHeader: {
      title: "Contact Me",
      number: "04",
    },
    connectCTA: {
      text: "Let's Connect",
      email: "me@edward-vonschondorf.dev",
      mailto: "mailto:me@edward-vonschondorf.dev?subject=Let's Connect!",
    },
  };

  const ConnectCTA = () => {
    const { text, email, mailto } = data.connectCTA;

    return (
      <div className="container mx-auto ">
        <h2 className="mx-auto w-max py-32">
          <span className="block text-lg text-white/75 md:text-2xl">
            {text}
          </span>
          <a
            href={mailto}
            className="border-b-2 border-white/50 text-2xl uppercase text-stone-200 md:border-b-4 md:text-5xl"
          >
            {email}
          </a>
        </h2>
      </div>
    );
  };

  const { title, number } = data.sectionHeader;

  return (
    <section id="contact">
      <SectionHeader title={title} number={number} />
      <ConnectCTA />
    </section>
  );
}
