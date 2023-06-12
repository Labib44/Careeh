import { Link } from "react-router-dom";

const NavItem = ({
    activePathName,
    navItemName,
    pathName,
    isMobile = false,
    setIsMobileMenu,
    isMobileMenu,
}) => {
    return (
        <li
            className={` ${isMobile ? "py-2" : "py-4 px-5"}`}
            onClick={() => setIsMobileMenu && setIsMobileMenu(!isMobileMenu)}
        >
            <Link
                to={pathName}
                className={`relative hover:bg-transparent ${
                    activePathName === pathName
                        ? "text-gray-400"
                        : "text-secoundry"
                }  transition-all ml-5 hover:border-b-4 border-red-600 p-5 font-medium `}
            >
                {navItemName}
            </Link>
        </li>
    );
};

export default NavItem;
