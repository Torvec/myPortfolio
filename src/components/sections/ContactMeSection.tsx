import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { availabilityData } from "../../data/contactMeData";
import { Mail } from "lucide-react";

type AvailabilityItemProps = {
  type: string;
  availability: string;
};

export default function ContactMeSection() {
  return (
    <Container id="contact">
      <SectionHeader section="Contact" title="Let's Connect and Collaborate!" />
      <div className="mx-auto space-y-16 lg:w-2/3">
        <AvailabilityList />
        <DirectContact />
      </div>
    </Container>
  );
}

const AvailabilityItem = ({ type, availability }: AvailabilityItemProps) => {
  return (
    <li className="rounded-lg border-y border-l border-stone-800  text-stone-400">
      <div className="flex flex-col gap-4 rounded-lg bg-gradient-to-t from-stone-800 to-stone-950 to-40% px-5 py-3 text-center">
        <span className="text-sm">{type}</span>
        <span className="text-sm font-bold uppercase text-orange-500">
          {availability}
        </span>
      </div>
    </li>
  );
};

const AvailabilityList = () => {
  const { availabilityList } = availabilityData;
  return (
    <div className="rounded-3xl border-2 border-stone-800 bg-gradient-to-b from-stone-900/50 to-40% p-4 lg:p-8">
      <h3 className="mb-4 text-center text-sm font-bold uppercase text-stone-300">
        Availability
      </h3>
      <ul className="grid gap-6 md:grid-cols-2">
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

const DirectContact = () => {
  return (
    <div className="space-y-6">
      <p className="text-center font-bold text-stone-400 sm:text-xl">
        Get in touch with me directly:
        <br />
        <br />
        <a
          href="mailto:me@edward-vonschondorf.dev?subject=Let's Connect and Collaborate!"
          className="text-orange-500 hover:text-orange-600"
        >
          <Mail size={40} className="mx-auto" />
          <span className="font-black sm:text-2xl md:text-4xl">
            me@edward-vonschondorf.dev
          </span>
        </a>
      </p>
    </div>
  );
};
