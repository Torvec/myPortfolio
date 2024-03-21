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
      <h1 className="py-96 text-center text-5xl font-bold uppercase">
        My Resume
      </h1>
      {myResume.map((resume) => (
        <>
          {resume.type === "education" ? (
            <div className="flex justify-end">
              <div className="md:w-1/2 md:p-10">
                <div>
                  {convertDateFormat(resume.startDate)} -{" "}
                  {convertDateFormat(resume.endDate)}
                </div>
                <div>{resume.institution}</div>
                <div>{resume.program}</div>
                <div>{resume.location}</div>
                <ul className="space-y-5 p-5">
                  {resume.details.map((detailItem) => (
                    <li>{detailItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="md:w-1/2 md:p-10">
              <div>
                {convertDateFormat(resume.startDate)} -{" "}
                {convertDateFormat(resume.endDate)}
              </div>
              <div>{resume.company}</div>
              <div>{resume.title}</div>
              <div>{resume.location}</div>
              <ul className="space-y-5 p-5">
                {resume.details.map((detailItem) => (
                  <li>{detailItem}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      ))}
    </section>
  );
}
