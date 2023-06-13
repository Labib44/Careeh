import merchant from "../../../assets/enterprise/merchant-success-story.png";

const SuccessStory = () => {
  return (
    <div className="mt-20 bg-gray-100 pb-16">
      <h1 className="text-4xl text-center md:text-3xl sm:text-2xl font-bold text-secondary sm:p-5 md:px-5 hidden ">
        Merchant Success Story
      </h1>

      <div className=" container mx-auto grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
        <div className="p-5 ml-20  mx-10 sm:mx-5 -mt-14 sm:-mt-0">
          <img src={merchant} className="w-full" alt="" />
        </div>

        <div className=" my-40 md:my-10 lg:my-10 sm:my-5 ">
          <h1 className="text-4xl md:text-3xl sm:text-xl font-bold text-secondary sm:px-5 md:px-5 sm:hidden">
            Merchant Success Story
          </h1>
          <p className="text-secondary font-bold mt-10  sm:mt-0 sm:px-5 md:px-5">
            REDX is an important partner of our distribution
          </p>

          <h1 className="text-secondary mt-10 sm:mt-0 text-[16px] sm:px-5 md:px-5 sm:pt-3">
            REDX, a popular name in the field of logistics and distribution
            management, has been partnering with Rangs for about a couple of
            months now! It’s been so far so good with the journey, and REDX has
            become an important part of Rangs distribution and delivery metrics
            in no time. We look forward to creating a long-term and successful
            business relationship with REDX.
          </h1>

          <h1 className="text-secondary font-bold mt-10 sm:mt-0 sm:px-5 md:px-5 sm:pt-3">
            Salman A Khan
          </h1>

          <p className="text-secondary sm:px-5 md:px-5 ">
            Head of Brand, Local Electronics Conglomerate
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
