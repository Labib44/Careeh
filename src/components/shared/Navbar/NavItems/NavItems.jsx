import NavItem from "./NavItem/NavItem";
import { useLocation } from "react-router-dom";

const NavItems = () => {
  const activePathName = useLocation().pathname;
  return (
    <>
      <NavItem
        pathName={"/"}
        activePathName={activePathName}
        navItemName={"Company"}
      />
      <NavItem
        pathName={"/enterprise"}
        activePathName={activePathName}
        navItemName={"Enterprise"}
      />
      <NavItem
        pathName={"/courier"}
        activePathName={activePathName}
        navItemName={"Personal"}
      />
    </>
  );
};

export default NavItems;
