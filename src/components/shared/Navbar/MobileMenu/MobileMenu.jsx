import { useLocation } from "react-router-dom";
import NavItem from "./../NavItems/NavItem/NavItem";

const MobileMenu = ({ setIsMobileMenu, isMobileMenu }) => {
    const activePathName = useLocation().pathname;
    return (
        <>
            <NavItem
                pathName={"/"}
                activePathName={activePathName}
                navItemName={"Home"}
                isMobile
                setIsMobileMenu={setIsMobileMenu}
                isMobileMenu={isMobileMenu}
            />
            <NavItem
                pathName={"/enterprise"}
                activePathName={activePathName}
                navItemName={"এন্টারপ্রাইজ"}
                isMobile
                setIsMobileMenu={setIsMobileMenu}
                isMobileMenu={isMobileMenu}
            />
            <NavItem
                pathName={"/courier"}
                activePathName={activePathName}
                navItemName={"কুরিয়ার"}
                isMobile
                setIsMobileMenu={setIsMobileMenu}
                isMobileMenu={isMobileMenu}
            />
           
        </>
    );
};


export default MobileMenu;
