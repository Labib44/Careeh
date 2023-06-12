import logo from '../../../assets/home/new-redx-logo.svg'
import fb from '../../../assets/footer/fb-icon.svg'
import linkedIn from '../../../assets/footer/linkedIn-icon.svg'
import youtube from '../../../assets/footer/yt-icon.svg'
import google from '../../../assets/footer/google-play-badge.svg'
import { Link } from 'react-router-dom';
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
        <footer className="p-6 py-20 bg-[#f5f5f5]">
            <div className="container grid grid-cols-4 mx-auto gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-2 py-20 md:hidden sm:hidden">
                <div className="flex flex-col space-y-4">
                    <div>
                        <img src={logo} className=' w-28 h-10' alt="" />
                    </div>
                    <h1 className='text-[#000000a6] text-[16px] font-serif'>দ্রুততম সল্যুশনের জন্য রেডএক্স অ্যাপটি ডাউনলোড করুন</h1>
                    <div>
                        <img src={google} className=' w-44 h-14' alt="" />
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-xl">গুরুত্বপূর্ণ লিংক</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <Link to={'/courier'} className='text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1'>কুরিয়ার</Link>
                        <Link to={'/enterprise'} className='text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1'>এন্টারপ্রাইজ</Link>
                        <Link className='text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1'>কভারেজ এরিয়া</Link>
                        <Link className='text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1'>প্রাইভেসী পলিসি</Link>
                        <Link className='text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1'>FAQs</Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-xl">যোগাযোগ</h2>
                    <div className="flex flex-col space-y-2 text-sm ">
                        <h1 className='text-[#000000a6] text-[16px] pt-2'>বি ১১২, রোড ০৬, মহাখালি ডিওএইচএস, ঢাকা-১২০৬</h1>
                        <h1 className='text-[#000000a6] text-[16px] pt-2'>০৯৬১০০০৭৩৩৯</h1>
                        <h1 className='text-[#000000a6] text-[16px] pt-2'>contact@redx.com.bd</h1>

                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-xl px-5">সংযুক্ত হন</h2>
                    <div className="flex text-sm p-5">
                        <img src={fb} className=' w-8 h-8 mr-2' alt="" />
                        <img src={linkedIn} className=' w-8 h-8 mr-2' alt="" />
                        <img src={youtube} className=' w-8 h-8' alt="" />
                    </div>
                    <p className='text-[#000000a6] pt-2'>© Redx 2023. All rights reserved</p>
                </div>
            </div>

            {/* <div className=''>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h2 className="font-bold text-xl">গুরুত্বপূর্ণ লিংক</h2>
                      
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="flex flex-col space-y-2 text-sm">
                                <Link to={'/courier'} className='text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1'>কুরিয়ার</Link>
                                <Link to={'/enterprise'} className='text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1'>এন্টারপ্রাইজ</Link>
                                <Link className='text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1'>কভারেজ এরিয়া</Link>
                                <Link className='text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1'>প্রাইভেসী পলিসি</Link>
                                <Link className='text-[#000000a6] text-[16px] font-serif pt-2 hover:underline underline-offset-1'>FAQs</Link>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography><h2 className="font-bold text-xl">যোগাযোগ</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="flex flex-col space-y-2 text-sm ">
                                <h1 className='text-[#000000a6] text-[16px] pt-2'>বি ১১২, রোড ০৬, মহাখালি ডিওএইচএস, ঢাকা-১২০৬</h1>
                                <h1 className='text-[#000000a6] text-[16px] pt-2'>০৯৬১০০০৭৩৩৯</h1>
                                <h1 className='text-[#000000a6] text-[16px] pt-2'>contact@redx.com.bd</h1>

                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography><h2 className="font-bold text-xl">সংযুক্ত হন</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="flex text-sm p-5">
                                <img src={fb} className=' w-8 h-8 mr-2' alt="" />
                                <img src={linkedIn} className=' w-8 h-8 mr-2' alt="" />
                                <img src={youtube} className=' w-8 h-8' alt="" />
                            </div>
                            <p className='text-[#000000a6] pt-2'>© Redx 2023. All rights reserved</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <div className='w-44 h-14 container mx-auto mt-5'>
                    <img src={google} className=' w-44 h-14' alt="" />
                </div>

            </div> */}



        </footer>

    );
};

export default Footer;
