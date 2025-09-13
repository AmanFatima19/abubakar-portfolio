import React from "react";

const skills = [
  {
    category: "Languages & Communication",
    items: ["Arabic", "Urdu", "English"],
  },
  {
    category: "Translation Skills",
    items: ["Urdu ↔ Arabic"],
  },
  {
    category: "Teamwork",
    items: ["Ability to take group tasks"],
  },
  {
    category: "Technical Skills",
    items: ["MS Word", "Al-Maktabah Al-Shamla"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-r from-white via-gray-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-6">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-emerald-700 mx-auto mb-12 rounded-full"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-t-3 border-[#F59E0B] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                {skill.category}
              </h3>

              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-slate-600 hover:text-emerald-700 transition-colors"
                  >
                    <span className="w-2 h-2 bg-emerald-700 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
