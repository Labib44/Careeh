import map from "../../../assets/home/logistic-service/bangladash-map.svg";
const LogisticService = () => {
  return (
    <div className="bg-black py-5">
      <div className="container mx-auto grid sm:grid-cols-1 grid-cols-2 items-center gap-10 justify-center">
        <div>
          <img src={map} alt="map" />
        </div>
        <div className="text-white">
          <h2 className="text-[40px] font-bold">
          Careeh extends on-demand logistics support across all Bangladesh
          </h2>
          <p className="text-lg mt-6 mb-10">
            Whatever your logistics need, we guarantee the fastest service all
            over the country
          </p>
          <button className="bg-primary px-16 py-4 rounded-md">
            Check our coverage area
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogisticService;
