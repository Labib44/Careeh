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
        "Careeh is providing satisfactory last-mile delivery support which other tech couriers couldn’t provide us. The B2B sales team is very supportive and tracking system is helpful.",
      clientPhoto: client1,
      name: "Shunno Ayon",
      title: "Dighal",
    },
    {
      badge: "Enterprises",
      feedback:
        "Careeh is providing satisfactory last-mile delivery support which other tech couriers couldn’t provide us. The B2B sales team is very supportive and tracking system is helpful.",
      clientPhoto: client2,
      name: "Shunno Ayon",
      title: "Dighal",
    },
    {
      badge: "Enterprises",
      feedback:
        "Careeh is providing satisfactory last-mile delivery support which other tech couriers couldn’t provide us. The B2B sales team is very supportive and tracking system is helpful.",
      clientPhoto: client3,
      name: "Shunno Ayon",
      title: "Dighal",
    },
    {
      badge: "Enterprises",
      feedback:
        "Careeh is providing satisfactory last-mile delivery support which other tech couriers couldn’t provide us. The B2B sales team is very supportive and tracking system is helpful.",
      clientPhoto: client4,
      name: "Shunno Ayon",
      title: "Dighal",
    },
    {
      badge: "Enterprises",
      feedback:
        "Careeh is providing satisfactory last-mile delivery support which other tech couriers couldn’t provide us. The B2B sales team is very supportive and tracking system is helpful.",
      clientPhoto: client5,
      name: "Shunno Ayon",
      title: "Dighal",
    },
    {
      badge: "Enterprises",
      feedback:
        "Careeh is providing satisfactory last-mile delivery support which other tech couriers couldn’t provide us. The B2B sales team is very supportive and tracking system is helpful.",
      clientPhoto: client6,
      name: "Shunno Ayon",
      title: "Dighal",
    },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <div className="px-5">
      <h2 className="font-bold text-center my-12 text-[40px]">
        Clients love <span className="text-primary">Careeh</span>
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
              <img
                src={quote}
                alt="quote"
                style={{ width: "35px", height: "auto" }}
              />
              <p className="my-5">{review.feedback}</p>
              <div className="flex gap-5">
                <img
                  className="h-14 w-14"
                  src={review.clientPhoto}
                  alt="customer-photo"
                  style={{ width: "56px", height: "56px" }}
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
