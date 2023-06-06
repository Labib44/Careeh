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
                pathName={"/about-us"}
                activePathName={activePathName}
                navItemName={"About Us"}
                isMobile
                setIsMobileMenu={setIsMobileMenu}
                isMobileMenu={isMobileMenu}
            />
            <NavItem
                pathName={"/blogs"}
                activePathName={activePathName}
                navItemName={"Blogs"}
                isMobile
                setIsMobileMenu={setIsMobileMenu}
                isMobileMenu={isMobileMenu}
            />
             <NavItem
                pathName={"/contact"}
                activePathName={activePathName}
                navItemName={"Contact"}
                isMobile
                setIsMobileMenu={setIsMobileMenu}
                isMobileMenu={isMobileMenu}
            />
        </>
    );
};


export default MobileMenu;
