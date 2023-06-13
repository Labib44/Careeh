import bulkShipment from "../../../assets/home/service/bulk-shipment.webp";
import parcelDelivery from "../../../assets/home/service/parcel-delivery.webp";
import lineHaul from "../../../assets/home/service/line-haul.webp";
import wareHouse from "../../../assets/home/service/warehouse.webp";
import truckRent from "../../../assets/home/service/truck-rent.webp";
import loadUnload from "../../../assets/home/service/load-unload.webp";
import logisticeService from "../../../assets/home/service/logistics-service.webp";
import customiseSolutions from "../../../assets/home/service/customised-solutions.webp";
const Service = () => {
  const services = [
    {
      title: "Parcel Delivery",
      shortDes:
        "First-mile pickup, last-mile delivery services for individuals (C2C), small businesses (B2C) and corporates (B2B)",
      image: parcelDelivery,
    },
    {
      title: "Bulk Shipment",
      shortDes: "Specialized solutions for large items and large numbers",
      image: bulkShipment,
    },
    {
      title: "Line Haul",
      shortDes:
        "Freight movement solutions including FTL (full truckload), LTL (less than truckload)",
      image: lineHaul,
    },
    {
      title: "Warehouse",
      shortDes:
        "Complete fulfillment solutions including storing, sorting, processing",
      image: wareHouse,
    },
    {
      title: "Truck Rent",
      shortDes:
        "Open trucks and covered vans for rent any size, anywhere in BD",
      image: truckRent,
    },
    {
      title: "Load/Unload",
      shortDes:
        "Industry-specific loading/unloading services in factories, project sites, and ports",
      image: loadUnload,
    },
    {
      title: "Logistics as a service",
      shortDes:
        "Outsource logistics requirements, get a dedicated team for your company",
      image: logisticeService,
    },
    {
      title: "Customized Solutions",
      shortDes: "Tailor made solutions for your unique business needs",
      image: customiseSolutions,
    },
  ];
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-[40px] text-center mt-14">
        We provide services that you can rely on
      </h2>
      <div className="sm:grid-cols-1 md:grid-cols-3 grid grid-cols-4 gap-10">
        {services.map((servic) => (
          <div key={servic.title}>
            <img src={servic.image} alt="image" />
            <div className="mt-5">
              <h2 className="font-bold text-xl">{servic.title}</h2>
              <p className="text-base text-zinc-700">{servic.shortDes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
