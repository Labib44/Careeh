import CourierBanner from "./CourierBanner/CourierBanner";
import DeliveryBoy from "./DeliveryBoy/DeliveryBoy";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Courier = () => {
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
