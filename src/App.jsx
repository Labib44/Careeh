// import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routers from "./routes/Routers";
import "swiper/css";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";
// import AOS from "aos";
// import Preloader from './components/ui/Loader/Preloader';

const App = () => {
  // const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //     let timeoutId = null;
  //     const timeOut = () => {
  //         timeoutId = window.setTimeout(() => setLoader(false), 1500);
  //     };
  //     timeOut();
  //     AOS.init();
  //     AOS.refresh();
  //     return () => window.clearTimeout(timeoutId);
  // }, []);

  return (
    <>
      <Toaster />
      <RouterProvider router={routers} />
      <ScrollToTop className="topBtn" top="500" smooth component={<p style={{ color: "#FF6101" }}><FaArrowUp className="text-2xl mx-4"></FaArrowUp></p>} />
    </>
  );
};

export default App;
