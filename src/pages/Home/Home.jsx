import { useEffect } from "react";
import Brands from "./Brands/Brands";
import Service from "./Service/Service";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Brands />
      <Service />
    </div>
  );
};

export default Home;
