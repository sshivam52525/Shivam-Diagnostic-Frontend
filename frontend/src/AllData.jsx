import DrawerAllDataBar from './Components/CommonComponents/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/CommonComponents/Footer.jsx';

const AllData = () => {
    return (
        <>
            <ScrollToTop />
            <DrawerAllDataBar />
            <Outlet />
            <Footer/>
        </>
    );
};

export default AllData;
