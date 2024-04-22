import SectionHeader from "./template/SectionHeader";

export default function ContactMeSection() {
  const ContactForm = () => {
    const fullName = {
      type: "text",
      id: "name",
      name: "name",
      forText: "name",
      labelText: "Name",
      placeholderText: "Enter your full name",
    };

    const email = {
      type: "email",
      id: "email",
      name: "email",
      forText: "email",
      labelText: "E-Mail",
      placeholderText: "Enter your email",
    };

    const message = {
      id: "message",
      name: "message",
      forText: "message",
      labelText: "Message",
      placeholderText: "Enter your message",
    };

    const FormLabel = ({
      forText,
      labelText,
    }: {
      forText: string;
      labelText: string;
    }) => {
      return (
        <label htmlFor={forText} className="mb-2 block text-stone-400">
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
          className="w-full rounded-lg border border-white/15 bg-stone-900 p-4 text-stone-300 focus:bg-stone-800 focus:outline-none focus:ring focus:ring-orange-500/75"
        />
      );
    };

    return (
      <form className="flex h-full md:w-4/6 flex-col justify-evenly gap-8 rounded-lg">
        <div>
          <FormLabel
            forText={fullName.forText}
            labelText={fullName.labelText}
          />
          <FormInput
            inputType={fullName.type}
            inputId={fullName.id}
            inputName={fullName.name}
            inputPlaceholder={fullName.placeholderText}
          />
        </div>
        <div>
          <FormLabel forText={email.forText} labelText={email.labelText} />
          <FormInput
            inputType={email.type}
            inputId={email.id}
            inputName={email.name}
            inputPlaceholder={email.placeholderText}
          />
        </div>
        <div>
          <FormLabel forText={message.forText} labelText={message.labelText} />
          <textarea
            id={message.id}
            name={message.name}
            placeholder={message.placeholderText}
            rows={8}
            maxLength={500}
            required
            className="w-full resize-none rounded-lg border border-white/15 bg-stone-900 p-4 text-stone-200 focus:bg-stone-800 focus:outline-none focus:ring focus:ring-orange-500/75"
          />
        </div>
        <button
          type="submit"
          className="self-center rounded-lg border-4 border-orange-900 bg-gradient-to-t from-orange-700 to-orange-500 px-4 py-2 text-stone-200"
        >
          Send Message
        </button>
      </form>
    );
  };

  const DirectContact = () => {
    const content = {
      text: "Get in touch with me directly:",
      email: "me@edward-vonschondorf.dev",
      mailto:
        "mailto:me@edward-vonschondorf.dev?subject=Let's Connect and Collaborate!",
    };

    return (
      <div className="md:w-2/6">
        <p className="mb-2 text-stone-400">{content.text}</p>
        <a
          href={content.mailto}
          className="font-bold text-stone-200 hover:text-orange-600"
        >
          {content.email}
        </a>
      </div>
    );
  };

  return (
    <section id="contact" className="container mx-auto px-4 pb-64 md:px-0">
      <SectionHeader title="Let's Connect and Collaborate!" />
      <div className="flex flex-col md:flex-row gap-32">
        <ContactForm />
        <DirectContact />
      </div>
    </section>
  );
}
