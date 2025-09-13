import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-white via-gray-50 to-slate-100"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-emerald-700 mx-auto mb-14 rounded-full"></div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 outline-none transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 outline-none transition"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 outline-none transition"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
