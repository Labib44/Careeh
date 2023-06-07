import DeliveryBoyImg from "../../../assets/courier/del-boy.jpg";
const DeliveryBoy = () => {
    return (
        <section className="pt-14 pb-[160px]">
            <div className="container mx-auto px-32 md:px-10 sm:px-5 relative">
                <div className="grid grid-cols-2 gap-16">
                    <div className="h-[460px] ">
                        <img
                            src={DeliveryBoyImg}
                            className="w-full h-full"
                            alt="Delivery Boy"
                        />
                    </div>
                    <div className="h-full flex flex-col justify-center">
                        <h2 className="mb-6 font-bold text-[40px] text-black">
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
