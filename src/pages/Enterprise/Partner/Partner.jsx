const Partner = () => {
  return (
    <div className="py-10 sm:py-5 bg-secondary text-white mt-10 mx-28 px-5 sm:mx-0 sm:mt-5">
      <div className="container mx-auto">
        <div className="flex md:flex-wrap sm:flex-wrap items-center justify-between md:mx-5 sm:sm:mx-5">
          <div>
            <h2 className="text-center text-4xl md:text-3xl sm:text-xl tracking-tighter font-bold py-5 md:px-5 sm:px-5">
              রেডএক্সের পার্টনার হোন আজই
            </h2>
            <p className=" font-bold text-center md:px-5 sm:px-5">
              সাইন-আপ করুন করুন মাত্র দুই মিনিটে
            </p>
          </div>

          <button
            type="button"
            className="px-8 py-3 md:w-full sm:w-full md:p-5 sm:p-5 md:mx-10 sm:mx-10 md:mt-3 sm:mt-3 font-semibold rounded bg-primary text-xl sm:text-sm hover:bg-red-500 md:mr-5"
          >
            সাইন-আপ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
