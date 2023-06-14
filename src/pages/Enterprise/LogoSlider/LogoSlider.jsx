import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './LogoSlider.css';

// import required modules
import { Autoplay, } from 'swiper';

import bata from '../../../assets/enterprise/bata-color.png'
import lotto from '../../../assets/enterprise/lotto-color.png'
import rangs from '../../../assets/enterprise/rangs-group-color.png'
import bengal from '../../../assets/enterprise/bengal-airlift-color.png'
import sena from '../../../assets/enterprise/sena-color.png'

const LogoSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="">
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
               
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                
                modules={[Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper mt-10"
            >
                <SwiperSlide><img src={bata} alt="" /></SwiperSlide>
                <SwiperSlide><img src={lotto} alt="" /></SwiperSlide>
                <SwiperSlide><img src={rangs} alt="" /></SwiperSlide>
                <SwiperSlide><img src={bengal} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sena} alt="" /></SwiperSlide>
                <SwiperSlide><img src={bata} alt="" /></SwiperSlide>
                <SwiperSlide><img src={lotto} alt="" /></SwiperSlide>
                <SwiperSlide><img src={rangs} alt="" /></SwiperSlide>
                <SwiperSlide><img src={bengal} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sena} alt="" /></SwiperSlide>
                <div className="autoplay-progress hidden" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default LogoSlider;