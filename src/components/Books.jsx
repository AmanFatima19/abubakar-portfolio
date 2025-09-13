import React, { useState } from "react";

const booksData = {
  Urdu: [
    "علومِ حدیث کا انسائیکلوپیڈیا (Published, Dar al-Seerah Publishers, Lahore)",
    "فہمِ قرآن و حدیث کے اصول و ضوابط (Published)",
    "تدوینِ حدیث ﷺ (Unpublished)",
    "اصطلاحات حدیث ﷺ (Unpublished)",
    "علم روایت حدیث ﷺ (Unpublished)",
    "کتب احادیث کا مختصر تعارف (Unpublished)",
    "اصول تحقیق و تخریجِ حدیث (Unpublished)",
    "معلم انسانیت ﷺ اور مقاصدِ تعلیم (Unpublished)",
    "امام غزالی کی دینی خدمات اور احیاء علوم الدین کے مضامین کا مختصر جائزہ (Unpublished)",
    "علمِ تفسیر اور تعمیرِ انسانیت (Unpublished)",
    "سورۃ النباء کی لغوی وادبی تفہیم (Unpublished)",
  ],
  English: [
    "An Introduction to Al-Quran (Unpublished)",
    "An Introduction to Al-Sunnah (Unpublished)",
    "An Introduction to Usool al-Fiqh (Unpublished)",
    "Relationship between Islamic Faith and Knowledge (Unpublished)",
  ],
  Arabic: [
    "الشیخ ابوالکلام آزاد، اوراق مقتبسۃ من حیاتہ (Unpublished)",
    "الدین والتعدد الدینی عند الشیخ ابی الکلام آزاد (Unpublished)",
    "نشأة عقيدة الألوهية وارتقائها لدى علماء الغرب فی القرن التاسع عشر... (Unpublished)",
    "الألوهية وصفات الله تعالى فی الأديان والفلسفات الكبرى کما وصفھا الشیخ أبو الکلام آزاد (Unpublished)",
    "دراسة العقائد الدينيّة عند الشیخ أبي الكلام آزاد (Unpublished)",
  ],
};

const Books = () => {
  const [activeTab, setActiveTab] = useState("Urdu");

  const highlightStatus = (text) => {
    return text
      .replace(
        /(Published)/g,
        '<span class="text-emerald-700 font-semibold">$1</span>'
      )
      .replace(
        /(Unpublished)/g,
        '<span class="text-emerald-700 font-semibold">$1</span>'
      );
  };

  return (
    <section
      className="py-20 bg-gradient-to-r from-white via-gray-50 to-slate-100"
      id="books"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
          Books
        </h2>
        <div className="w-24 h-1 bg-emerald-700 mx-auto mb-10 rounded-full"></div>

        <div className="flex justify-center mt-6 flex-wrap gap-4">
          {Object.keys(booksData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-800 border border-emerald-700 hover:bg-emerald-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {booksData[activeTab].map((book, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-2 border-yellow-500"
            >
              <p
                className="text-slate-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: highlightStatus(book) }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
