import SectionHeader from "./template/SectionHeader";
import ActionButton from "./template/ActionButton";
import ActionHeader from "./template/ActionHeader";
import { education, experience, download } from "../data/resumeData";
import { type ResumeItemProps, type ResumeListProps } from "../types/allTypes";

export default function ResumeSection() {
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
      <div className="rounded-lg bg-gradient-to-tl from-stone-800 to-stone-950 to-60% px-4 py-8">
        <div className="flex items-center gap-6">
          <div className="grid size-20 flex-shrink-0 place-content-center rounded-full border border-stone-700/50 bg-gradient-to-tl from-stone-800 to-50%">
            <img
              src={logo}
              alt={jobTitle || program}
              className="size-10 opacity-90"
            />
          </div>
          <div className="w-full">
            <div className="flex gap-2 text-sm font-medium uppercase text-stone-400">
              <span>{endDate}</span>
              <span className="material-symbols-sharp">arrow_right</span>
              <span>{startDate}</span>
            </div>
            <h3 className="text-pretty text-lg font-extrabold text-stone-300">
              {jobTitle || program}
            </h3>
            <div className="flex flex-col md:flex-row md:justify-between">
              <h4 className="text-sm font-light text-stone-400">
                {company || institution}
              </h4>
              <h5 className="text-sm font-light text-stone-400">{location}</h5>
            </div>
          </div>
        </div>
        <p className="text-pretty px-8 pt-4 text-sm font-light leading-relaxed text-stone-400">
          {details}
        </p>
      </div>
    );
  };

  const ResumeList = ({ list, type }: ResumeListProps) => {
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
              className="rounded-lg bg-gradient-to-tl from-stone-800 to-stone-950 to-80% p-2"
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

  const Download = () => {
    const { headerText, docText, pdfText, docHref, pdfHref } = download;

    return (
      <div className="mx-auto flex flex-col items-center justify-center border-b border-white/25 bg-gradient-to-t from-stone-900 to-10% px-4 pb-32 md:px-0">
        <ActionHeader header={headerText} />
        <div className="flex gap-8 md:gap-16">
          <ActionButton text={docText} icon="download" href={docHref} />
          <ActionButton text={pdfText} icon="download" href={pdfHref} />
        </div>
      </div>
    );
  };

  return (
    <section id="resume">
      <SectionHeader
        section="Resume"
        title="My Professional and Academic Journey"
      />
      <div className="container mx-auto flex flex-col gap-16 px-4 pb-64 md:flex-row md:px-0">
        <ResumeList list={experience} />
        <ResumeList list={education} type="education" />
      </div>
      <Download />
    </section>
  );
}
