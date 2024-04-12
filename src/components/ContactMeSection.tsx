export default function ContactMeSection() {
  const data = {
    connectCTA: {
      text: "Let's Connect",
      email: "me@edward-vonschondorf.dev",
      mailto: "mailto:me@edward-vonschondorf.dev?subject=Let's Connect!",
    },
  };

  const ConnectCTA = () => {
    const { text, email, mailto } = data.connectCTA;

    return (
      <div className="container mx-auto bg-orange-600">
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

  return (
    <section className="bg-orange-600" id="contact">
      <ConnectCTA />
    </section>
  );
}
