import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

const Slider = () => {
  const sliders = [
    {
      title: (
        <h2 className="text-[52px] font-bold text-white">
          Comprehensive logistics solutions for you!
          <br /> <span className="text-primary">Rent truck in 3 hours</span>
        </h2>
      ),
    },
  ];

  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 6000,
        }}
        className="banner-section"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.title}>{slider.title}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
