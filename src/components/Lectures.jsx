import React, { useState } from "react";

const lecturesData = {
  "MA Programs": [
    { title: "Political Ideology of Islam" },
    { title: "Islam and Science" },
    { title: "Dawah & Irshad" },
    { title: "Arabic Language & Literature" },
  ],
  "BS Programs": [
    { title: "Relationship between Islamic faith and knowledge" },
    { title: "Introduction to the Quranic Sciences" },
    { title: "Introduction to Al-Sunnah" },
    { title: "Introduction to Usool al-Fiqh" },
    { title: "Al-Seerah Al-Nabwia (SAW)" },
    { title: "Arabic Language & Literature (various topics)" },
  ],
  "Intermediate & Bachelors": [
    { title: "Islamic Studies – BA/B.Com (Govt. Kh. Rafique Shaheed College)" },
    { title: "Islamic Studies – FA/FSc (Govt. PG College Samundari)" },
    { title: "Islamic Studies – FA/FSc/I.Com (Haroon College Samundari)" },
  ],
  "YouTube Lectures": [
    {
      title: "Takreem Foundation – Seerah Program",
      link: "https://youtube.com/@takreemfoundation9331?si=-NLi-UCPXEqsRfcH", // channel link
      videos: [
        {
          title: "Lecture 1: Seerah Intro",
          link: "https://www.youtube.com/watch?v=xxxx1",
        },
        {
          title: "Lecture 2: Seerah Deep Dive",
          link: "https://www.youtube.com/watch?v=xxxx2",
        },
      ],
    },
    {
      title: "Tim News Channel – Quran Program",
      link: "https://www.youtube.com/@TakreemFoundation", // channel link
      videos: [
        {
          title: "Quran Program Lecture 1",
          link: "https://www.youtube.com/watch?v=xxxx3",
        },
        {
          title: "Quran Program Lecture 2",
          link: "https://www.youtube.com/watch?v=xxxx4",
        },
      ],
    },
    {
      title:
        "Tim News Channel – Sources of Seerah (Bukhari, Muslim, Tirmidhi, etc.)",
      link: "https://www.youtube.com/@TimNewsChannel", // channel link
      videos: [
        {
          title: "Sources of Seerah Part 1",
          link: "https://www.youtube.com/watch?v=xxxx5",
        },
        {
          title: "Sources of Seerah Part 2",
          link: "https://www.youtube.com/watch?v=xxxx6",
        },
      ],
    },
  ],
};

const Lectures = () => {
  const [active, setActive] = useState(null);

  const toggle = (section) => {
    setActive(active === section ? null : section);
  };

  return (
    <section
      id="lectures"
      className="pb-10 pt-16 bg-gradient-to-r from-white via-gray-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
          Lectures
        </h2>
        <div className="w-24 h-1 bg-emerald-700 mx-auto mb-12 rounded-full"></div>

        <div className="space-y-6">
          {Object.keys(lecturesData).map((section, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl shadow-md hover:shadow-lg transition bg-white"
            >
              <button
                onClick={() => toggle(section)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-slate-800"
              >
                <span>{section}</span>
                <span className="text-emerald-700 text-2xl font-bold">
                  {active === section ? "−" : "+"}
                </span>
              </button>

              {active === section && (
                <div className="px-6 pb-4">
                  <ul className="list-disc pl-6 mt-2 text-slate-600 space-y-2">
                    {lecturesData[section].map((lecture, i) => (
                      <li key={i}>
                        {lecture.link ? (
                          <a
                            href={lecture.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-700 hover:text-yellow-500 font-medium transition"
                          >
                            {lecture.title}
                          </a>
                        ) : (
                          <span>{lecture.title}</span>
                        )}

                        {lecture.videos && (
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            {lecture.videos.map((video, j) => (
                              <li key={j}>
                                <a
                                  href={video.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-slate-600 hover:text-emerald-700 transition"
                                >
                                  {video.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lectures;
