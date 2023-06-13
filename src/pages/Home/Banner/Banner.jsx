import "./Banner.css";
import hero1 from "../../../assets/video/hero-video-1.webm";
import Form from "./Form";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="z-0 sm:h-[756px] h-[540px] overflow-hidden">
        <video autoPlay loop muted className="absolute z-0">
          <source src={hero1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay absolute top-0 left-0 w-[100%] sm:h-[50%] md:h-[85.5%] h-[100%]"></div>
        <div className="absolute sm:relative grid grid-cols-12 sm:grid-cols-2  items-center z-10 w-full h-full">
          <div className="col-span-8 px-12">
            <Slider />
          </div>
          <div className="bg-black h-full sm:h-[82%] col-span-4 p-10">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
