import React from "react";

const experienceData = [
  {
    position: "Lecturer",
    institute: "Punjab Group of Colleges, Lahore",
    duration: "Nov 2021 – Present",
  },
  {
    position: "Visiting Lecturer",
    institute: "Govt. College of Science, Lahore",
    duration: "Nov 2020 – Present",
  },
  {
    position: "College Teaching Intern",
    institute: "Govt. Kh. Rafique Shaheed College, Lahore",
    duration: "Nov 2019 – Apr 2020",
  },
  {
    position: "Visiting Lecturer",
    institute: "Govt. College of Science, Lahore",
    duration: "Nov 2019 – Apr 2020",
  },
  {
    position: "College Teaching Intern",
    institute: "Govt. College of Science, Lahore",
    duration: "Nov 2018 – Oct 2019",
  },
  {
    position: "Visiting Lecturer (BS-17)",
    institute: "COMSATS University Islamabad, Sahiwal Campus",
    duration: "Sep 2017 – Feb 2018",
  },
  {
    position: "Visiting Lecturer",
    institute: "University of Sargodha, Faisalabad",
    duration: "Oct 2015 – Jun 2016",
  },
  {
    position: "College Teaching Intern",
    institute: "Govt. PG College Samundari",
    duration: "Sep 2014 – Jun 2015",
  },
  {
    position: "Lecturer",
    institute: "Haroon College, Samundari",
    duration: "Nov 2010 – Jun 2014",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="pb-20 pt-16 bg-gradient-to-r from-white via-gray-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-emerald-700 mx-auto mb-12 rounded-full"></div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-emerald-700 hidden md:block"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center md:w-full ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <span className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-700 rounded-full hidden md:block"></span>

                <div
                  className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition w-full md:w-[45%] border-t-2 border-[#F59E0B] ${
                    index % 2 === 0
                      ? "md:mr-auto md:text-right"
                      : "md:ml-auto md:text-left"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-slate-800">
                    {exp.position}
                  </h3>
                  <p className="text-emerald-700 font-medium">{exp.institute}</p>
                  <p className="text-sm text-slate-500 mt-1">{exp.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
