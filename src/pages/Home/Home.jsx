import { useEffect } from "react";
import Brands from "./Brands/Brands";
import Service from "./Service/Service";
import LogisticPartner from "./LogisticPartner/LogisticPartner";
import LogisticService from "./LogisticService/LogisticService";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import Faq from "./Faq/Faq";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Brands />
      <Service />
      <LogisticPartner />
      <LogisticService />
      <CustomerReviews />
      <Faq />
    </div>
  );
};

export default Home;
