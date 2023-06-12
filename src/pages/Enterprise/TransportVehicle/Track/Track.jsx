import track1 from '../../../../assets/enterprise/track1.png'
import track2 from '../../../../assets/enterprise/track2.png'
import track3 from '../../../../assets/enterprise/track3.png'
import TrackCard from './TrackCard';


const Track = () => {
    const tracksData = [
        {
            id: 1,
            title: '৯ ফিট খোলা পিকআপ',
            logo: track1,
            discription: '১ টন ধারনক্ষমতা সম্পন্ন',

        },
        {
            id: 2,
            title: '১২ ফিট খোলাট্রাক',
            logo: track1,
            discription: '২ টন ধারনক্ষমতা সম্পন্ন',

        },
        {
            id: 3,
            title: '১৪ ফিট খোলাট্রাক',
            logo: track1,
            discription: '৩.৫ টন ধারনক্ষমতা সম্পন্ন',

        },
        {
            id: 4,
            title: '১৬ ফিট খোলাট্রাক',
            logo: track2,
            discription: '৭.৫ টন ধারনক্ষমতা সম্পন্ন',

        },
        {
            id: 5,
            title: '১৮ ফিট খোলাট্রাক',
            logo: track2,
            discription: '১৫ টন ধারনক্ষমতা সম্পন্ন',

        },
        {
            id: 6,
            title: '২৩ ফিট খোলাট্রাক',
            logo: track3,
            discription: '২৫ টন ধারনক্ষমতা সম্পন্ন',

        },
    ]
    return (
        <div className='container mx-auto my-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 gap-4 p-5'

            >
                {
                    tracksData.map(trackData =><TrackCard
                        key={trackData.id}
                        trackData={trackData}
                    ></TrackCard>)
                }
            </div>


        </div>
    );
};

export default Track;