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
      title: "Parcel",
      shortDes:
        "Require immediate delivery at your doorstep? In urgent need of sending an item? Look no further than our on-demand delivery!",
      image: parcelDelivery,
    },
    {
      title: "Courier",
      shortDes: "Careeh for First-mile pickup, last-mile delivery services for individuals (C2C), small businesses (B2C), and corporates (B2B).",
      image: bulkShipment,
    },
    {
      title: "Trade Pack",
      shortDes:
        "A travel pack commerce, delivering small quantities of goods to customers’ doors. Careeh is pioneering authentic purchasing through Trade Pack with a promise to deliver at the doorstep.",
      image: lineHaul,
    },
    {
      title: "Shifting",
      shortDes:
        "Book open trucks and covered vans for rent any size, anywhere in BD within seconds! Instant free quotes with our fair-smart algorithm on App.",
      image: wareHouse,
    },
    {
      title: "Moving Store",
      shortDes:
        "Allow to deliver groceries and household goods to customers' doorsteps in record time.",
      image: truckRent,
    },
    {
      title: "Storage",
      shortDes:
        "A virtual storage is the pooling of physical storage from multiple network storage to sell online as a retailer to consumers and as a wholesaler to retailers.",
      image: loadUnload,
    },
    {
      title: "Load/Unload",
      shortDes:
        "Industry-specific loading/unloading services in factories, project sites, and ports",
      image: logisticeService,
    },
    {
      title: "Line Haul",
      shortDes: "Freight movement solutions including FTL (full truckload), LTL (less than truckload)",
      image: customiseSolutions,
    },
  ];
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-[40px] text-center my-14">
        We care limitless that you can rely on
      </h2>
      <div className="sm:grid-cols-1 md:grid-cols-3 grid grid-cols-4 gap-10">
        {services.map((servic) => (
          <div key={servic.title}>
            <img src={servic.image} alt="image" />
            <div className="mt-5">
              <h2 className="font-bold text-xl">{servic.title}</h2>
              <p className="text-base text-zinc-700 text-justify">{servic.shortDes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
