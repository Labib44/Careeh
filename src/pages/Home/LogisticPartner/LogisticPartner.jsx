import fastDelivery from "../../../assets/home/logistic-partner/fastest-delivery.svg";
import dropPickupDelivery from "../../../assets/home/logistic-partner/doorstep-pickup-delivery.svg";
import smsUpdate from "../../../assets/home/logistic-partner/sms-update.svg";
import nextDayPayement from "../../../assets/home/logistic-partner/next-day-payment.svg";
import bestRates from "../../../assets/home/logistic-partner/best-cod-rates.svg";
import secureHandling from "../../../assets/home/logistic-partner/secure-handling.svg";

const LogisticPartner = () => {
  const logistics = [
    {
      title: "Industry-leading tech",
      description:
        "With a brilliant team of engineers driving everything we do, Careeh offers the best possible service experience powered by superior technology",
      icon: fastDelivery,
    },
    {
      title: "Nationwide coverage",
      description:
        "Careeh offers the widest logistics network, covering 64 districts and 490+ sub districts across Bangladesh",
      icon: dropPickupDelivery,
    },
    {
      title: "Fastest solutions",
      description:
        "Backed by an agile team and dynamic operations, we promise to find the fastest solutions for your needs",
      icon: smsUpdate,
    },
    {
      title: "Next day payment",
      description:
        "Once the delivery is complete you will receive payment the very next day.",
      icon: nextDayPayement,
    },
    {
      title: "Best COD rates",
      description: "COD charge inside Dhaka 0%, outside Dhaka 1%.",
      icon: bestRates,
    },
    {
      title: "Secure handling",
      description: "Compensation policy guarantees safety of your shipment",
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
