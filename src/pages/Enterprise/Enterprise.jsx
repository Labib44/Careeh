import Contact from "./Contact/Contact";
import EnterpriseBanner from "./EnterpriseBanner/EnterpriseBanner";
import Footwear from "./Footwear/Footwear";
import Media from "./Media/Media";
import Partner from "./Partner/Partner";
import Service from "./Services/Service";
import SuccessStory from "./SuccessStory/SuccessStory";



const Enterprise = () => {
    return (
        <>
            <div className="mt-24">
                <EnterpriseBanner/>
                <Service/>
                <Footwear/>
                <SuccessStory/>
                <Contact/>
                <Partner/>
                <Media/>
            </div>
        </>
    );
};

export default Enterprise;