import "./EnterpriseBanner.css";
// import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
// import flag from "../../../assets/enterprise/bangladesh-flag.png";
import Form from "../../Home/Banner/Form";

const EnterpriseBanner = () => {
  return (
    <>
    
    <div
      className={`bannerImg min-h-[80vh] md:min-h-[60vh] bg-cover bg-center bg-no-repeat flex justify-center items-center relative `}
    >
      <div className="grid sm:grid-cols-1 sm:text-center grid-cols-2 sm:gap-10 gap-10 justify-between z-10 sm:py-10 sm:container">
        <div className="ml-14 flex items-center">
          <h2 className="sm:text-4xl md:text-5xl lg:text-6xl text-[42.25px] font-bold text-white leading-snug">
            Go the distance with tech-first <br /> <span className="text-primary">enterprise logistics</span>
          </h2>
        </div>
        <div className="bg-black px-12 py-20 sm:rounded-xl rounded-l-2xl z-10 sm:ml-0 md:ml-10 lg:ml-14 xl:ml-10 ml-60">
          <Form />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    </div>

    {/* <div className="overflow-hidden sm:min-h-screen ">
      <div className="bannerImg">
        <div className="container mx-auto py-20 sm:py-0 grid grid-cols-2  sm:grid-cols-1 gap-5">
          <div className="text-white">
            <h1 className="text-5xl md:text-3xl sm:text-2xl font-bold py-5 leading-snug">
              Go the distance with tech-first enterprise logistics
              <span className=" text-primary"> enterprise</span>
            </h1>
            <div className=" flex p-2 items-center">
              <FaCheckCircle className="text-teal-300 w-5 h-5 mr-2 pt-1" />
              <p className="text-xl">Nationwide logistics network</p>
            </div>
            <div className=" flex p-2 items-center">
              <FaCheckCircle className="text-teal-300 w-5 h-5 mr-2 pt-1" />
              <p className="text-xl">Rent industrial truck in 3 hours</p>
            </div>
            <div className=" flex p-2 items-center">
              <FaCheckCircle className="text-teal-300 w-5 h-5 mr-2 pt-1" />
              <p className="text-xl">Secure handling guaranteed</p>
            </div>
            <div className=" flex sm:flex-wrap p-2 mt-5">
              <p className="text-xl">
                Get in touch directly with our sales team
              </p>
              <span className=" flex text-xl">
                <FaPhoneAlt className="text-primary w-6 h-6 mx-2 pt-1" />
                <p className="text-primary">09678844448</p>
              </span>
            </div>
          </div>

          <div className="bg-secondary text-white rounded-md p-10 sm:p-5 md:p-5 mx-5 md:mx-5 sm:mx-5 ">
            <h1 className="text-center font-bold">
              SIGN UP FOR FREE. IT ONLY TAKES 2 MINUTES
            </h1>
            <div>
              <form action="" className="flex flex-col mx-auto ">
                <div className="h-14 mt-12 sm:mt-5">
                  <div className="flex h-full border rounded-md border-primary">
                    <span className=" text-secondary bg-white flex items-center rounded-l-md border border-r-2 h-full p-3">
                      <img src={flag} alt="" />
                      <p className="ml-2 text-xl">+880</p>
                    </span>
                    <input
                      id="email"
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full h-full flex flex-1 outline-none rounded-r-md p-3"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="px-8 py-3 font-semibold rounded bg-primary mt-5 text-xl hover:bg-red-500"
                >
                  Sign up now
                </button>

                <div className="grid grid-cols-3 sm:grid-cols-1 my-10 sm:my-5">
                  <hr className=" h-0.5 w-full border-t-0 bg-white " />
                  <h1 className="text-xl -mt-3 px-16 md:px-5 sm:my-3 sm:text-center">
                    Or,
                  </h1>
                  <hr className="h-0.5 w-full border-t-0 bg-white " />
                </div>
                <h1 className="font-bold text-center">TRACK MOVEMENT STATUS</h1>

                <div className="flex h-14 mt-10 sm:mt-5">
                  <input
                    type="text"
                    name="parcel"
                    id="parcel"
                    placeholder="Enter parcel ID"
                    className="flex flex-1 text-left border sm:text-sm p-3 rounded-l-md "
                  />
                  <span className="flex items-center px-5 pointer-events-none sm:text-sm rounded-r-md bg-primary text-white text-xl ">
                    Track
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default EnterpriseBanner;
