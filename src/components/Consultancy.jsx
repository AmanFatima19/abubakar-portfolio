import React from "react";
import {
  FaBuilding,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Consultancy = () => {
  return (
    <section
      id="consultancy"
      className="py-20 bg-gradient-to-r from-white via-gray-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
          Shariah Consultancy
        </h2>
                <div className="w-24 h-1 bg-emerald-700 mx-auto mb-12 rounded-full"></div>

       

        <div className="mt-10 bg-white shadow-lg rounded-2xl p-10 hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-slate-800 flex items-center gap-3">
                <FaBuilding className="text-[#F59E0B] text-3xl" />
                LEXUM Attorneys
              </h3>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                Providing expert Shariah consultancy services in Islamic Law &
                Finance with professional legal advisory.
              </p>
              <a
                href="http://www.lexumattorneys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 font-semibold mt-5 hover:underline text-lg"
              >
                <FaGlobe className="text-xl " /> www.lexumattorneys.com
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex-1 space-y-4 text-slate-700 text-lg">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-emerald-700 text-xl" /> 475-G,
                Johar Town, Lahore
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-emerald-700 text-xl" /> +92 332
                6959592
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-emerald-700 text-xl" /> +92 301
                6016124
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-700 text-xl" />{" "}
                binbakar84@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultancy;
