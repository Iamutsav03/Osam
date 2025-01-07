import React, { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Vaporwave?",
      answer:
        "Vaporwave is an internet-driven aesthetic and musical genre that combines 80s/90s nostalgia with futuristic, surreal imagery.",
    },
    {
      question: "How can I implement Vaporwave in design?",
      answer:
        "Incorporate neon colors, pastel gradients, retro typography, and surreal graphics. Think of an 80s arcade combined with a futuristic dream.",
    },
    {
      question: "What are common Vaporwave colors?",
      answer:
        "Vaporwave design often uses pastel pinks, purples, blues, along with neon accents like cyan and magenta. It's a mix of retro and futuristic vibes.",
    },
    {
      question: "Can I use Vaporwave for business designs?",
      answer:
        "Vaporwave can be used for creative, artistic, or niche marketing campaigns, but be mindful of your audience. It works best in a fun, youthful context.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F4F7FB] to-[#E5ECF0] p-8 text-gray-900">
      <h2 className="text-4xl font-semibold text-center text-[#4C6F9A] mb-8">
        FAQ Section
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div
              className="faq-header flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-xl font-semibold text-[#3B4D6B]">{faq.question}</h3>
              <span
                className={`text-2xl font-semibold transition-transform duration-300 transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-base text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
