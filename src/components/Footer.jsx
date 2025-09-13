import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-emerald-500">Muhammad Abubakar</h3>
          <p className="text-sm text-slate-200">
            PhD Scholar | Lecturer | Researcher
          </p>
        </div>


        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-emerald-500">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-emerald-500">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-emerald-500">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-emerald-500">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-slate-200 border-t border-slate-500 pt-4">
        © <span className="text-emerald-500">{new Date().getFullYear()} </span>Muhammad Abubakar. <span></span>All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
