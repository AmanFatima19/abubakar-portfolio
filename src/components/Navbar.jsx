import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (href) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Experience", href: "#experience" },
    { name: "Lectures", href: "#lectures" },
    { name: "Books", href: "#books" },
    { name: "Research", href: "#research" },
       { name: "Consultancy", href: "#consultancy" },

  ];

  return (
    <nav className="fixed w-full bg-slate-800 shadow-lg z-50 backdrop-blur-sm transition-colors duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-emerald-600" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}>
          Muhammad Abubakar
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-emerald-400 transition-transform duration-300 transform hover:scale-110 relative group"
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl hover:text-emerald-400 transition-transform duration-300 transform hover:scale-110"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-emerald-500 shadow-xl animate-slide-down transition-all duration-500 ease-in-out">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white hover:text-emerald-400 transition-transform duration-300 transform hover:scale-105"
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); setIsOpen(false); }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
