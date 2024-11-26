import React, { useEffect, useState } from "react";
import { userFAQs } from "../../mocks/data";
import Faq from "./Faq";

const Faqs = ({ faq }) => {
  const [faqs, setFaqs] = useState(null);
  const [showAnswer, setShowAnswer] = useState(null);

  useEffect(() => {
    if (faqs) return;
    setFaqs(userFAQs); // dummy for testing
  }, []);

  if (!faqs) return;

  return (
    <div className="py-4">
      <h2 className="text-xl font-bold mb-4">FAQ</h2>
      <div>
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
