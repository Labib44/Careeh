import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import NavItems from "./NavItems/NavItems";
import MobileMenu from "./MobileMenu/MobileMenu";

// import { FaPhoneAlt } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import logo from "../../../assets/logo/CareehLogo.png";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <header className="bg-white  z-50">
      <nav className="container mx-auto relative">
        <div className="flex flex-wrap items-center justify-between">
          {/* Navbar Left */}
          <div className="flex items-center sm:w-full">

            <div className="flex justify-between sm:w-full">
              <Link
                href="/"
                className="flex items-center text-4xl font-extrabold text-black sm:w-full"
              >
                <div>
                  <img src={logo} className="py-5 h-[85px]" alt="" />
                </div>
              </Link>
              <div className="hidden sm:block">
                <div className="flex items-center justify-end m-5 ">

                  <div className=" flex items-center border-l-4 border-r-4 px-5 ">
                    <CiGlobe className="text-gray-400 w-10 h-10 pt-1 sm:w-8 sm:h-8" />
                    <p className=" text-secondary text-xl">EN</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMobileMenu(!isMobileMenu)}
                    className="ml-4 sm:inline-flex md:inline-flex hidden items-center p-2 text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 "
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>


            {/* Navbar Center */}
            <div className="md:hidden sm:hidden">
              <ul className="flex flex-row">
                <NavItems />
              </ul>
            </div>
          </div>
          {/* Navbar Right */}
          <div className="flex">
            {/* <div className=" flex items-center mx-5">
              <FaPhoneAlt className="text-primary w-6 h-6 mx-2 pt-1" />
              <p className="text-primary">
                <span className=" text-secondary">Call</span> 09678844448
              </p>
            </div> */}
            <div className="sm:hidden block">
              <div className=" flex items-center border-l-4 border-r-4 mr-5 px-5 ">
                <CiGlobe className="text-gray-400 w-10 h-10 pt-1 " />
                <p className=" text-secondary text-xl">EN</p>
              </div>
            </div>

            <Link to={"/"}>
              <CustomButton
                buttonName={"Login"}
                cssStyle={
                  " px-10 py-3 text-primary hover:bg-red-100 font-bold outline outline-4 hover:outline-2 md:hidden sm:hidden mr-2 md:mr-0 sm:mr-0"
                }
              />
            </Link>

            <div className="sm:hidden block">
              <button
                type="button"
                onClick={() => setIsMobileMenu(!isMobileMenu)}
                className=" ml-4 sm:inline-flex md:inline-flex hidden items-center p-2 text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 "
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
          </div>
        </div>
      </nav>
      {isMobileMenu && (
        <ul className="pt-5 pb-8 hidden md:block sm:block bg-[#FFF8F7] absolute left-0 top-24 sm:top-[94px] z-50 w-full">
          <MobileMenu
            setIsMobileMenu={setIsMobileMenu}
            isMobileMenu={isMobileMenu}
          />

          <li className="ml-8 mt-5 mb-4">
            <CustomButton
              buttonName={"Login"}
              cssStyle={
                "bg-primary hover:bg-primary/90 text-white px-5 py-[14px] "
              }
            />
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
