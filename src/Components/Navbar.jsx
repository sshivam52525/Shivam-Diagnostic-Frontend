
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const navItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Packages',
        link: '/packages'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
];

function DrawerAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.4rem', position: 'relative' }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    <NavLink to="/">
                        <img className='w-[15rem] py-3' src="./src/assests/Logo.png" alt="Logo" />
                    </NavLink>
                </Typography>
                <IconButton onClick={handleDrawerToggle} sx={{ position: 'absolute', right: '0.4rem' }}>
                    <CloseIcon sx={{
                        color: '#203550',
                        fontSize: {
                            xs: '2rem',
                            sm: '2.5rem',
                        }
                    }} />
                </IconButton>
            </Box>
            <Divider />
            <List >
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton component={NavLink} to={item.link} sx={{ textAlign: 'center' }} onClick={handleDrawerToggle}>
                            <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: '15px', fontWeight: '700', color: '#203550' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ marginTop: '1rem' }}>
                <Button sx={{ color: 'white', backgroundColor: '#3A7D5F', paddingX: '2rem', paddingY: '0.9rem' }}>
                    Make A Appointment
                </Button>
            </Box>
        </Box>
    );

    return (
        <>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backgroundColor: '#FFFFFF',
                position: { xs: "static" }
            }}>
                <Container >
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
                        >
                            <NavLink to={'/'}>
                                <img className='w-[20rem] py-3 cursor-pointer' src="./src/assests/Logo.png" alt="Logo" />
                            </NavLink>

                        </Typography>



                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: { xs: 'start', sm: 'start', md: 'center' },
                            justifyContent: 'center',
                            gap: { xs: '1rem', sm: '1.5rem', md: '1.2rem', lg: '1.5rem' },
                            padding: { xs: '1rem', md: '0.5rem' }
                        }}>

                            <div className='flex items-center '>
                                <span className='outline-1 outline-offset-2 outline-[#DDE3E8] p-1 rounded-full'>
                                    <WifiCalling3OutlinedIcon sx={{ color: '#203550' }} />
                                </span>
                                <div className='flex flex-col ml-2'>
                                    <Typography variant="h8" sx={{ color: '#203550', fontSize: '13px' }}>
                                        Phone
                                    </Typography>
                                    <Typography variant="h8" sx={{ color: '#203550', fontSize: '15px' }}>
                                        +1 234 567 890
                                    </Typography>
                                </div>
                            </div>

                            <div className='flex items-center '>
                                <span className='outline-1 outline-offset-2 outline-[#DDE3E8] p-1 rounded-full'>
                                    <EmailOutlinedIcon sx={{ color: '#203550' }} />
                                </span>
                                <div className='flex flex-col ml-2'>
                                    <Typography variant="h8" sx={{ color: '#203550', fontSize: '13px' }}>
                                        Email
                                    </Typography>
                                    <Typography variant="h8" sx={{ color: '#203550', fontSize: '15px' }}>
                                        info@example.com
                                    </Typography>
                                </div>
                            </div>

                            <div className='flex items-center '>
                                <span className='outline-1 outline-offset-2 outline-[#DDE3E8] p-1 rounded-full'>
                                    <LocationOnOutlinedIcon sx={{ color: '#203550' }} />
                                </span>
                                <div className='flex flex-col ml-2'>
                                    <Typography variant="h8" sx={{ color: '#203550', fontSize: '13px' }}>
                                        Address
                                    </Typography>
                                    <Typography variant="h8" sx={{ color: '#203550', fontSize: '15px' }}>
                                        123 Main St, Anytown
                                    </Typography>
                                </div>
                            </div>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>

            {/* LOWER NAVBAR */}
            <AppBar position="sticky" sx={{ top: 0, backgroundColor: '#FFFFFF', borderBottom: '1px solid #DDE3E8' }}>
                <div className="navbar">
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            display: { xs: 'block', sm: 'block', md: 'none' },
                            justifyContent: { xs: 'flex-start' },
                            marginLeft: { xs: '0', sm: '1.5rem', md: '0' },

                        }}
                    >
                        <NavLink to="/">
                            <img className='w-[60rem] sm:w-[50rem] ' src="./src/assests/Logo.png" alt="Logo" />
                        </NavLink>
                    </Typography>

                    <div className="flex items-center  justify-between max-w-[72rem] m-auto w-full">
                        <Box sx={{
                            display: { xs: 'none', sm: 'none', md: 'flex' },
                            gap: { md: '0.8rem', lg: '2rem' },
                            marginLeft: { md: '1.5rem', lg: '0' },
                        }}>
                            {navItems.map((item) => (
                                <Button key={item.name} component={NavLink} to={item.link} sx={{ color: '#203550', fontSize: '15px', fontWeight: '700' }}>
                                    {item.name}
                                </Button>
                            ))}
                        </Box>
                        <div>
                            <Box sx={{
                                display: { xs: 'none', md: 'block' },
                                marginRight: { md: '1.3rem', lg: '0' },
                            }}>
                                <Button sx={{ color: 'white', backgroundColor: '#3A7D5F', paddingX: '2rem', paddingY: '0.9rem' }}>
                                    Make A Appointment
                                </Button>
                            </Box>
                        </div>
                    </div>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: { md: 'none' },
                            color: '#203550',
                        }}
                    >
                        <MenuIcon sx={{
                            color: '#203550',
                            fontSize: {
                                xs: '2rem',
                                sm: '2.5rem',
                            }
                        }} />
                    </IconButton>
                </div>
            </AppBar>

            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '100%', sm: '80%' } },
                    }}
                    anchor="right"
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    );
}

export default DrawerAppBar;
