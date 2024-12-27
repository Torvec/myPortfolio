import Container from "../components/ui/container";
import SectionHeader from "../components/ui/section-header";
import ActionButton from "../components/ui/action-button";
import ActionHeader from "../components/ui/action-header";
import { education, experience } from "../data/resume-data";
import { FileDown } from "lucide-react";

type ResumeItemProps = {
  id?: number;
  startDate: string;
  endDate: string;
  logo: string;
  company?: string;
  institution?: string;
  jobTitle?: string;
  program?: string;
  location: string;
  details: string;
};

type ResumeItemListProps = {
  list: ResumeItemProps[];
  type?: string;
};

export default function ResumeSection() {
  return (
    <Container id="resume">
      <SectionHeader
        section="Resume"
        title="My Professional and Academic Journey"
      />
      <div className="flex flex-col gap-8 pb-32 md:flex-row">
        <ResumeItemList list={experience} />
        <ResumeItemList list={education} type="education" />
      </div>
      <Download />
    </Container>
  );
}

const ResumeItemList = ({ list, type }: ResumeItemListProps) => {
  return (
    <div
      className={`space-y-8 md:w-1/2 ${type === "education" ? "md:translate-y-24" : ""}`}
    >
      {list.map(
        ({
          id,
          startDate,
          endDate,
          logo,
          company,
          institution,
          jobTitle,
          program,
          location,
          details,
        }: ResumeItemProps) => (
          <div
            key={id}
            className="rounded-lg bg-gradient-to-b from-stone-800 to-stone-950 to-80% p-1"
          >
            <ResumeItem
              startDate={startDate}
              endDate={endDate}
              logo={logo}
              company={company}
              institution={institution}
              jobTitle={jobTitle}
              program={program}
              location={location}
              details={details}
            />
          </div>
        ),
      )}
    </div>
  );
};

const ResumeItem = ({
  startDate,
  endDate,
  logo,
  company,
  institution,
  jobTitle,
  program,
  location,
  details,
}: ResumeItemProps) => {
  return (
    <div className="rounded-lg bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-stone-900 to-stone-950 to-50% p-4 text-stone-400 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="grid size-12 flex-shrink-0 place-content-center rounded-full bg-[radial-gradient(circle_at_center_center,_var(--tw-gradient-stops))] from-stone-900 from-20% via-stone-900 via-90% to-stone-950 md:size-20">
          <img
            src={logo}
            alt={jobTitle || program}
            className="size-10 opacity-90"
          />
        </div>
        <div className="w-full">
          <div className="flex gap-2 text-sm font-medium uppercase">
            <span>{endDate}</span>
            <span className="material-symbols-sharp">arrow_right</span>
            <span>{startDate}</span>
          </div>
          <h3 className="text-pretty text-lg font-extrabold text-stone-300">
            {jobTitle || program}
          </h3>
          <div className="flex flex-col text-sm font-light md:justify-between lg:flex-row">
            <h4>{company || institution}</h4>
            <h5>{location}</h5>
          </div>
        </div>
      </div>
      <p className="text-pretty pt-4 text-sm font-light leading-relaxed">
        {details}
      </p>
    </div>
  );
};

const Download = () => {
  const date = new Date(2024, 11, 27);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col justify-center border-b border-stone-800 pb-32">
      <ActionHeader>Download my full resume:</ActionHeader>
      <div className="flex flex-col gap-4 md:mx-auto md:flex-row md:gap-16">
        <ActionButton
          variant="primary"
          type="button"
          href="resume/edward-vonschondorf-resume-v122724.docx"
        >
          DOC Format
          <FileDown />
        </ActionButton>
        <ActionButton
          variant="secondary"
          type="button"
          href="resume/edward-vonschondorf-resume-v122724.pdf"
        >
          PDF Format
          <FileDown />
        </ActionButton>
      </div>
      <p className="p-8 text-center text-sm text-stone-400">
        Last Updated: <time dateTime={"2024-12-27"}>{formattedDate}</time>
      </p>
    </div>
  );
};
