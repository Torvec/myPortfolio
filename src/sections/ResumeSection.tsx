import SectionHeader from "../components/SectionHeader";
import ActionButton from "../components/ActionButton";
import ActionHeader from "../components/ActionHeader";
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
      <div className="rounded-lg bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-stone-900/50 to-stone-950 to-50% px-8 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="grid size-12 flex-shrink-0 place-content-center rounded-full bg-[radial-gradient(circle_at_center_center,_var(--tw-gradient-stops))] from-stone-800 from-20% via-stone-900 via-90% to-stone-950 md:size-20">
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
        <p className="text-pretty pt-4 text-sm font-light leading-relaxed text-stone-400">
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
              className="rounded-lg bg-gradient-to-b from-stone-800 to-stone-950 to-80% p-2"
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
      <div className="mx-auto flex flex-col items-center justify-center border-b border-stone-900 px-4 pb-32 md:px-0">
        <ActionHeader header={headerText} />
        <div className="flex flex-col gap-4 md:flex-row md:gap-16">
          <ActionButton text={docText} icon="download" href={docHref} />
          <ActionButton text={pdfText} icon="download" href={pdfHref} />
        </div>
        <p className="p-8 text-sm text-stone-400">Last Updated: N/A</p>
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
