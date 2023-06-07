import { AiOutlineDownload } from "react-icons/ai";

const CoverageAreaTableTop = () => {
    return (
        <div className="pb-5 bg-white flex justify-between sm:flex-col">
            <div className="flex items-center sm:flex-col">
                <h2 className="text-[22px] font-semibold">Inside Dhaka</h2>
                <div className="flex ml-14 md:ml-2 sm:ml-0 gap-3 sm:mt-4">
                    <div className="relative mt-1">
                        <select className="block p-2 pl-3 w-[200px]  sm:w-full text-sm text-gray-900 border-[2px] border-gray-300 rounded-md bg-white focus:ring-primary focus:border-primary  focus:outline-primary">
                            <option>Choose a country</option>
                            <option value="dhaka-suburb">Dhaka Suburb</option>
                            <option value="inside-dhaka">Inside Dhaka</option>
                            <option value="outside-dhaka">Outside Dhaka</option>
                        </select>
                    </div>
                    <div className="relative mt-1 ">
                        <input
                            type="text"
                            id="table-search"
                            className="block border-[2px] p-2 pl-3 w-[200px] text-sm text-gray-900  sm:w-full border-gray-300 rounded-md bg-white focus:ring-primary focus:border-primary  focus:outline-primary"
                            placeholder="area or district"
                        />
                    </div>
                </div>
            </div>
            <div className="relative mt-1 sm:flex md:flex md:items-center  sm:justify-center sm:mt-4">
                <button
                    type="button"
                    className="text-accent border-[2px] bg-transparent hover:border-primary hover:text-primary group focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-full text-sm px-5 py-2 text-center inline-flex items-center mb-2 md:mb-0 transition-all"
                >
                    <AiOutlineDownload className="text-accent group-hover:text-primary text-lg mr-1" />
                    Download
                </button>
            </div>
        </div>
    );
};

export default CoverageAreaTableTop;
