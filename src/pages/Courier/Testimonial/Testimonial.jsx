import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      comment: "খুব দ্রুত ডেলিভারি হয়েছে, আমি সার্ভিস নিয়ে সন্তুষ্ট।",
      name: "আনিকা জাহিন",
    },
    {
      id: 2,
      comment: "আমার বন্ধুর জন্মদিনের গিফট ঢাকা থেকে খুলনায় সময়মত পৌঁছে গেছে।",
      name: "ফাহিম হক",
    },
    {
      id: 3,
      comment:
        "আমি কিছু জরুরী ডকুমেন্টস পাঠিয়েছিলাম, সেগুলি সময়মত ভালো কন্ডিশনে ডেলিভারি হয়েছে।",
      name: "ইশরাক হোসাইন",
    },
  ];

  return (
    <section className="pb-[110px] md:pb-[90px] sm:pb-[56]">
      <div className="container mx-auto px-24 md:px-10 sm:px-5">
        <div className="mb-8">
          <h2 className="text-[40px] sm:text-[28px] font-bold text-center">
            Hear from our customers
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {testimonialData?.map((td) => (
              <div
                key={td.id}
                className="flex flex-col items-center min-h-[200px] justify-evenly bg-[#f5f5f5] p-5 rounded-md sm:mb-3"
              >
                <div className="mb-6">
                  <FaQuoteLeft className="text-primary text-4xl" />
                </div>
                <div className="text-center">
                  <p className="pb-6 text-sm">{td.comment}</p>
                  <p className="text-base font-bold">{td.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
