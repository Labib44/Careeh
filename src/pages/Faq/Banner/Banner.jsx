import faqImg from "../../../assets/faq/banner.svg";
const Banner = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="grid sm:grid-cols-1 grid-cols-2 items-center container mx-auto justify-between ">
        <div className="sm:text-center">
          <h2 className="font-bold text-5xl py-3">Have Question</h2>
          <span>Take a look at the most commonly asked questions.</span>
        </div>
        <div>
          <img className="h-80 w-full" src={faqImg} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
