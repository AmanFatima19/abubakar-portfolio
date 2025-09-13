import React from "react";

const researchPapers = [
  {
    title:
      "The ideal marriage and its relation to quality education of children",
    details:
      "Published in Al-Zia, Faisalabad (06-2011) – مثالی ازواجی زندگی اور اولاد کی صحیح تربیت میں اس کا کردار",
  },
  {
    title: "General provisions concerning the newborn",
    details:
      "Published in Al-Zia, Faisalabad (07-2011) – شیر خوار بچوں کے متعلق احکامات",
  },
  {
    title:
      "Causes of deviation in children and its treatment",
    details:
      "Published in Al-Zia, Faisalabad (08-2012) – بچوں میں بگاڑ کے اسباب اور اس کا علاج",
  },
];

const Research = () => {
  return (
    <section
      id="research"
      className="pb-10 pt-20 bg-gradient-to-r from-white via-gray-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
          Research Papers
        </h2>
               <div className="w-24 h-1 bg-emerald-700 mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-emerald-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-yellow-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {paper.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{paper.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
