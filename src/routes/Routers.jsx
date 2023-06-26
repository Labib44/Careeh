import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Courier from "../pages/Courier/Courier";
import CoverageArea from "../pages/CoverageArea/CoverageArea";
import Enterprise from "../pages/Enterprise/Enterprise";

/* All of Routers */
const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/enterprise",
        element: <Enterprise />,
      },
      {
        path: "/courier",
        element: <Courier />,
      },
      {
        path: "/coverage-area",
        element: <CoverageArea />,
      },
    ],
  },
]);

export default routers;
