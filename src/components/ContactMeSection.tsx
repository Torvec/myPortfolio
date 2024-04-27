import SectionHeader from "./template/SectionHeader";
import {
  availabilityData,
  fullNameInput,
  emailInput,
  messageInput,
} from "../data/contactData";

export default function ContactMeSection() {
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

  const ContactForm = () => {
    return (
      <form className="flex h-full flex-col justify-evenly gap-8 rounded-lg md:w-4/6">
        <div>
          <FormLabel
            forText={fullNameInput.forText}
            labelText={fullNameInput.labelText}
          />
          <FormInput
            inputType={fullNameInput.type}
            inputId={fullNameInput.id}
            inputName={fullNameInput.name}
            inputPlaceholder={fullNameInput.placeholderText}
          />
        </div>
        <div>
          <FormLabel
            forText={emailInput.forText}
            labelText={emailInput.labelText}
          />
          <FormInput
            inputType={emailInput.type}
            inputId={emailInput.id}
            inputName={emailInput.name}
            inputPlaceholder={emailInput.placeholderText}
          />
        </div>
        <div>
          <FormLabel
            forText={messageInput.forText}
            labelText={messageInput.labelText}
          />
          <textarea
            id={messageInput.id}
            name={messageInput.name}
            placeholder={messageInput.placeholderText}
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
      <div className="">
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
      <div className="rounded-lg border border-white/10 bg-stone-900 p-8">
        {/* <AboutMeSubHeader headingText={availabilityHeader} /> */}
        <h3 className="mb-4 text-center text-sm font-bold uppercase text-stone-300">
          {availabilityHeader}
        </h3>
        <ul className="flex flex-col gap-8">
          {availabilityList.map(({ type, icon }, index) => (
            <AvailabilityItem key={index} type={type} icon={icon} />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id="contact" className="container mx-auto min-h-screen px-4 md:px-0">
      <SectionHeader title="Let's Connect and Collaborate!" />
      <div className="flex flex-col gap-32 md:flex-row">
        <ContactForm />
        <div className="flex md:w-1/3 flex-col gap-8">
          <DirectContact />
          <AvailabilityList />
        </div>
      </div>
    </section>
  );
}
