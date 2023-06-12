import NavItem from "./NavItem/NavItem";
import { useLocation } from "react-router-dom";

const NavItems = () => {
    const activePathName = useLocation().pathname;
    return (
        <>
            <NavItem
                pathName={"/enterprise"}
                activePathName={activePathName}
                navItemName={"এন্টারপ্রাইজ"}
            />
            <NavItem
                pathName={"/courier"}
                activePathName={activePathName}
                navItemName={"কুরিয়ার"}
            />
  
        </>
    );
};

export default NavItems;
