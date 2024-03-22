import resumeData from "../data/resumeData.json";

export default function ResumeSection() {
  function convertDateFormat(dateString: string) {
    if (dateString === "Present") {
      return "Present";
    }
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    return `${month} ${year}`;
  }

  const myResume = resumeData.resume;

  return (
    <section id="resume" className="min-h-screen space-y-10 p-20">
      <h2 className="min-h-screen grid place-content-center text-center text-5xl font-bold uppercase">
        My Resume
      </h2>
      <>
      {myResume.map((resume) => (
          resume.type === "education" ? (
            <div key={resume.id} className="flex justify-end">
              <div className="md:w-1/2 md:p-10">
                <div>
                  {convertDateFormat(resume.startDate)} -{" "}
                  {convertDateFormat(resume.endDate)}
                </div>
                <div>{resume.institution}</div>
                <div>{resume.program}</div>
                <div>{resume.location}</div>
                <ul className="space-y-5 p-5">
                  {resume.details.map((detailItem, index) => (
                    <li key={index}>{detailItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div key={resume.id} className="md:w-1/2 md:p-10">
              <div>
                {convertDateFormat(resume.startDate)} -{" "}
                {convertDateFormat(resume.endDate)}
              </div>
              <div>{resume.company}</div>
              <div>{resume.title}</div>
              <div>{resume.location}</div>
              <ul className="space-y-5 p-5">
                {resume.details.map((detailItem, index) => (
                  <li key={index}>{detailItem}</li>
                ))}
              </ul>
            </div>
          )
      ))}
      </>
      <div className="min-h-screen grid place-content-center">
        <h3 className="uppercase text-4xl font-bold">Skills</h3>
      </div>
    </section>
  );
}
