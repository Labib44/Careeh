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
      dec: "No need to manage your own delivery fleet. Outsource and simply pay for the deliveries you need.",
    },
    {
      id: 2,
      icon: <FastConditionPayment />,
      title: "Fast & flexible delivery",
      dec: "On-demand, same-day or advance orders. We’re ready when you are and promise a fast service.",
    },
    {
      id: 3,
      icon: <LiveTracking />,
      title: "Vast array of vehicles",
      dec: "Different vehicles to suit any kind of business including trucks, vans, motorcycles and walkers for deliveries of anything of any size.",
    },
    {
      id: 4,
      icon: <SmsUpdate />,
      title: "Real-time tracking",
      dec: "In-app tracking allows you and the receiver to track your order in real time during the delivery.",
    },
  ];

  return (
    <section className="container mx-auto md:px-10 sm:px-5 pb-[70px] pt-[120px] md:pt-[90px] sm:pt-[56px] sm:pb-[56]">
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
