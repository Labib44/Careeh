import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

const Slider = () => {
  const sliders = [
    {
      title: (
        <h2 className="text-[54px] font-bold text-white">
          দেশজুড়ে সবচেয়ে বেশি ওয়্যারহাউস স্পেস
          <br /> <span className="text-primary">৩.৫ লাখ+ স্কয়ার ফিট</span>
        </h2>
      ),
    },
    {
      title: (
        <h2 className="text-[54px] font-bold text-white">
          দেশজুড়ে সবচেয়ে বেশি রাইডার
          <br /> <span className="text-primary">৩৫০০+ ফ্রন্টলাইনার</span>
        </h2>
      ),
    },
    {
      title: (
        <h2 className="text-[54px] font-bold text-white">
          দেশজুড়ে সবচেয়ে বড় লজিস্টিকস নেটওয়ার্ক
          <br /> <span className="text-primary">৬৪ জেলায় এবং ৪৯৩ থানায়</span>
        </h2>
      ),
    },
    {
      title: (
        <h2 className="text-[54px] font-bold text-white">
          দেশজুড়ে সবচেয়ে দ্রুত লজিস্টিকস সল্যুশন
          <br /> <span className="text-primary">৩ ঘণ্টায় ট্রাক ভাড়া</span>
        </h2>
      ),
    },
  ];

  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2000,
        }}
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.title}>{slider.title}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
