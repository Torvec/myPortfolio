import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ActionButton from "../ui/ActionButton";
import { availabilityData } from "../../data/contactMeData";

type AvailabilityItemProps = {
  type: string;
  availability: string;
};

export default function ContactMeSection() {
  return (
    <Container id="contact">
      <SectionHeader section="Contact" title="Let's Connect and Collaborate!" />
      <div className="mx-auto flex flex-col gap-16 md:w-1/2">
        <DirectContact />
        <AvailabilityList />
      </div>
    </Container>
  );
}

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
