import React, { useState, useRef, useEffect } from "react";

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Recalculate content height when the accordion is opened/closed
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="rounded-xl border-2 border-gray-300 mb-2">
      <button
        className="cursor-pointer w-full bg-white p-4 flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span>{question}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: contentHeight, // Dynamically adjust the height
        }}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "border-t" : ""
        }`}
      >
        <div className="p-4 bg-white">
          <p className="text-gray-700">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
