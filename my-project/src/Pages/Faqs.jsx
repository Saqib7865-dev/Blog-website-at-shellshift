import { useState } from "react";
import Layout from "../components/Layout";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.",
    },
    {
      question: "How does React work?",
      answer:
        "React creates a virtual DOM in memory, which represents the UI components. When state changes occur, React efficiently updates and re-renders only the necessary parts of the DOM.",
    },
    {
      question: "What are React components?",
      answer:
        "Components are independent, reusable pieces of code that serve as the building blocks of a React application. They can be either class-based or function-based.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto my-10 p-6 md:bg-gray-50 md:rounded shadow font-sans">
        <h2 className="text-center mb-8 text-xl sm:text-2xl md:text-3xl font-bold text-teal-500 tracking-wide">
          Frequently Asked Questions
        </h2>
        <div className="border-t border-gray-300">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`cursor-pointer p-5 border-b border-gray-300 rounded-md mb-4 transition-all duration-300 relative bg-white hover:bg-blue-50 hover:scale-[1.02] hover:shadow-md`}
              onClick={() => handleToggle(index)}
            >
              <div
                className={`text-base md:text-lg font-bold flex justify-between items-center md:py-2 transition-colors duration-300 ${
                  activeIndex === index ? "text-gray-800" : "text-cyan-600"
                }`}
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 text-base md:text-lg ${
                    activeIndex === index
                      ? "rotate-180 text-gray-800"
                      : "rotate-0 text-cyan-600"
                  }`}
                >
                  ▼
                </span>
              </div>
              <div
                className={`text-sm md:text-base text-gray-600 text-justify leading-relaxed overflow-hidden transition-all duration-400 md:px-5 ${
                  activeIndex === index
                    ? "max-h-40 opacity-100 py-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
