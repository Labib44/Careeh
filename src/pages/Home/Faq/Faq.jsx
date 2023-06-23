import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const questions = [
    {
      question: "What is Careeh?",
      answer:
        "Careeh is a nationwide tech-based logistics company that provides comprehensive end-to-end services. Our offerings include efficient parcel deliveries tailored for SMEs, reliable document and parcel couriers for individuals, and customized enterprise logistics solutions for corporate companies.",
      id: 1,
    },
    {
      question: "What kind of services does Careeh offer?",
      answer:
        "Careeh is your ultimate platform for all-encompassing on-demand delivery and logistics services, catering to both business and personal requirements. Our diverse range of services includes Parcel Delivery, Courier, Trade pack, Shifting, Moving Store, Storage, Loading and Unloading assistance, Line Haul, comprehensive logistics services, and tailored solutions to meet your specific needs.",
      id: 2,
    },
    {
      question: "What is the coverage area of ​​Careeh Delivery?",
      answer:
        "Careeh offers delivery services to all 64 districts of Bangladesh. To view the complete list of Careeh delivery areas, please click the link. To book a delivery today, simply contact your nearest Careeh Hub.",
      id: 3,
    },
    {
      question: "Want to know about your delivery and logistics charges?",
      answer:
        "Our delivery charges are based on the parcel's weight. Inside Dhaka, the charges start from Tk 69 per kg, Tk.115 around Dhaka, and Tk.150 outside Dhaka. Additionally, there is a 1% cash on delivery charge for deliveries near and outside Dhaka. Please refer to our Home Delivery and Hub Delivery Price Chart for detailed personal parcel shipping charges. For enterprise logistics solutions, kindly get in touch with our sales team. For further information, you can call us at 09678844448. It's important to note that delivery charges may vary based on the weight and location of the parcel. Click on the link to know more about this and learn more about our price.",
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
