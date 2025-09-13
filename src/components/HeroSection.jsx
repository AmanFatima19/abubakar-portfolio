import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-24 md:pt-42 px-6 bg-gradient-to-r from-white via-gray-50 to-slate-100"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 flex justify-center">
          <img
            src="profile-img.jpeg"
            alt="Muhammad Abubakar"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-bold text-slate-800">
            Prof. Dr. Abubakar
          </h3>

          <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-emerald-700">
            PhD Scholar (Islamic Studies)
          </p>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            I am an academic and researcher with expertise in Islamic Studies,
            Arabic, and education. Currently pursuing a PhD at UET Lahore with
            extensive teaching experience across universities and colleges.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/CV M Abubakar f.pdf"
              download="Muhammad-Abubakar-CV.pdf"
              className="px-5 sm:px-6 py-2 sm:py-3 bg-emerald-800 text-white rounded-lg shadow-md hover:bg-emerald-600 hover:shadow-lg transition text-sm sm:text-base"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-5 sm:px-6 py-2 sm:py-3 border-2 border-emerald-700 text-slate-800 rounded-lg shadow-md hover:text-white hover:bg-[#F59E0B] hover:shadow-lg transition text-sm sm:text-base"
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
