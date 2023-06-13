import show from "../../../assets/enterprise/BataShow.webp";

const Footwear = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 ">
        <div className="mx-20 sm:mx-5 mt-5">
          <h1 className="text-5xl md:text-3xl sm:text-2xl font-extrabold text-secondary">
            How we have helped a global footwear brand scale so far
          </h1>
          <p className="text-xl text-secondary mt-10">
            REDX delivers goods from their Central Distribution across their
            entire network of franchise outlets throughout the country
          </p>

          <div className="flex justify-between mt-10">
            <div className="mr-12">
              <h1 className="text-secondary font-bold text-4xl">80+</h1>
              <p className="text-secondary text-xl mt-3">
                Nationwide franchise outlets covered
              </p>
            </div>
            <div>
              <h1 className="text-secondary font-bold text-4xl">14x</h1>
              <p className="text-secondary text-xl mt-3">
                Daily parcel volume delivery
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 mx-24 sm:mx-5">
          <img src={show} className="w-full " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footwear;
