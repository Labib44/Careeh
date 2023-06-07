import DeliveryBoyImg from "../../../assets/courier/del-boy.jpg";
const DeliveryBoy = () => {
    return (
        <section className="pt-14 md:pt-0 sm:pt-0 pb-[160px] md:pb-[90px] sm:pb-[56px] ">
            <div className="container mx-auto px-32 md:px-10 sm:px-5 relative">
                <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-16 md:gap-8 sm:gap-8">
                    <div className="h-[460px] lg:h-[400px] sm:h-[360px]">
                        <img
                            src={DeliveryBoyImg}
                            className="w-full h-full"
                            alt="Delivery Boy"
                        />
                    </div>
                    <div className="h-full flex flex-col justify-center">
                        <h2 className="mb-6 sm:mb-4 font-bold text-[40px] md:text-[32px] sm:text-[28px] text-black">
                            উপভোগ করুন আকর্ষণীয় ডেলিভারি চার্জ
                        </h2>
                        <p className="text-base text-accent">
                            আমরা কুরিয়ার সার্ভিস দিচ্ছি বাংলাদেশ জুড়ে। আকর্ষণীয়
                            রেটে আমারদের সার্ভিস নিন
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryBoy;
