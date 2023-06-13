import track1 from "../../../../assets/enterprise/track1.png";
import track2 from "../../../../assets/enterprise/track2.png";
import track3 from "../../../../assets/enterprise/track3.png";
import TrackCard from "./TrackCard";

const Track = () => {
  const tracksData = [
    {
      id: 1,
      title: "9 Feet Open Pickup",
      logo: track1,
      discription: "1 tonne capacity",
    },
    {
      id: 2,
      title: "12 Feet Open Pickup",
      logo: track1,
      discription: "2 tonne capacity",
    },
    {
      id: 3,
      title: "14 Feet Open Pickup",
      logo: track1,
      discription: "3.5 tonne capacity",
    },
    {
      id: 4,
      title: "16 Feet Open Pickup",
      logo: track2,
      discription: "7.5 tonne capacity",
    },
    {
      id: 5,
      title: "18 Feet Open Pickup",
      logo: track2,
      discription: "15 tonne capacity",
    },
    {
      id: 6,
      title: "23 Feet Open Pickup",
      logo: track3,
      discription: "25 tonne capacity",
    },
  ];
  return (
    <div className="container mx-auto my-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 gap-4 p-5">
        {tracksData.map((trackData) => (
          <TrackCard key={trackData.id} trackData={trackData}></TrackCard>
        ))}
      </div>
    </div>
  );
};

export default Track;
