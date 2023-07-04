import { useEffect } from "react";
import CourierBanner from "./CourierBanner/CourierBanner";
import DeliveryBoy from "./DeliveryBoy/DeliveryBoy";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Courier = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <>
            <CourierBanner />
            <Services />
            <DeliveryBoy />
            <Testimonial />
        </>
    );
};

export default Courier;
