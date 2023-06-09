import show from '../../../assets/enterprise/BataShow.webp'

const Footwear = () => {
    return (
        <div className='container mx-auto mt-20'>

            <div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 '>

                <div className='mx-20 mt-5'>
                    <h1 className='text-5xl md:text-3xl sm:text-2xl font-bold text-secondary'>গ্লোবাল ফুটওয়্যার ব্র্যান্ড ব্যবসায়িক প্রসারে আমাদের অবদান</h1>
                    <p className='text-xl text-secondary mt-10'>প্রধান ডিস্ট্রিবিউশন হাব থেকে দেশব্যাপী ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য ডেলিভারি করে থাকে রেডএক্স।</p>

                    <div className='flex justify-between mt-10'>
                        <div className='mr-12'>
                            <h1 className='text-secondary font-bold text-4xl'>৮০+</h1>
                            <p className='text-secondary text-xl mt-3'>ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য পৌঁছায় রেডএক্স</p>
                        </div>
                        <div>
                            <h1 className='text-secondary font-bold text-4xl'>১৪*</h1>
                            <p className='text-secondary text-xl mt-3'>সারাদেশে পূর্বের চেয়ে ১৪ গুন বেশি পার্সেল ডেলিভারি</p>
                        </div>
                    </div>
                </div>

                <div className='p-5 mx-24'>
                    <img src={show} className='w-full ' alt="" />
                </div>

            </div>
        </div>
    );
};

export default Footwear;