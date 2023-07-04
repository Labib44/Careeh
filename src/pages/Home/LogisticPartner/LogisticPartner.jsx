import fastDelivery from "../../../assets/home/logistic-partner/fastest-delivery.svg";
import dropPickupDelivery from "../../../assets/home/logistic-partner/doorstep-pickup-delivery.svg";
import smsUpdate from "../../../assets/home/logistic-partner/sms-update.svg";
import nextDayPayement from "../../../assets/home/logistic-partner/next-day-payment.svg";
import bestRates from "../../../assets/home/logistic-partner/best-cod-rates.svg";
import secureHandling from "../../../assets/home/logistic-partner/secure-handling.svg";

const LogisticPartner = () => {
  const logistics = [
    {
      title: "Diverse vehicle fleet",
      description:
        "Outsource deliveries, and skip fleet management hassle. Pay for required services only.",
      icon: fastDelivery,
    },
    {
      title: "Optimal freight solutions",
      description:
        "Choose the best freight option, whether it's full truckload or less, based on your specific needs.",
      icon: dropPickupDelivery,
    },
    {
      title: "Swift & adaptable delivery",
      description:
        "We offer on-demand, same-day, and advanced order services, ensuring a fast and flexible delivery experience.",
      icon: smsUpdate,
    },
    {
      title: "Real-time order tracking",
      description:
        "Stay informed with in-app tracking, allowing you and the recipient to monitor the delivery progress in real-time.",
      icon: nextDayPayement,
    },
    {
      title: "Convenient monthly invoicing",
      description:
        "Enjoy hassle-free payment terms with our monthly invoicing system.",
      icon: bestRates,
    },
    {
      title: "Secure handling",
      description:
        "Rest assured, our compensation policy guarantees the safe handling of your shipment.",
      icon: secureHandling,
    },
  ];
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-[40px] text-center my-12">
        Choose Careeh as your delivery partner
      </h2>
      <div className="grid sm:grid-cols-1 grid-cols-3 justify-items-center gap-12 p-8 mb-14">
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
