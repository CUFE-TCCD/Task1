import React from "react";
import withNavbar from "../../components/HOC/withNavbar";
import FAQAccordion from "./FAQAccordion";

const FAQs = () => {
  const faqData = [
    {
      question: "Q1",
      answer: "Answer1",
    },
    {
      question: "Q2",
      answer: "Answer2",
    },
    {
      question: "Q3",
      answer: "Answer3",
    },
  ];
  return (
    <div className="p-6">
      {faqData.map((faq, index) => (
        <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default withNavbar(FAQs);
