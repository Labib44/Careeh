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
      title: "পার্সেল ডেলিভারি",
      shortDes:
        "ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা",
      image: parcelDelivery,
    },
    {
      title: "বাল্ক শিপমেন্ট",
      shortDes: "বড় আইটেম এবং বড় সংখ্যক ডেলিভারির বিশেষ সমাধান",
      image: bulkShipment,
    },
    {
      title: "লাইন হল",
      shortDes:
        "এফটিএল (পুরো ট্রাকলোড) ও এলটিএল (আংশিক ট্রাকলোড) সহ মালামাল পরিবহনের সকল সমাধান",
      image: lineHaul,
    },
    {
      title: "ওয়্যারহাউজ",
      shortDes: "সংরক্ষন, বাছাই এবং প্রক্রিয়াজাতকরণের পরিপূর্ণ সমাধান",
      image: wareHouse,
    },
    {
      title: "ট্রাক ভাড়া",
      shortDes:
        "খোলা ট্রাক এবং কাভার্ড ভ্যান দেশের যে কোন জায়গায় যে কোন সময়",
      image: truckRent,
    },
    {
      title: "লোড-আনলোড",
      shortDes:
        "ইন্ডাস্ট্রি-অনুযায়ী ফ্যাক্টরি, প্রজেক্ট এবং বন্দরগুলোতে লোডিং-আনলোডিংয়ের সুবিধা",
      image: loadUnload,
    },
    {
      title: "লজিস্টিকস সেবা",
      shortDes:
        "লজিস্টিকস সংক্রান্ত যে কোন সমস্যার সমাধানে অভিজ্ঞ টিমের সহায়তা",
      image: logisticeService,
    },
    {
      title: "কাস্টমাইজ সমাধান",
      shortDes: "আপনার ব্যবসায়িক ধরনের প্রয়োজন বুঝে কাস্টমাইজড সল্যুশন",
      image: customiseSolutions,
    },
  ];
  return (
    <div>
      <h2 className="font-bold text-[40px] text-center my-12">সার্ভিস সমূহ</h2>
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
