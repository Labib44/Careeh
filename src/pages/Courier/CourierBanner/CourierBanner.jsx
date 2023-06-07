import { FaChevronRight } from "react-icons/fa";
import SearchIcon from "../../../assets/courier/tracker.png";

const CourierBanner = () => {
    return (
        <section>
            <div className="bg-courier-banner relative h-[460px] bg-no-repeat bg-cover bg-left">
                <div className="container mx-auto px-24 md:px-10 sm:px-5 h-full flex justify-center flex-col">
                    <div className="w-[37%]">
                        <h1 className="text-[40px] leading-[56px] font-semibold">
                            দেশজুড়ে দ্রুততম ডেলিভারি সেবা পেতে রেডেক্স
                            কুরিয়ারের সাথে থাকুন!
                        </h1>
                        <div className="pt-7">
                            <button className="transition-all w-[250px] text-base h-[50px] bg-primary flex items-center justify-center hover:bg-primary/70 text-white">
                                বুথের লোকেশনগুলো দেখুন
                                <FaChevronRight className="pl-1 text-md" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 bg-black">
                <div className="container mx-auto px-24 md:px-10 sm:px-5 flex justify-between">
                    <p className="text-base text-white leading-10">
                        আমাদের অনলাইন ট্র্যাকিং সার্ভিস দিয়ে কুরিয়ার ট্র্যাক
                        করুন
                    </p>
                    <div className="relative flex">
                        <div>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img src={SearchIcon} alt="search-icon" />
                            </div>
                            <input
                                type="text"
                                className="bg-gray-50 h-[50px] text-sm w-[370px] border border-transparent text-gray-900  rounded-l-lg block  pl-[45px] focus:outline-none focus:outline-transparent"
                                placeholder="পার্সেল আইডি"
                            />
                        </div>
                        <button
                            type="submit"
                            className="h-[50.7px] w-[150px] font-medium  bg-primary rounded-r-lg border border-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary "
                        >
                            <span className="text-md font-medium text-white">ট্র্যাক</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourierBanner;
