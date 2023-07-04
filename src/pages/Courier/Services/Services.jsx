import FastConditionPayment from "../../../assets/courier/icons/FastConditionPayment";
import LiveTracking from "../../../assets/courier/icons/LiveTracking";
import NationwideHomeDelivery from "../../../assets/courier/icons/NationwideHomeDelivery";
import SmsUpdate from "../../../assets/courier/icons/SmsUpdate";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      icon: <NationwideHomeDelivery />,
      title: "Reduce operational costs",
      dec: "Get rid of the necessity to maintain your own delivery fleet. Outsource your deliveries and just pay for the services you require.",
    },
    {
      id: 2,
      icon: <FastConditionPayment />,
      title: "Fast & flexible delivery",
      dec: "Whether it's on-demand, same-day, or advanced orders, we offer a fast and flexible service that aligns with your needs.",
    },
    {
      id: 3,
      icon: <LiveTracking />,
      title: "Vast array of vehicles",
      dec: "Our extensive fleet includes trucks, vans, motorcycles, and walkers, catering to businesses of all types and enabling deliveries of any size.",
    },
    {
      id: 4,
      icon: <SmsUpdate />,
      title: "Real-time tracking",
      dec: "Stay updated with real-time tracking through our user-friendly app, allowing both you and the recipient to monitor the delivery progress seamlessly.",
    },
  ];

  return (
    <section className="container mx-auto md:px-10 sm:px-5 pb-[70px] pt-[120px] md:pt-[90px] sm:pt-[56px] sm:pb-[56]">
      <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {serviceData?.map((sd) => (
          <div key={sd.id} className="flex items-left flex-col mb-8">
            {sd.icon}
            <div className="pt-6">
              <h5 className="font-bold pb-[10px] text-md text-black">
                {sd.title}
              </h5>
              <p className="text-base text-accent text-justify">{sd.dec}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
