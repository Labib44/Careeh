import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const NavigationSliderButton = ({ swiperRef, isMobile }) => {
    return (
        <div
            className={`flex justify-end pb-2 ${isMobile ? "hidden md:hidden sm:block sm:text-end" : "block"
                } pr-20 sm:pr-0`}
        >
            <button
                className="h-14 w-14 sm:h-10 sm:w-10 font-bold  flex items-center justify-center rounded-full shadow-md bg-white text-primary transition ease-out duration-300 mr-8 sm:mr-3"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <AiOutlineLeft className="text-xl" />
            </button>
            <button
                className="h-14 w-14 sm:h-10 sm:w-10  font-bold flex items-center justify-center rounded-full shadow-md bg-white text-primary transition ease-out duration-300"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <AiOutlineRight className="text-xl" />
            </button>
        </div>
    );
};

export default NavigationSliderButton;
