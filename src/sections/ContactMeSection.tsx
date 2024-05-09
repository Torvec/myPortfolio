import Container from "../components/ui/Container";
import SectionHeader from "../components/SectionHeader";
import ActionButton from "../components/ui/ActionButton";
import {
  availabilityData,
  fullNameInput,
  emailInput,
  messageInput,
} from "../data/contactMeData";
import {
  type FormLabelProps,
  type FormInputProps,
  type FormMessageProps,
  type AvailabilityItemProps,
} from "../types/allTypes";
import { Send } from "lucide-react";

export default function ContactMeSection() {
  const FormLabel = ({ forText, labelText }: FormLabelProps) => {
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
  }: FormInputProps) => {
    return (
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        required
        disabled
        className="w-full rounded-lg border border-white/15 bg-stone-900 p-4 text-stone-300 focus:bg-stone-800 focus:outline-none focus:ring focus:ring-orange-500/50"
      />
    );
  };

  const FormMessage = ({
    messageId,
    messageName,
    messagePlaceholder,
    messageRows,
    messageMaxLength,
  }: FormMessageProps) => {
    return (
      <textarea
        id={messageId}
        name={messageName}
        placeholder={messagePlaceholder}
        rows={messageRows}
        maxLength={messageMaxLength}
        required
        disabled
        className="w-full resize-none rounded-lg border border-white/15 bg-stone-900 p-4 text-stone-200 focus:bg-stone-800 focus:outline-none focus:ring focus:ring-orange-500/50"
      />
    );
  };

  const ContactForm = () => {
    return (
      <form className="flex flex-col justify-evenly gap-8 rounded-lg md:w-4/6">
        <p className="mx-auto text-balance rounded-lg border border-orange-700 px-6 py-1 text-center text-sm font-bold uppercase text-stone-300">
          This form is currently disabled/under development
        </p>
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
          <FormMessage
            messageId={messageInput.id}
            messageName={messageInput.name}
            messagePlaceholder={messageInput.placeholderText}
            messageRows={8}
            messageMaxLength={500}
          />
        </div>
        <ActionButton variant="disabled" type="submit" disabled>
          Send Message
          <Send size={16} />
        </ActionButton>
      </form>
    );
  };

  const DirectContact = () => {
    return (
      <div>
        <p className="text-center text-stone-400">
          Get in touch with me directly:
        </p>

        <ActionButton
          variant="link"
          type="button"
          href="mailto:me@edward-vonschondorf.dev?subject=Let's Connect and Collaborate!"
        >
          me@edward-vonschondorf.dev
        </ActionButton>
      </div>
    );
  };

  const AvailabilityItem = ({ type, availability }: AvailabilityItemProps) => {
    return (
      <li className="rounded-lg border-y border-l border-stone-900  text-stone-400">
        <div className="flex items-center justify-between rounded-lg bg-gradient-to-l from-orange-950/50 to-40% px-5 py-3">
          <span className="text-sm">{type}</span>
          <span className="text-xs font-medium uppercase text-orange-500">
            {availability}
          </span>
        </div>
      </li>
    );
  };

  const AvailabilityList = () => {
    const { availabilityList } = availabilityData;
    return (
      <div>
        <h3 className="mb-4 text-center text-sm font-bold uppercase text-stone-300">
          Current Availability
        </h3>
        <ul className="flex flex-col gap-6">
          {availabilityList.map(({ type, availability }, index) => (
            <AvailabilityItem
              key={index}
              type={type}
              availability={availability}
            />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Container id="contact">
      <SectionHeader section="Contact" title="Let's Connect and Collaborate!" />
      <div className="flex flex-col gap-32 md:flex-row">
        <ContactForm />
        <div className="flex flex-col gap-16 md:w-1/3">
          <DirectContact />
          <AvailabilityList />
        </div>
      </div>
    </Container>
  );
}
