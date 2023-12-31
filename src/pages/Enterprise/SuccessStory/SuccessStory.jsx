// import merchant from "../../../assets/enterprise/merchant-success-story.png";
import ceoImage from "../../../assets/enterprise/ceoimage.jpeg";

const SuccessStory = () => {
  return (
    <div className="mt-20 sm:mt-5 bg-gray-100 pb-16">
      <h1 className="text-4xl text-center md:text-3xl sm:text-2xl font-bold text-secondary sm:p-5 md:px-5 hidden ">
        Merchant Success Story
      </h1>

      <div className=" container mx-auto grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
        <div className="p-5 ml-20  mx-10 sm:mx-5 -mt-14 sm:-mt-0">
          <img src={ceoImage} className="w-full" alt="" />
        </div>

        <div className=" my-40 md:my-10 lg:my-10 sm:my-5 ">
          <h1 className="text-4xl md:text-3xl sm:text-xl font-bold text-secondary sm:px-5 md:px-5 sm:hidden">
            Merchant Success Story
          </h1>
          <p className="text-secondary font-bold mt-10  sm:mt-0 sm:px-5 md:px-5">
            <span className="text-primary">Careeh</span> is an important partner
            of our distribution
          </p>

          <h1 className="text-secondary mt-10 sm:mt-0 text-[16px] sm:px-5 md:px-5 sm:pt-3 text-justify">
            <span className="text-primary">Careeh,</span> a renowned logistics
            and distribution management company, has been a valuable partner for
            Rangs for the past couple of months. Our journey together has been
            excellent, and <span className="text-primary">Careeh.</span> quickly
            became an integral part of Rangs' distribution and delivery
            operations. We are excited about the prospects of establishing a
            long-term and mutually beneficial business relationship with{" "}
            <span className="text-primary">Careeh.</span>
          </h1>

          <h1 className="text-secondary font-bold mt-10 sm:mt-0 sm:px-5 md:px-5 sm:pt-3">
            Ibnul Kais Aryan
          </h1>

          <p className="text-secondary sm:px-5 md:px-5 ">
            CEO || <span className="text-primary">Careeh Limited</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
