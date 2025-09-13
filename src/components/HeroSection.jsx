import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-gray-50 to-slate-100 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center">
          <img
            src="profile-img.jpeg"
            alt="Muhammad Abubakar"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-6xl md:text-5xl font-bold text-slate-800 ">
            Prof. Dr. Abubakar
          </h3>

          <p className="mt-4 text-lg md:text-2xl font-medium text-emerald-700">
            PhD Scholar (Islamic Studies)
          </p>

          <p className="mt-3 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            I am an academic and researcher with expertise in Islamic Studies,
            Arabic, and education. Currently pursuing a PhD at UET Lahore with
            extensive teaching experience across universities and colleges.
          </p>

          <div className="mt-8 flex flex-wrap md:justify-start justify-center gap-4">
            <a
              href="/CV M Abubakar f.pdf"
              download="Muhammad-Abubakar-CV.pdf"
              className="px-6 py-3 bg-emerald-800 text-white rounded-lg shadow-md hover:bg-emerald-600 hover:shadow-lg transition"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border-2 border-emerald-700 text-slate-800 rounded-lg shadow-md hover:text-white hover:bg-[#F59E0B] hover:border-1 hover:shadow-lg transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
