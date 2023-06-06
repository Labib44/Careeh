import { Outlet } from "react-router-dom";
import Navbar from './../../components/shared/Navbar/Navbar';
import Footer from './../../components/shared/Footer/Footer';



const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
