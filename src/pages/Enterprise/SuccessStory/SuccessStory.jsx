import merchant from '../../../assets/enterprise/merchant-success-story.png'

const SuccessStory = () => {
    return (
        <div className='mt-20 bg-gray-100 pb-16'>
            <h1 className='text-4xl text-center md:text-3xl sm:text-2xl font-bold text-secondary sm:p-5 md:px-5 hidden '>মার্চেন্টদের সফলতার গল্প</h1>

            <div className=' container mx-auto grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5'>

                <div className='p-5 ml-20  mx-10 sm:mx-5 -mt-14 sm:-mt-0'>
                    <img src={merchant} className='w-full' alt="" />
                </div>

                <div className=' my-40 md:my-10 lg:my-10 sm:my-5 '>
                    <h1 className='text-4xl md:text-3xl sm:text-xl font-bold text-secondary sm:px-5 md:px-5 sm:hidden'>মার্চেন্টদের সফলতার গল্প</h1>
                    <p className='text-secondary font-bold mt-10  sm:mt-0 sm:px-5 md:px-5'>আমাদের ডিস্ট্রিবিউশনে রেডএক্স গুরুত্বপূর্ণ সহযোগী</p>

                    <h1 className='text-secondary mt-10 sm:mt-0 text-[16px] sm:px-5 md:px-5 sm:pt-3'>লজিস্টিকস এবং ডিস্ট্রিবিউশন ম্যানেজমেন্টে রেডএক্স একটি অসম্ভব রকমের জনপ্রিয় নাম। বিগত কয়েকমাস ধরে রেডএক্সের সাথে আমরা কাজ করছি। এই স্বল্প সময়ের মধ্যেই র‍্যাংগস ইন্ডাস্ট্রিজ লিমিটেডের পণ্য ডিস্ট্রিবিউশন ও ডেলিভারির জন্য রেডএক্স আমাদের কাছে সবচেয়ে বিশ্বস্ত হয়ে উঠেছে। আশা করি, রেডএক্সের সাথে এই সম্পর্ক আরও দীর্ঘমেয়াদী এবং ব্যবসায়িকভাবে সফল হয়ে উঠবে।</h1>

                    <h1 className='text-secondary font-bold mt-10 sm:mt-0 sm:px-5 md:px-5 sm:pt-3'>সালমান এ খান</h1>

                    <p className='text-secondary sm:px-5 md:px-5 '>হেড অফ ব্র্যান্ড, লোকাল ইলেক্ট্রনিক্স শিল্প প্রতিষ্ঠান</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;