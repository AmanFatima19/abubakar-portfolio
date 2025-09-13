import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-white via-gray-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
          Contact Me
        </h2>
                <div className="w-24 h-1 bg-emerald-700 mx-auto mb-14 rounded-full"></div>


        {/* Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="space-y-8 text-slate-700 text-lg">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-emerald-700 text-2xl" />
              128-L, Model Town Ext., Lahore, Pakistan
            </p>
            <p className="flex items-center gap-4">
              <FaPhoneAlt className="text-emerald-700 text-2xl" />
              +92 332 6959592
            </p>
            <p className="flex items-center gap-4">
              <FaPhoneAlt className="text-emerald-700 text-2xl" />
              +92 301 6016124
            </p>
            <p className="flex items-center gap-4">
              <FaEnvelope className="text-emerald-700 text-2xl" />
              binbakar84@gmail.com
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6 ">
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
      </div>
    </section>
  );
};

export default Contact;
