import NavItem from "./NavItem/NavItem";
import { useLocation } from "react-router-dom";

const NavItems = () => {
  const activePathName = useLocation().pathname;
  return (
    <>
      <NavItem
        pathName={"/enterprise"}
        activePathName={activePathName}
        navItemName={"Enterprise"}
      />
      <NavItem
        pathName={"/courier"}
        activePathName={activePathName}
        navItemName={"Courier"}
      />
    </>
  );
};

export default NavItems;
