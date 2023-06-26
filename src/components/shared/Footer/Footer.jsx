import fb from "../../../assets/footer/fb-icon.svg";
import linkedIn from "../../../assets/footer/linkedIn-icon.svg";
import youtube from "../../../assets/footer/yt-icon.svg";
import google from "../../../assets/footer/google-play-badge.svg";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo/CareehLogo.png";
// import { FaAngleUp } from "react-icons/fa6";
// import { FaAngleUp } from "react-icons/fa";

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Footer = () => {
  return (
    <footer className="p-6 py-20 sm:py-10 bg-[#f5f5f5]">
      <div className="container grid grid-cols-4 mx-auto gap-x-3 gap-y-8 sm:grid-cols-1 md:grid-cols-2 py-20 sm:py-10">
        <div className="flex flex-col space-y-4">
          <Link to={"/"}>
            <img src={logo} className=" w-40 h-auto" alt="logo" />
          </Link>
          <h1 className="text-[#000000a6] text-[16px] font-serif">
            Download our app for the fastest solutions
          </h1>
          <div>
            <img src={google} className=" w-44 h-14" alt="" />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-xl">Important links</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <Link
              to={"/courier"}
              className="text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1"
            >
              Courier
            </Link>
            <Link
              to={"/enterprise"}
              className="text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1"
            >
              Enterprise
            </Link>
            <Link to={"/coverage-areaV2"} className="text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1">
              Coverage Area
            </Link>
            <Link to={"/privacypolicy"} className="text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1">
              Privacy Policy
            </Link>
            <Link className="text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1">
              FAQs
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-xl">How to reach us</h2>
          <div className="flex flex-col space-y-2 text-sm ">
            <h1 className="text-[#000000a6] text-[16px] pt-2">
              Flat-2B, House-30, Road-12, Sector 10, Uttara, Dhaka - 1230
            </h1>
            <h1 className="text-[#000000a6] text-[16px] pt-2">09678844448</h1>
            <h1 className="text-[#000000a6] text-[16px] pt-2">
              info@careeh.com
            </h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl px-5">Get connected</h2>
          <div className="flex text-sm p-5">
            <img src={fb} className=" w-8 h-8 mr-2" alt="" />
            <img src={linkedIn} className=" w-8 h-8 mr-2" alt="" />
            <img src={youtube} className=" w-8 h-8" alt="" />
          </div>
          <p className="text-[#000000a6] pt-2">
            © <span className="text-primary">Careeh</span>{" "}
            {Date().slice(11, 15)}. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
