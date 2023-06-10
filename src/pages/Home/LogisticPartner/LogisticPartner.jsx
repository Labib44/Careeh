import fastDelivery from "../../../assets/home/logistic-partner/fastest-delivery.svg";
import dropPickupDelivery from "../../../assets/home/logistic-partner/doorstep-pickup-delivery.svg";
import smsUpdate from "../../../assets/home/logistic-partner/sms-update.svg";
import nextDayPayement from "../../../assets/home/logistic-partner/next-day-payment.svg";
import bestRates from "../../../assets/home/logistic-partner/best-cod-rates.svg";
import secureHandling from "../../../assets/home/logistic-partner/secure-handling.svg";

const LogisticPartner = () => {
  const logistics = [
    {
      title: "৩ দিনে ডেলিভারি গ্যারান্টিড",
      description:
        "মাত্র ৩ দিনে বাংলাদেশের যেকোনো প্রান্তে পার্সেল ডেলিভারির নিশ্চয়তা",
      icon: fastDelivery,
    },
    {
      title: "ডোরস্টেপ পিকআপ ও ডেলিভারি",
      description:
        "আপনার দরজা থেকে কাঙ্ক্ষিত গন্তব্যে পার্সেল পৌঁছে যাবে নির্বিঘ্নে",
      icon: dropPickupDelivery,
    },
    {
      title: "এসএমএস আপডেট",
      description:
        "পার্সেল বুকিং এবং ডেলিভারির সময় পাবেন আপনার নিবন্ধিত মোবাইল নম্বরে এসএমএস আপডেট",
      icon: smsUpdate,
    },
    {
      title: "পরের দিনই পেমেন্ট",
      description: "ডেলিভারি সম্পূর্ণ হলে পরের দিনই পেমেন্ট পেয়ে যাবেন",
      icon: nextDayPayement,
    },
    {
      title: "সেরা ক্যাশ অন ডেলিভারি রেট",
      description: "ঢাকার ভিতর ক্যাশ অন ডেলিভারি চার্জ ০%, ঢাকার বাইরে ১%",
      icon: bestRates,
    },
    {
      title: "সিকিউর হ্যান্ডলিং",
      description: "সর্বোচ্চ নিরাপদে শিপমেন্টের নিশ্চয়তা ও ক্ষতিপূরণ সুবিধা",
      icon: secureHandling,
    },
  ];
  return (
    <div>
      <h2 className="font-bold text-[40px] text-center my-12">
        আপনার লজিস্টিক পার্টনার হিসেবে REDX বেছে নিন
      </h2>
      <div className="grid grid-cols-3 justify-items-center gap-12 p-8">
        {logistics.map((element) => (
          <div
            className="flex flex-col items-center text-center"
            key={element.title}
          >
            <img className="" src={element.icon} alt="image" />
            <h2 className="font-bold text-2xl mt-8 mb-2">{element.title}</h2>
            <p className="text-base text-zinc-700">{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogisticPartner;
