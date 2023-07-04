import { useEffect, useState } from "react";
import DhakaSuburb from "./DhakaSuburb";
import InsideDhaka from "./InsideDhaka";
import OutsideDhaka from "./OutsideDhaka";


const CoverageAreaV2 = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (

        <div className="container mx-auto ">

            <div className="flex justify-center mt-20 sm:mt-10">
                <button
                    onClick={() => toggleTab(1)}
                    type=""
                    className={
                        toggleState === 1
                            ? "tabs active-tabs text-xl font-semibold"
                            : "tabs"
                    }
                >
                    Inside Dhaka
                </button>
                <button
                    onClick={() => toggleTab(2)}
                    type=""
                    className={
                        toggleState === 2
                            ? "tabs active-tabs text-xl font-semibold"
                            : "tabs"
                    }
                >
                    Dhaka Suburb
                </button>
                <button
                    onClick={() => toggleTab(3)}
                    type=""
                    className={
                        toggleState === 3
                            ? "tabs active-tabs text-xl font-semibold"
                            : "tabs"
                    }
                >
                    Outside Dhaka
                </button>

            </div>
            <div
                className={toggleState === 1 ? "content  active-content" : "content"}
            >
                <InsideDhaka></InsideDhaka>
            </div>
            <div
                className={toggleState === 2 ? "content  active-content" : "content"}
            >
                <DhakaSuburb></DhakaSuburb>
            </div>
            <div
                className={toggleState === 3 ? "content  active-content" : "content"}
            >
                <OutsideDhaka></OutsideDhaka>
            </div>

        </div>
    );
};

export default CoverageAreaV2;