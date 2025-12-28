import DrawerAllDataBar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';

const AllData = () => {
    return (
        <>
            <ScrollToTop />
            <DrawerAllDataBar />
            <Outlet />
        </>
    );
};

export default AllData;
