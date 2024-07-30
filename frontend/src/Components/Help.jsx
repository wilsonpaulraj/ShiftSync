// src/components/HelpMore.jsx
import React from "react";

const HelpMore = () => {
  const faqs = [
    {
      question: "How to add a new employee?",
      answer: "Go to the Employee Management page and click on Add Employee.",
    },
    {
      question: "How to create a shift?",
      answer: "Go to the Shift Management page and click on Add Shift.",
    },
  ];

  return (
    <div className="w-full p-20">
      <div className="flex w-full justify-between pb-10">
        <h1 className="text-2xl font-semibold text-dark-text">Help & More</h1>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex w-full justify-between border-b-2 border-slate-800 p-5"
          >
            <span className="w-1/2 font-bold">{faq.question}</span>
            <span className="w-1/2">{faq.answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpMore;
