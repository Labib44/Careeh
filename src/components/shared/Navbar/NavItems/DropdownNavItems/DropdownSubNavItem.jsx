import { Link } from "react-router-dom";

const DropdownSubNavItem = ({
    pathName,
    dropdownSubNavItemName,
    isMobile = false,
    setIsMobileMenu,
    isMobileMenu,
}) => {
    return (
        <li
            className={`${isMobile ? "py-2" : "pt-0"}`}
            onClick={() => setIsMobileMenu && setIsMobileMenu(!isMobileMenu)}
        >
            <Link
                to={pathName}
                className="hover:border-radius-sub-menu text-gray-600  hover:bg-gray-50 active:border-radius-sub-menu active:bg-white text-base px-8 focus:bg-gray-50 "
            >
                {dropdownSubNavItemName}
            </Link>
        </li>
    );
};

export default DropdownSubNavItem;
