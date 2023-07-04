import { useEffect } from "react";
import Contact from "./Contact/Contact";
import EnterpriseBanner from "./EnterpriseBanner/EnterpriseBanner";
import Footwear from "./Footwear/Footwear";
import LogoSlider from "./LogoSlider/LogoSlider";
import Media from "./Media/Media";
import Partner from "./Partner/Partner";
import Service from "./Services/Service";
import SuccessStory from "./SuccessStory/SuccessStory";
import TransportVehicle from "./TransportVehicle/TransportVehicle";


const Enterprise = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <div>
        <EnterpriseBanner />
        <LogoSlider />
        <Service />
        <Footwear />
        <TransportVehicle />
        <SuccessStory />
        <Contact />
        <Partner />
        <Media />
      </div>
    </>
  );
};

export default Enterprise;
