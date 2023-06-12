import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const questions = [
    {
      question: "রেডএক্স কি?",
      answer:
        "রেডএক্স একটি প্রযুক্তিনির্ভর লজিস্টিকস কোম্পানি যা দেশজুড়ে এসএমই প্রোডাক্ট ডেলিভারি সেবা থেকে শুরু করে ব্যাক্তিগত ডকুমেন্ট, পার্সেল ডেলিভারি, এবং বড় কর্পোরেট কোম্পানিগুলোকে ইন্ডাস্ট্রিয়াল লজিস্টিকস সেবা প্রদান করে থাকে।",
      id: 1,
    },
    {
      question: "রেডএক্স কি কি ধরনের সেবা দিয়ে থাকে?",
      answer:
        "যে কোন ব্যবসা বা ব্যক্তিগত প্রয়োজনে ডেলিভারি সংক্রান্ত সেবা প্রদানের একটি পূর্ণাঙ্গ প্ল্যাটফর্ম রেডএক্স। পার্সেল ডেলিভারি, বাল্ক শিপমেন্ট, লাইন হল, ট্রাক ভাড়া, লোডিং-আনলোডিং, ওয়্যারহাউজ, সার্ভিস হিসেবে লজিস্টিকস সল্যুশন এবং প্রয়োজন অনুযায়ী কাস্টমাইজড সল্যুশনও দিয়ে থাকে রেডএক্স।",
      id: 2,
    },
    {
      question: "রেডএক্স ডেলিভারির কভারেজ এরিয়া কি?",
      answer:
        "রেডএক্স বাংলাদেশের ৬৪ টি জেলায় ডেলিভারি করে। আমাদের ডেলিভারি এরিয়া জানতে লিঙ্কে ক্লিক করুন https://redx.com.bd/coverage-area আপনার নিকটস্থ রেডএক্স হাবে যোগাযোগ করে আজই ডেলিভারি বুক করুন। রেডএক্স হাবের সম্পূর্ণ লিস্ট দেখতে এখানে ক্লিক করুন",
      id: 3,
    },
    {
      question: "আপনাদের লজিস্টিকস চার্জ সম্পর্কে জানতে চাই?",
      answer:
        "মার্চেন্টদের পার্সেল ডেলিভারিতে আমরা প্রতি কেজি অনুযায়ী চার্জ করে থাকি l ঢাকার ভেতরে প্রতি কেজি ৬৯ টাকা, ঢাকার আশেপাশে ১১৫ এবং ঢাকার বাইরে ১৫০ টাকা থেকে চার্জ শুরু হয়। ঢাকার আশেপাশে এবং বাইরে প্রতি ডেলিভারিতে ১% ক্যাশ অন ডেলিভারি চার্জ প্রযোজ্য। প্রতিটি চার্জের সাথে ভ্যাট সংযুক্ত। ব্যক্তিগত পার্সেল পাঠানোর চার্জ সম্পর্কে জানতে আমাদের হোম ডেলিভারি এবং হাব ডেলিভারির প্রাইস চার্টটি দেখুন। এন্টারপ্রাইজ লজিস্টিকসের জন্য আমাদের দক্ষ সেলস টিম রয়েছে। ০৯৬১০০০৭৩৩৯ নাম্বারে কল দিয়ে এ সংক্রান্ত সকল তথ্য পাবেন।অনুগ্রহপূর্বক মনে রাখবেন ওজন এবং অবস্থানের ভিত্তিতে ডেলিভারি চার্জ পরিবর্তন হতে পারে l এ বিষয়ে আরও বিস্তারিত জানতে লিঙ্কে ক্লিক করুন এবং আমাদের প্রাইস সম্পর্কে আরো বিস্তারিত জানুন l",
      id: 4,
    },
  ];

  const handleOpen = (id) => {
    setIsOpen((previous) => !previous && !isOpen);
    setId(id);
  };

  return (
    <div className="w-[55%] sm:w-full mx-auto text-center my-[80px] static sm:container sm:mx-auto">
      <h2 className="font-bold text-[40px]">আপনার সকল জিজ্ঞাসা</h2>
      <p className="mb-10 mt-4">
        সর্বাধিক জিজ্ঞাসিত প্রশ্নগুলি দেখুন, যেকোনো প্রয়োজনে আমরা আপনার পাশে আছি
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
