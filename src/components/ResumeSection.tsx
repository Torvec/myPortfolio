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
    <div id="resume" className="min-h-screen space-y-10 px-10 py-96">
      {myResume.map((resume) => (
        <>
          {resume.type === "education" ? (
            <div className="flex justify-end">
              <div className="w-1/2 border-2 p-10">
                <div>
                  {convertDateFormat(resume.startDate)} -{" "}
                  {convertDateFormat(resume.endDate)}
                </div>
                <div>{resume.institution}</div>
                <div>{resume.program}</div>
                <div>{resume.location}</div>
                <ul className="p-5 space-y-5">
                  {resume.details.map((detailItem) => (
                    <li>{detailItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="w-1/2 border-2 p-10">
              <div>
                {convertDateFormat(resume.startDate)} -{" "}
                {convertDateFormat(resume.endDate)}
              </div>
              <div>{resume.company}</div>
              <div>{resume.title}</div>
              <div>{resume.location}</div>
              <ul className="p-5 space-y-5">
                {resume.details.map((detailItem) => (
                  <li>{detailItem}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      ))}
    </div>
  );
}
