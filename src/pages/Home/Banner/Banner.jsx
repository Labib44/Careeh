// import hero1 from "../../../assets/video/hero-video-1.webm";
import Form from "./Form";

const Banner = () => {
  return (
    <div
      className={`bg-hero-image min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center relative `}
    >
      <div className="grid sm:grid-cols-1 sm:text-center grid-cols-2 justify-between container gap-10 z-10 sm:py-10">
        <div className="flex justify-center items-center">
          <h2 className="sm:text-5xl md:text-5xl lg:text-6xl text-7xl font-bold text-white leading-tight">
            <span className="text-primary">Comprehensive logistics</span> <br />
            solutions for you!
          </h2>
        </div>
        <div className="bg-black px-12 py-20 rounded-md z-10">
          <Form />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    </div>
  );
};

export default Banner;
