import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

const Slider = () => {
  const sliders = [
    {
      title: (
        <h2 className="text-[54px] font-bold text-white">
          Nationwide largest warehouse space
          <br /> <span className="text-primary">3.5 lac+ square feet</span>
        </h2>
      ),
    },
    {
      title: (
        <h2 className="text-[54px] font-bold text-white">
          Nationwide highest delivery riders
          <br /> <span className="text-primary">3500+ frontline</span>
        </h2>
      ),
    },
    {
      title: (
        <h2 className="text-[54px] font-bold text-white">
          Nationwide largest logistics network
          <br /> <span className="text-primary">1192 areas covered</span>
        </h2>
      ),
    },
    {
      title: (
        <h2 className="text-[54px] font-bold text-white">
          Nationwide fastest logistics solutions
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
