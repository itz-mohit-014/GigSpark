import React, { useState } from "react";
import Faq from "./Faq";

const Faqs = ({ data, heading, className="", layoutClass="" }) => {
  const [faqs, setFaqs] = useState(data);
  const [showAnswer, setShowAnswer] = useState(null);

  if (!faqs.length) return;

  return (
    <div className={`py-4 ${className}`}>
      {heading && <h2 className="text-xl font-bold mb-4">{heading}</h2>}
      <div className={layoutClass}>
        {faqs.map((faq, index) => (
          <Faq
            key={index}
            faq={faq}
            showAnswer={index === showAnswer ? true : false}
            setShowAnswer={() =>
              setShowAnswer(showAnswer === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
