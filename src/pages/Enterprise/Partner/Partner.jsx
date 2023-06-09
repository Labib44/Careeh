

const Partner = () => {
    return (
        <div className="py-10 bg-secondary text-white mt-10 sm:mt-5">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-center text-4xl md:text-3xl sm:text-xl tracking-tighter font-bold py-5 md:px-5 sm:px-5">রেডএক্সের পার্টনার হোন আজই</h2>
                        <p className=" font-bold md:px-5 sm:px-5">সাইন-আপ করুন করুন মাত্র দুই মিনিটে</p>
                    </div>

                    <button type="button" className="px-8 py-3 font-semibold rounded bg-primary text-xl sm:text-sm hover:bg-red-500 md:mr-5 sm:mr-5">সাইন-আপ করুন</button>
                </div>
            </div>
        </div>
    );
};

export default Partner;