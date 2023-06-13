import CoveredVanCard from "./CoveredVanCard";
import van1 from "../../../../assets/enterprise/covered-van1.png";
import van2 from "../../../../assets/enterprise/covered-van2.png";
import van3 from "../../../../assets/enterprise/covered-van3.png";

const CoveredVan = () => {
  const coveredVanData = [
    {
      id: 1,
      title: "9 Feet coveredVAN",
      logo: van1,
      discription: "1 tonne capacity",
    },
    {
      id: 2,
      title: "12 Feet coveredVAN",
      logo: van1,
      discription: "2 tonne capacity",
    },
    {
      id: 3,
      title: "14 Feet coveredVAN",
      logo: van1,
      discription: "3.5 tonne capacity",
    },
    {
      id: 4,
      title: "16 Feet coveredVAN",
      logo: van2,
      discription: "7.5 tonne capacity",
    },
    {
      id: 5,
      title: "18 Feet coveredVAN",
      logo: van2,
      discription: "15 tonne capacity",
    },
    {
      id: 6,
      title: "23 Feet coveredVAN",
      logo: van3,
      discription: "25 tonne capacity",
    },
  ];
  return (
    <div className="container mx-auto my-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 gap-4 p-5">
        {coveredVanData.map((vanData) => (
          <CoveredVanCard key={vanData.id} vanData={vanData}></CoveredVanCard>
        ))}
      </div>
    </div>
  );
};

export default CoveredVan;
