import client1 from "../../../assets/home/customer-review/client-love1.webp";
import client2 from "../../../assets/home/customer-review/client-love2.jpg";
import client3 from "../../../assets/home/customer-review/client-love3.webp";
import client4 from "../../../assets/home/customer-review/client-love4.png";
import client5 from "../../../assets/home/customer-review/client-love5.jpg";
import client6 from "../../../assets/home/customer-review/client-love6.webp";
import quote from "../../../assets/home/customer-review/drop-red.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";

const CustomerReviews = () => {
  const reviews = [
    {
      badge: "Enterprises",
      feedback:
        "সেনা লুব্রিক্যান্টের ডেলিভারির জন্য আমরা সবসময়ই রেডএক্স ব্যবহার করি। রেডএক্স কার্গো টিম এর সাপোর্ট এবং লাইভ ট্র্যাকিং সিস্টেম শিপমেন্টকে আরো সহজ করে।",
      clientPhoto: client1,
      name: "রুবাবা আক্তার",
      title: "সেলাই",
    },
    {
      badge: "Enterprises",
      feedback:
        "সেনা লুব্রিক্যান্টের ডেলিভারির জন্য আমরা সবসময়ই রেডএক্স ব্যবহার করি। রেডএক্স কার্গো টিম এর সাপোর্ট এবং লাইভ ট্র্যাকিং সিস্টেম শিপমেন্টকে আরো সহজ করে।",
      clientPhoto: client2,
      name: "রুবাবা আক্তার",
      title: "সেলাই",
    },
    {
      badge: "Enterprises",
      feedback:
        "সেনা লুব্রিক্যান্টের ডেলিভারির জন্য আমরা সবসময়ই রেডএক্স ব্যবহার করি। রেডএক্স কার্গো টিম এর সাপোর্ট এবং লাইভ ট্র্যাকিং সিস্টেম শিপমেন্টকে আরো সহজ করে।",
      clientPhoto: client3,
      name: "রুবাবা আক্তার",
      title: "সেলাই",
    },
    {
      badge: "Enterprises",
      feedback:
        "সেনা লুব্রিক্যান্টের ডেলিভারির জন্য আমরা সবসময়ই রেডএক্স ব্যবহার করি। রেডএক্স কার্গো টিম এর সাপোর্ট এবং লাইভ ট্র্যাকিং সিস্টেম শিপমেন্টকে আরো সহজ করে।",
      clientPhoto: client4,
      name: "রুবাবা আক্তার",
      title: "সেলাই",
    },
    {
      badge: "Enterprises",
      feedback:
        "সেনা লুব্রিক্যান্টের ডেলিভারির জন্য আমরা সবসময়ই রেডএক্স ব্যবহার করি। রেডএক্স কার্গো টিম এর সাপোর্ট এবং লাইভ ট্র্যাকিং সিস্টেম শিপমেন্টকে আরো সহজ করে।",
      clientPhoto: client5,
      name: "রুবাবা আক্তার",
      title: "সেলাই",
    },
    {
      badge: "Enterprises",
      feedback:
        "সেনা লুব্রিক্যান্টের ডেলিভারির জন্য আমরা সবসময়ই রেডএক্স ব্যবহার করি। রেডএক্স কার্গো টিম এর সাপোর্ট এবং লাইভ ট্র্যাকিং সিস্টেম শিপমেন্টকে আরো সহজ করে।",
      clientPhoto: client6,
      name: "রুবাবা আক্তার",
      title: "সেলাই",
    },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <div className="px-5">
      <h2 className="font-bold text-center my-12 text-[40px]">
        রেডএক্সের প্রতি গ্রাহকদের ভালোবাসা
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review} className="mb-14">
            <div className="border p-5">
              <div className="flex justify-end">
                <p className="bg-slate-300 p-1 text-sm">{review.badge}</p>
              </div>
              <img src={quote} alt="quote" />
              <p className="my-5">{review.feedback}</p>
              <div className="flex gap-5">
                <img
                  className="h-14 w-14"
                  src={review.clientPhoto}
                  alt="customer-photo"
                />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="italic">{review.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
