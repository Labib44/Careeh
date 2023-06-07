import FastConditionPayment from "../../../assets/courier/icons/FastConditionPayment";
import LiveTracking from "../../../assets/courier/icons/LiveTracking";
import NationwideHomeDelivery from "../../../assets/courier/icons/NationwideHomeDelivery";
import SmsUpdate from "../../../assets/courier/icons/SmsUpdate";

const Services = () => {
    const serviceData = [
        {
            id: 1,
            icon: <NationwideHomeDelivery />,
            title: "দেশজুড়ে হোম ডেলিভারি সেবা",
            dec: "যেখানেই থাকুন, কুরিয়ার পৌছে যাবে আপনার দোরগোড়ায়",
        },
        {
            id: 2,
            icon: <FastConditionPayment />,
            title: "কম সময়ে কন্ডিশন মূল্য পরিশোধ",
            dec: "ডেলিভারির পরদিনের মাঝে কন্ডিশন মূল্য পাবার নিশ্চয়তা",
        },
        {
            id: 3,
            icon: <LiveTracking />,
            title: "লাইভ ট্র্যাকিং",
            dec: "ঘরে বসেই দেখুন আপনার কুরিয়ারের বর্তমান অবস্থান",
        },
        {
            id: 4,
            icon: <SmsUpdate />,
            title: "এসএমএস আপডেট",
            dec: "ডেলিভারি এলাকায় কুরিয়ার পৌছালে পাবেন নিবন্ধিত মোবাইল নম্বরে এসএমএস আপডেট",
        },
    ];

    return (
        <section className="container mx-auto px-24 md:px-10 sm:px-5 pb-[70px] pt-[120px]">
            <div className="grid grid-cols-4 gap-3">
                {serviceData?.map((sd) => (
                    <div key={sd.id} className="flex items-center flex-col">
                        {sd.icon}
                        <div className="pt-6">
                            <h5 className="font-bold text-center pb-[10px] text-md text-black">
                                {sd.title}
                            </h5>
                            <p className="text-base text-center text-accent">
                                {sd.dec}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
