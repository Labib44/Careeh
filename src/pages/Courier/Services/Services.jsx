import FastConditionPayment from "../../../assets/courier/icons/FastConditionPayment";
import LiveTracking from "../../../assets/courier/icons/LiveTracking";
import NationwideHomeDelivery from "../../../assets/courier/icons/NationwideHomeDelivery";
import SmsUpdate from "../../../assets/courier/icons/SmsUpdate";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      icon: <NationwideHomeDelivery />,
      title: "Nationwide home delivery",
      dec: "Get your product delivered to your doorstep - no matter where you reside in Bangladesh.",
    },
    {
      id: 2,
      icon: <FastConditionPayment />,
      title: "Fast Condition Payment",
      dec: "Get your condition money within the next day of the product delivery.",
    },
    {
      id: 3,
      icon: <LiveTracking />,
      title: "Live tracking",
      dec: "Check the real-time location and the status of your courier in the comfort of your home.",
    },
    {
      id: 4,
      icon: <SmsUpdate />,
      title: "SMS update",
      dec: "You will be notified when the product will reach to your nearby office.",
    },
  ];

  return (
    <section className="container mx-auto px-24 md:px-10 sm:px-5 pb-[70px] pt-[120px] md:pt-[90px] sm:pt-[56px] sm:pb-[56]">
      <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 ">
        {serviceData?.map((sd) => (
          <div key={sd.id} className="flex items-center flex-col mb-8">
            {sd.icon}
            <div className="pt-6">
              <h5 className="font-bold text-center pb-[10px] text-md text-black">
                {sd.title}
              </h5>
              <p className="text-base text-center text-accent">{sd.dec}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
