import { useEffect } from "react";
import Brands from "./Brands/Brands";
import Service from "./Service/Service";
import LogisticPartner from "./LogisticPartner/LogisticPartner";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Brands />
      <Service />
      <LogisticPartner />
    </div>
  );
};

export default Home;
