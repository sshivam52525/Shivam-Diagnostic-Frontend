
import DrawerAllDataBar from './Components/CommonComponents/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/CommonComponents/Footer.jsx';
import ScrollToTopButton from './Components/CommonComponents/ScrollToTopButton.jsx';

const AllData = () => {
    return (
        <>
            <ScrollToTop />
            <DrawerAllDataBar />
            <Outlet />
            <Footer/>
            <ScrollToTopButton />
        </>
    );
};

export default AllData;
