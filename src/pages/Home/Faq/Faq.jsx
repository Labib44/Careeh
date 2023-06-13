import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const questions = [
    {
      question: "What is REDX?",
      answer:
        "REDX is a tech-based logistics company operating nationwide and offering end-to-end services like parcel deliveries for SMEs, documents and parcel couriers for individuals and enterprise logistics solutions for corporate companies",
      id: 1,
    },
    {
      question: "What kind of services does REDX offer?",
      answer:
        "REDX is a complete platform for end-to-end delivery and logistics services for any business or personal needs. The services include parcel delivery, bulk shipment, line hall, truck rental, loading-unloading, warehouse, logistics services and customized solutions as required.",
      id: 2,
    },
    {
      question: "What is the coverage area of ​​REDX Delivery?",
      answer:
        "REDX delivers to all 64 districts of Bangladesh. Click the link to see the full list of REDX delivery areas. Contact your nearest REDX Hub to book delivery today. Click here to see the full list of REDX Hubs.",
      id: 3,
    },
    {
      question: "Want to know about your delivery and logistics charges?",
      answer:
        "Our delivery charge is designed according to the weight of the parcel. Charges start from Tk 69 per kg inside Dhaka, Tk 115 around Dhaka and Tk 150 outside Dhaka. 1% cash on delivery charge is applicable for every delivery near and outside Dhaka.See our Home Delivery and Hub Delivery Price Chart for personal parcel shipping charges. For enterprise logistics, contact our sales team. You can also call at 0910006339 for more information.Please note that delivery charges may vary depending on weight and location. Click on the link to know more about this and learn more about our price",
      id: 4,
    },
  ];

  const handleOpen = (id) => {
    setIsOpen((previous) => !previous && !isOpen);
    setId(id);
  };

  return (
    <div className="w-[55%] sm:w-full mx-auto text-center my-[80px] static sm:container sm:mx-auto">
      <h2 className="font-bold text-[40px]">
        Still have questions? We have answers!
      </h2>
      <p className="mb-10 mt-4">
        Take a look at the most commonly asked questions. We are here to help.
      </p>
      <div>
        {questions.map((question) => (
          <div className="border-b" key={question.question}>
            <div
              onClick={() => handleOpen(question.id)}
              className="flex items-center gap-3 cursor-pointer transition-all duration-75"
            >
              {isOpen && question.id === id ? (
                <FaMinus className="w-7 h-7 p-2 rounded-full text-slate-100 bg-primary my-4" />
              ) : (
                <FaPlus className="w-7 h-7 p-2 rounded-full text-slate-100 bg-primary my-4" />
              )}
              <h3 className="font-bold">{question.question}</h3>
            </div>
            <div
              className={`${isOpen && question.id === id ? "block" : "hidden"}`}
            >
              <p className="text-justify pb-5">{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
