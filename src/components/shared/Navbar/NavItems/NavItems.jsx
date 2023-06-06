import DropdownNavItems from "./DropdownNavItems/DropdownNavItems";
import DropdownSubNavItem from "./DropdownNavItems/DropdownSubNavItem";
import NavItem from "./NavItem/NavItem";
import { useLocation } from "react-router-dom";

const NavItems = () => {
    const activePathName = useLocation().pathname;
    return (
        <>
            <NavItem
                pathName={"/"}
                activePathName={activePathName}
                navItemName={"ব্যবসা"}
            />
            <NavItem
                pathName={"/personal"}
                activePathName={activePathName}
                navItemName={"ব্যক্তিগত"}
            />
            <DropdownNavItems dropDownNavItemName={"ড্রাইভার"}>
                <ul className="border-radius-menu menu lg:left-2 md:left-5 py-5 z-10 shadow bg-base-100 lg:w-72 md:w-60 w-40 md:mt-0  lg:mt-0 mt-4 ">
                    <DropdownSubNavItem
                        pathName={"/driver"}
                        dropdownSubNavItemName={"একজন পার্টনার ড্রাইভার হোন"}
                    />
                </ul>
            </DropdownNavItems>
            <DropdownNavItems dropDownNavItemName={"প্রতিষ্ঠান"}>
                <ul className="border-radius-menu menu lg:left-2 md:left-5 py-5 z-10 shadow bg-base-100 lg:w-72 md:w-60 w-40 md:mt-0  lg:mt-0 mt-4 ">
                    <DropdownSubNavItem
                        pathName={"/about-lalamove"}
                        dropdownSubNavItemName={"আমাদের সম্পর্কে"}
                    />
                    <DropdownSubNavItem
                        pathName={"/careers"}
                        dropdownSubNavItemName={"কর্ম জীবন "}
                    />
                    <DropdownSubNavItem
                        pathName={"/contact"}
                        dropdownSubNavItemName={"যোগাযোগ"}
                    />
                </ul>
            </DropdownNavItems>
        </>
    );
};

export default NavItems;
