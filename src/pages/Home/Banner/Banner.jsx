// import hero1 from "../../../assets/video/hero-video-1.webm";
import Form from "./Form";

const Banner = () => {
  return (
    <div
      className={`bg-hero-image min-h-screen md:min-h-[60vh] bg-cover bg-center bg-no-repeat flex justify-center items-center relative `}
    >
      <div className="grid sm:grid-cols-1 sm:text-center grid-cols-2 sm:gap-10 gap-10 justify-between z-10 sm:py-10 sm:container">
        <div className="flex justify-center items-center sm:ml-0 md:ml-8 lg:ml-8 xl:ml-9 ml-[190px]">
          <h2 className="sm:text-5xl md:text-5xl lg:text-6xl text-7xl font-bold text-white leading-tight">
            <span className="text-primary">Comprehensive logistics</span> <br />
            solutions for you!
          </h2>
        </div>
        <div className="bg-black px-12 py-20 sm:rounded-xl rounded-l-2xl z-10 sm:ml-0 md:ml-10 lg:ml-14 xl:ml-10 ml-60">
          <Form />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    </div>
  );
};

export default Banner;
