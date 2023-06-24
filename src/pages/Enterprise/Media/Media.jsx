import MediaCard from "./MediaCard";
import icon1 from "../../../assets/enterprise/Redx-news1.png";
import icon2 from "../../../assets/enterprise/Redx-news2.png";
import icon3 from "../../../assets/enterprise/Redx-news3.webp";
import icon4 from "../../../assets/enterprise/Redx-news4.png";
import icon5 from "../../../assets/enterprise/Redx-news5.png";

const Media = () => {
  const mediaData = [
    {
      id: 1,
      date: "October 15, 2021",
      logo: icon1,
      discription:
        "Mix platform Banglamix plans to launch Careeh soon in Bangladesh",
    },
    {
      id: 2,
      date: "January 7, 2022",
      logo: icon2,
      discription:
        "Mix platform Banglamix plans to launch Careeh soon in Bangladesh",
    },
    {
      id: 3,
      date: "February 10, 2022",
      logo: icon3,
      discription:
        "Mix platform Banglamix plans to launch Careeh soon in Bangladesh",
    },
    {
      id: 4,
      date: "June 20, 2022",
      logo: icon4,
      discription:
        "Mix platform Banglamix plans to launch Careeh soon in Bangladesh",
    },
    {
      id: 5,
      date: "September 9, 2022",
      logo: icon5,
      discription:
        "Mix platform Banglamix plans to launch Careeh soon in Bangladesh",
    },
    {
      id: 6,
      date: "April 27, 2023",
      logo: icon3,
      discription:
        "Mix platform Banglamix plans to launch Careeh soon in Bangladesh",
    },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto my-10">
        <h1 className="text-secondary text-5xl md:text-3xl sm:text-2xl font-bold text-center p-5">
          <span className="text-primary">Careeh</span> in the news
        </h1>

        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {mediaData.map((medData) => (
            <MediaCard key={medData.id} medData={medData}></MediaCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
