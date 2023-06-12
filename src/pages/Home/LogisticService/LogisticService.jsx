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
            রেডএক্সের লজিস্টিকস সেবা সারাদেশে ৬৪ জেলা এবং ৪৯৩ উপজেলা জুড়ে
            বিস্তৃত
          </h2>
          <p className="text-lg mt-6 mb-10">
            আপনার যেকোনো লজিস্টিকস প্রয়োজনের জন্য আমরা নিশ্চিত করি দেশজুড়ে
            সবচেয়ে দ্রুতগতির সেবা
          </p>
          <button className="bg-primary px-16 py-4 rounded-md">
            কভারেজ এলাকা দেখুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogisticService;
