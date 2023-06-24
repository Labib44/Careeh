import parcelDelivery from "../../../assets/home/service/Parcel.jpg";
import bulkShipment from "../../../assets/home/service/Courier.jpg";
import tradePack from "../../../assets/home/service/Trade Pack.png";
import shifting from "../../../assets/home/service/Shifting.png";
import movingStore from "../../../assets/home/service/Moving Store.jpg";
import storage from "../../../assets/home/service/Storage.jpg";
import loadAndUnload from "../../../assets/home/service/Load & Unload.jpg";
import lineHaul from "../../../assets/home/service/Line Haul.jpg";

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
      shortDes:
        "Careeh for First-mile pickup, last-mile delivery services for individuals (C2C), small businesses (B2C), and corporates (B2B).",
      image: bulkShipment,
    },
    {
      title: "Trade Pack",
      shortDes:
        "Virtual storage is the online selling of pooled physical storage, serving both consumers and retailers.",
      image: tradePack,
    },
    {
      title: "Shifting",
      shortDes:
        "Book open trucks and covered vans for rent any size, anywhere in BD within seconds! Instant free quotes with our fair-smart algorithm on App.",
      image: shifting,
    },
    {
      title: "Moving Store",
      shortDes:
        "Allow to deliver groceries and household goods to customers' doorsteps in record time.",
      image: movingStore,
    },
    {
      title: "Storage",
      shortDes:
        "Virtual storage is the online selling of pooled physical storage, serving both consumers and retailers.",
      image: storage,
    },
    {
      title: "Load / Unload",
      shortDes:
        "Industry-specific loading/unloading services in factories, project sites, and ports",
      image: loadAndUnload,
    },
    {
      title: "Line Haul",
      shortDes:
        "Freight movement solutions including FTL (full truckload), LTL (less than truckload)",
      image: lineHaul,
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
            <img src={servic.image} alt="image" className=" h-52 w-full" />
            <div className="mt-5">
              <h2 className="font-bold text-xl">{servic.title}</h2>
              <p className="text-base text-zinc-700 text-justify">
                {servic.shortDes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
