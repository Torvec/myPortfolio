import SectionHeader from "./template/SectionHeader";

export default function ContactMeSection() {
  const ContactForm = () => {
    const inputLabels = [
      { labelText: "name", placeholderText: "Your Name Here" },
      { labelText: "email", placeholderText: "Your Email Here" },
      { labelText: "message", placeholderText: "Your Message Here" },
    ];

    const FormLabel = ({
      forText,
      labelText,
    }: {
      forText: string;
      labelText: string;
    }) => {
      return (
        <label htmlFor={forText} className="uppercase text-stone-300">
          {labelText}
        </label>
      );
    };

    const FormInput = ({
      inputType,
      inputId,
      inputName,
      inputPlaceholder,
    }: {
      inputType: string;
      inputId: string;
      inputName: string;
      inputPlaceholder: string;
    }) => {
      return (
        <input
          type={inputType}
          id={inputId}
          name={inputName}
          placeholder={inputPlaceholder}
          required
          className="w-full rounded-lg border border-white/25 bg-stone-900 p-4 text-stone-200"
        />
      );
    };

    return (
      <div className="h-full rounded-lg border border-white/10 bg-stone-900 p-2">
        <form className="flex h-full flex-col justify-evenly gap-8 rounded-lg border border-white/20 bg-gradient-to-br from-stone-800 to-stone-950 p-8">
          <div>
            <FormLabel
              forText={inputLabels[0].labelText}
              labelText={inputLabels[0].labelText}
            />
            <FormInput
              inputType="text"
              inputId={inputLabels[0].labelText}
              inputName={inputLabels[0].labelText}
              inputPlaceholder={inputLabels[0].placeholderText}
            />
          </div>
          <div>
            <FormLabel
              forText={inputLabels[1].labelText}
              labelText={inputLabels[1].labelText}
            />
            <FormInput
              inputType="text"
              inputId={inputLabels[1].labelText}
              inputName={inputLabels[1].labelText}
              inputPlaceholder={inputLabels[1].placeholderText}
            />
          </div>
          <div>
            <FormLabel
              forText={inputLabels[2].labelText}
              labelText={inputLabels[2].labelText}
            />
            <textarea
              id={inputLabels[2].labelText}
              name={inputLabels[2].labelText}
              placeholder={inputLabels[2].placeholderText}
              required
              className="w-full resize-none rounded-lg border border-white/25 bg-stone-900 p-4 text-stone-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="self-center rounded-lg border-4 border-orange-900 bg-gradient-to-t from-orange-700 to-orange-500 px-4 py-2 text-stone-200"
          >
            Send
          </button>
        </form>
      </div>
    );
  };

  const AlternateContact = () => {
    const content = {
      text: "Alternatively, you can contact me here:",
      email: "me@edward-vonschondorf.dev",
      mailto:
        "mailto:me@edward-vonschondorf.dev?subject=Let's Connect and Collaborate!",
    };

    return (
      <div className="aspect-square rounded-lg border border-white/10 bg-stone-900 p-4 text-stone-300">
        <p>
          {content.text}
          <br />
          <a href={content.mailto}>{content.email}</a>
        </p>
      </div>
    );
  };

  const ThanksForVisiting = () => {
    return (
      <div className="aspect-square rounded-lg border border-white/10 bg-stone-900 p-4 text-stone-300">
        Thanks for Visiting!
      </div>
    );
  };

  return (
    <section className="container mx-auto px-4 pb-64 md:px-0">
      <SectionHeader title="Let's Connect and Collaborate!" />
      <div className="grid gap-8 md:grid-cols-12 md:grid-rows-2">
        <div className="md:col-span-9 md:row-span-2">
          <ContactForm />
        </div>
        <div className="md:col-span-3">
          <AlternateContact />
        </div>
        <div className="md:col-span-3">
          <ThanksForVisiting />
        </div>
      </div>
    </section>
  );
}
