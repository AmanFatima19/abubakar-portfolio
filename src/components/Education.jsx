import React from "react";

const educationData = [
  {
    degree: "PhD (Islamic Studies)",
    institute: "UET Lahore",
    year: "In progress",
  },
  {
    degree: "MPhil (Islamic Studies)",
    institute: "International Islamic University, Islamabad",
    year: "2012",
  },
  {
    degree: "B.A (H) Islamic Studies",
    institute: "International Islamic University, Islamabad",
    year: "2009",
  },
  {
    degree: "M.A Arabic (Al-Alamia)",
    institute: "Wafaq Al-Madaris al-Arabia",
    year: "2005",
  },
  {
    degree: "Faazil-e-Arabic",
    institute: "Jamia Farooqia, Karachi",
    year: "2003",
  },
  {
    degree: "F.A (Al-Sanvia Al-Khassa)",
    institute: "Jamia",
    year: "2001",
  },
  {
    degree: "Matric (Al-Sanvia Al-Aama)",
    institute: "Jamia",
    year: "1999",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="pt-16 pb-10 bg-gradient-to-r from-white via-gray-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
          Education
        </h2>
        <div className="w-24 h-1 bg-emerald-700 mx-auto mb-12 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-3 border-[#F59E0B]"
            >
              <h3 className="text-xl font-semibold text-slate-800">
                {edu.degree}
              </h3>
              <p className="text-emerald-700 font-medium mt-1">
                {edu.institute}
              </p>
              <p className="text-sm text-slate-500 mt-2">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
