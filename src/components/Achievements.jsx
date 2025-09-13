import React from "react";
import { FaTrophy, FaPlane } from "react-icons/fa";

const achievements = [
  {
    title: "1st Position",
    details: "Final Examination of M.A Arabic (Al-Alamia)",
    year: "2005",
    icon: <FaTrophy className="text-yellow-500 text-4xl" />,
  },
  {
    title: "1st Position",
    details: "Quiz Competition in Dawa Academy, IIUI",
    year: "2006",
    icon: <FaTrophy className="text-yellow-500 text-4xl" />,
  },
  {
    title: "3rd Position",
    details: "Speech Contest, International Islamic University Islamabad",
    year: "2007",
    icon: <FaTrophy className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Foreign Trip",
    details: "Umrah & Visit of University of Al-Madina, Saudi Arabia",
    year: "2008",
    icon: <FaPlane className="text-emerald-700 text-4xl" />,
  },
];

const Achievements = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="achievements"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Achievements
        </h2>
        <div className="w-24 h-1 bg-emerald-700 mx-auto mb-12 rounded-full"></div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-2">{item.details}</p>
              <p className="text-sm text-teal-600 font-medium">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
