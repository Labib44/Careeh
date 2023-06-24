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
                navItemName={"Enterprise"}
                isMobile
                setIsMobileMenu={setIsMobileMenu}
                isMobileMenu={isMobileMenu}
            />
            <NavItem
                pathName={"/courier"}
                activePathName={activePathName}
                navItemName={"Courier"}
                isMobile
                setIsMobileMenu={setIsMobileMenu}
                isMobileMenu={isMobileMenu}
            />
        </>
    );
};


export default MobileMenu;
