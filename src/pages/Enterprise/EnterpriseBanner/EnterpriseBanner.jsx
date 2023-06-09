import './EnterpriseBanner.css';
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import flag from '../../../assets/enterprise/bangladesh-flag.png'


const EnterpriseBanner = () => {
    return (
        <div className='bannerImg'>

            <div className=" container mx-auto py-20 grid grid-cols-2  sm:grid-cols-1 gap-5">
                <div className="text-white mx-10">
                    <h1 className="text-5xl md:text-3xl sm:text-2xl font-bold p-5">দেশ সেরা <span className=" text-primary">এন্টারপ্রাইজ</span> </h1>
                    <h1 className="text-5xl md:text-3xl sm:text-2xl font-bold pt-1 px-5">লজিস্টিকস পৌঁছাবে</h1>
                    <h1 className="text-5xl md:text-3xl sm:text-2xl font-bold py-1 px-5 "> আপনার লক্ষ্যে</h1>
                    <div className=' flex p-2'>
                        <FaCheckCircle className='text-teal-300 w-5 h-5 mr-2 pt-1' /> <p className='text-xl'>দেশব্যাপী লজিস্টিক্স নেটওয়ার্ক</p>
                    </div>
                    <div className=' flex p-2'>
                        <FaCheckCircle className='text-teal-300 w-5 h-5 mr-2 pt-1' /> <p className='text-xl'>মাত্র ৩ ঘণ্টায় বাণিজ্যিক ট্রাক</p>
                    </div>
                    <div className=' flex p-2'>
                        <FaCheckCircle className='text-teal-300 w-5 h-5 mr-2 pt-1' /> <p className='text-xl'>সুরক্ষিত পরিবহনের নিশ্চয়তা</p>
                    </div>
                    <div className=' flex sm:flex-wrap p-2 mt-5'>
                        <p className='text-xl'>সরাসরি আমাদের সেলস টিম কে কল করুনঃ </p>
                        <span className=' flex text-xl'>
                            <FaPhoneAlt className='text-primary w-6 h-6 mx-2 pt-1' /> <p className='text-primary'>০৯৬১০০০৭৩৩৯</p>
                        </span>

                    </div>


                </div>

                <div className="bg-secondary text-white rounded-md p-10 md:p-5 mx-10 md:mx-5">
                    <h1 className='text-center font-bold'>বিনামুল্যে সাইন-আপ করুন মাত্র দুই মিনিটে</h1>
                    <div>
                        <form action="" className="flex flex-col mx-auto ">

                            <div className="h-14 mt-12">
                                <div className="flex h-full border rounded-md border-primary">
                                    <span className=" text-secondary bg-white flex items-center rounded-l-md border border-r-2 h-full p-3">
                                        <img src={flag} alt="" />
                                        <p className='ml-2 text-xl'>+880</p>
                                    </span>
                                    <input id="email" type="text" placeholder="ফোন নম্বর" className="w-full h-full flex flex-1 outline-none rounded-r-md p-3" />
                                </div>
                            </div>
                            <button type="button" className="px-8 py-3 font-semibold rounded bg-primary mt-5 text-xl hover:bg-red-500">সাইন-আপ করুন</button>

                        </form>
                    </div>
                    <div className='grid grid-cols-3 sm:grid-cols-1 my-10'>
                        <hr className=' h-0.5 w-full border-t-0 bg-white ' />
                        <h1 className='text-xl -mt-3 px-16 md:px-5 sm:my-3'>অথবা,</h1>
                        <hr className='h-0.5 w-full border-t-0 bg-white ' />
                    </div>
                    <h1 className='font-bold text-center'>মুভমেন্ট স্ট্যাটাস ট্র্যাক করুন</h1>

                        <div className="flex h-14 mt-10">
                            <input type="text" name="parcel" id="parcel" placeholder="পার্সেল আইডি দিন" className="flex flex-1 text-left border sm:text-sm p-3 rounded-l-md " />
                            <span className="flex items-center px-5 pointer-events-none sm:text-sm rounded-r-md bg-primary text-secondary text-xl ">ট্র্যাক</span>
                        </div>
                   
                </div>
            </div>

        </div>

    );
};

export default EnterpriseBanner;