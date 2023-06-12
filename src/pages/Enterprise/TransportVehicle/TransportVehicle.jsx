import { useState } from "react";
import Track from "./Track/Track";
import CoveredVan from "./CoveredVan/CoveredVan";
import "./TransportVehicle.css";


const TransportVehicle = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className="mt-44 sm:mt-10 p-5">
            <h1 className="text-4xl md:text-3xl sm:text-2xl sm:p-5 font-bold text-secondary text-center">আপনার লক্ষ্যে পৌঁছাতে আমাদের রয়েছে বিভিন্ন সাইজের ট্রান্সপোর্ট ভেহিকেল</h1>

            <div className="flex justify-center container mx-auto mt-20 sm:mt-10">
                <button onClick={() => toggleTab(1)} type="" className={toggleState === 1 ? "tabs active-tabs text-xl font-semibold" : "tabs"}>Open</button>
                <button onClick={() => toggleTab(2)} type="" className={toggleState === 2 ? "tabs active-tabs text-xl font-semibold" : "tabs"}>Covered</button>

            </div>
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
                <Track></Track>
            </div>
            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                <CoveredVan></CoveredVan>
            </div>
        </div>
    );
};

export default TransportVehicle;