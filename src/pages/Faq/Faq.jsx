import { useEffect } from "react";
import Banner from "./Banner/Banner";
import FrequentlyQuestion from "./FrequentlyQuestion/FrequentlyQuestion";

const Faq = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <Banner />
      <FrequentlyQuestion />
    </>
  );
};

export default Faq;
