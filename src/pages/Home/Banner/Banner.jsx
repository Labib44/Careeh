import flag from "../../../assets/video/bangladesh.png";
const Banner = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center h-[565px]">
        <video autoPlay loop muted>
          <source
            src="https://d118vismjsp9sl.cloudfront.net/web2.0/video/hero-video-3.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute w-full h-full top-0 grid grid-cols-12 items-center justify-center">
          <div className="pl-20 col-span-8">
            <h1 className="text-white">hello</h1>
          </div>
          <div className="bg-secondary min-h-screen col-span-4 py-24 px-10 rounded-b-xl">
            <form>
              <h3 className="text-white text-center text-sm">
                বিনামুল্যে সাইন-আপ করুন মাত্র দুই মিনিটে
              </h3>
              <div className="flex items-center justify-between w-full mb-6 mt-7">
                <div className="text-secondary bg-white border-r py-3 px-2 rounded-l-md flex w-24 items-center ">
                  <img className="w-6" src={flag} alt="flag" />
                  <p>+880</p>
                </div>
                <input
                  className="w-full focus:outline-none py-3 rounded-r-md px-3"
                  type="text"
                  placeholder="পার্সেল আইডি দিন"
                />
              </div>

              <button
                type="submit"
                className="text-white bg-primary w-full py-3 rounded-md"
              >
                সাইন-আপ
              </button>

              <div className="flex items-center mt-10">
                <div className="border-b-2 w-[50%]"></div>
                <div className="text-white px-7">অথবা,</div>
                <div className="border-b-2 w-[50%]"></div>
              </div>

              <div className="mt-14">
                <h4 className="text-white text-center text-sm">
                  ট্রাক মুভমেন্ট স্ট্যাটাস
                </h4>
                <div className="flex items-center justify-between w-full mt-12">
                  <input
                    className="w-full focus:outline-none py-3 rounded-t-md rounded-r-none rounded-l-md px-3"
                    type="text"
                    placeholder="পার্সেল আইডি দিন"
                  />
                  <button className="text-white bg-primary py-3 px-3 rounded-r-md">
                    ট্র্যাক
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
