"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ faqData }: { faqData: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-10 space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 bg-black border-2 border-amber-600 rounded-xl font-semibold flex justify-between items-center"
          >
            <span>{item.question}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-40 px-4" : "max-h-0 px-4"
            }`}
          >
            <p className="py-3 text-gray-300">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
