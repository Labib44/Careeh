import service1 from '../../../assets/enterprise/service1.png'
import service2 from '../../../assets/enterprise/service2.png'
import service3 from '../../../assets/enterprise/service3.png'
import service4 from '../../../assets/enterprise/service4.png'
import service5 from '../../../assets/enterprise/service5.png'
import service6 from '../../../assets/enterprise/service6.png'
import ServiceCard from './ServiceCard'

const Service = () => {
    const servicesData = [
        {
            id: 1,
            title: 'সহজ পরিবহন প্রাপ্তি',
            logo: service1,
            discription: 'যেকোন সাইজের ভেহিকেল দেশের যেকোন জায়গায় পৌঁছাবে মাত্র তিন ঘন্টায়',

        },
        {
            id: 2,
            title: 'ফুল ট্রাকলোড/লেস-দ্যান-ট্রাকলোড',
            logo: service2,
            discription: 'আপনার ব্যবসার প্রয়োজন অনুযায়ী বেছে নিন ফুল ট্রাকলোড (এফটিএল) অথবা লেস দ্যান ট্রাকলোড (এলটিএল) ফ্রেইট সলিউশন।',

        },
        {
            id: 3,
            title: 'লোডিং এন্ড আনলোডিং সাপোর্ট',
            logo: service3,
            discription: 'ইন্ডাস্ট্রি ভেদে প্রয়োজনীয় লোডিং এবং আনলোডিং সাপোর্ট',

        },
        {
            id: 4,
            title: 'শিপমেন্ট ট্র্যাকিং',
            logo: service4,
            discription: 'ট্র্যাকিং এর মাধ্যমে শিপমেন্টের সর্বশেষ রিয়েল টাইম অবস্থান সম্পর্কে জানতে পারবেন',

        },
        {
            id: 5,
            title: 'মান্থলি ইনভয়েসিং',
            logo: service5,
            discription: 'ঝামেলাবিহীন পেমেন্ট পলিসি ও মাসিক ইনভয়েস সুবিধা',

        },
        {
            id: 6,
            title: 'সিকিউর হ্যান্ডলিং',
            logo: service6,
            discription: 'সর্বোচ্চ নিরাপদে শিপমেন্টের নিশ্চয়তা ও ক্ষতিপূরণ সুবিধা',

        },
    ]
    return (
        <div className='container mx-auto my-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-4 p-5'

            >
                {
                    servicesData.map(serviceData => <ServiceCard
                        key={serviceData.id}
                        serviceData={serviceData}
                    ></ServiceCard>)
                }
            </div>


        </div>
    );
};

export default Service;