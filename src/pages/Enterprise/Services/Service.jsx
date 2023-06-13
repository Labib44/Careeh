import service1 from "../../../assets/enterprise/service1.png";
import service2 from "../../../assets/enterprise/service2.png";
import service3 from "../../../assets/enterprise/service3.png";
import service4 from "../../../assets/enterprise/service4.png";
import service5 from "../../../assets/enterprise/service5.png";
import service6 from "../../../assets/enterprise/service6.png";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const servicesData = [
    {
      id: 1,
      title: "Avail Any Vehicle",
      logo: service1,
      discription:
        "All vehicle sizes are available within 3 hours, anywhere in Bangladesh",
    },
    {
      id: 2,
      title: "Full truckload/Less-than-truckload",
      logo: service2,
      discription:
        "Full truckload or less, choose best freight option according to your needs",
    },
    {
      id: 3,
      title: "Loading/Unloading Support",
      logo: service3,
      discription: "Industry specific loading and unloading support available",
    },
    {
      id: 4,
      title: "Shipment Tracking",
      logo: service4,
      discription:
        "Stay up to date in real time with end to end shipment tracking",
    },
    {
      id: 5,
      title: "Monthly Invoicing",
      logo: service5,
      discription: "Hassle-free payment terms with monthly invoicing system",
    },
    {
      id: 6,
      title: "Secure Handling",
      logo: service6,
      discription:
        "Compensation policy guarantees safe handling of your shipment",
    },
  ];
  return (
    <div className="container mx-auto my-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-4 p-5">
        {servicesData.map((serviceData) => (
          <ServiceCard
            key={serviceData.id}
            serviceData={serviceData}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
