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

const AvailabilityList = () => {
  const { availabilityList } = availabilityData;
  return (
    <div className="rounded-3xl border-2 border-stone-800 bg-gradient-to-b from-stone-900 to-40% p-2 lg:p-4">
      <h3 className="mb-4 text-center font-bold uppercase text-stone-200">
        Availability
      </h3>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

const AvailabilityItem = ({ type, availability }: AvailabilityItemProps) => {
  return (
    <li className="rounded-lg border-y border-l border-stone-800">
      <div className="flex flex-col gap-4 rounded-lg bg-gradient-to-t from-stone-800 to-stone-900 to-40% px-6 py-2 text-center text-sm">
        <span className="text-stone-400">{type}</span>
        <span className="font-bold uppercase text-orange-500">
          {availability}
        </span>
      </div>
    </li>
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
