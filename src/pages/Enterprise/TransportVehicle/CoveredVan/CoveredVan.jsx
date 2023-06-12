import CoveredVanCard from "./CoveredVanCard";
import van1 from '../../../../assets/enterprise/covered-van1.png'
import van2 from '../../../../assets/enterprise/covered-van2.png'
import van3 from '../../../../assets/enterprise/covered-van3.png'


const CoveredVan = () => {
    const coveredVanData = [
        {
            id: 1,
            title: '৯ ফিট কাভার্ড ভ্যান',
            logo: van1,
            discription: '১ টন ধারনক্ষমতা সম্পন্ন',

        },
        {
            id: 2,
            title: '১২ ফিট কাভার্ড ভ্যান',
            logo: van1,
            discription: '২ টন ধারনক্ষমতা সম্পন্ন',

        },
        {
            id: 3,
            title: '১৪ ফিট কাভার্ড ভ্যান',
            logo: van1,
            discription: '৩.৫ টন ধারনক্ষমতা সম্পন্ন',

        },
        {
            id: 4,
            title: '১৬ ফিট কাভার্ড ভ্যান',
            logo: van2,
            discription: '৭.৫ টন ধারনক্ষমতা সম্পন্ন',

        },
        {
            id: 5,
            title: '১৮ ফিট কাভার্ড ভ্যান',
            logo: van2,
            discription: '১৫ টন ধারনক্ষমতা সম্পন্ন',

        },
        {
            id: 6,
            title: '২৩ ফিট কাভার্ড ভ্যান',
            logo: van3,
            discription: '২৫ টন ধারনক্ষমতা সম্পন্ন',

        },
    ]
    return (
        <div className='container mx-auto my-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 gap-4 p-5'

            >
                {
                    coveredVanData.map(vanData => <CoveredVanCard
                        key={vanData.id}
                        vanData={vanData}
                    ></CoveredVanCard>)
                }
            </div>


        </div>
    );
};

export default CoveredVan;