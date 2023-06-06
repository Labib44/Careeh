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
                        ? "text-primary"
                        : "text-white"
                }  transition-all active:bg-transparent focus:bg-transparent hover:text-primary text-sm font-medium `}
            >
                {navItemName}
            </Link>
        </li>
    );
};

export default NavItem;
