import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropdownNavItems = ({
    dropDownNavItemName,
    children,
    isMobile = false,
}) => {
    const [isDropdownMenu, setIsDropDownMenu] = useState(false);

    return (
        <li
            className={`flex items-center relative ${isMobile ? "py-2" : "py-4 px-5"}`}
            onClick={() => setIsDropDownMenu(!isDropdownMenu)}
        >
            <Link
                to={"/"}
                className={`hover:bg-transparent text-white active:bg-transparent focus:bg-transparent hover:text-primary font-medium group gap-1 transition-all text-sm ${
                    isMobile ? "flex" : ""
                }`}
                onClick={() => setIsDropDownMenu(!isDropdownMenu)}
            >
                {dropDownNavItemName}
            </Link>
            <label>
                <FaChevronDown
                    className={`text-gray-800 text-[14px] ${
                        isMobile ? "mt-1" : "mt-0.5"
                    } mt-0.5 ml-[3px] font-bold `}
                />
            </label>
            {isDropdownMenu && children}
        </li>
    );
};

export default DropdownNavItems;
