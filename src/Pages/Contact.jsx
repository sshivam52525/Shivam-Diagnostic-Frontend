
import Wrapper from "../Components/Wrapper";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { WifiCalling3Outlined, EmailOutlined } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";

const Contact = () => {
    return (
        <Wrapper>
            <Box
                className="contact-container"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: '2rem',
                    gap: '2rem',
                }}
            >
                <Box className="contact-info" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h4" sx={{ color: '#203550', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Contact Information
                    </Typography>
                    <Box className="info-item" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <LocationOnIcon sx={{ color: '#203550', marginRight: '1rem' }} />
                        <Typography variant="body1" sx={{ color: '#203550' }}>
                            33/3, New Shimlapuri, Ludhiana, Punjab 141003.
                        </Typography>
                    </Box>
                    <Box className="info-item" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <WifiCalling3Outlined sx={{ color: '#203550', marginRight: '1rem' }} />
                        <Typography variant="body1" sx={{ color: '#203550' }}>
                            +91 98147-19180
                        </Typography>
                    </Box>
                    <Box className="info-item" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <EmailOutlined sx={{ color: '#203550', marginRight: '1rem' }} />
                        <Typography variant="body1" sx={{ color: '#203550' }}>
                        shivamlab786@gmail.com
                        </Typography>
                    </Box>
                </Box>
                <Box className="contact-map" sx={{ width: { xs: '100%', sm: '80%', md: '600px' }, maxWidth: '600px' }}>
                    
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.1864008962393!2d75.87331907779539!3d30.853455874526347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a829f501e2ea5%3A0x956ac49b3ee098cf!2sShivam%20Diagnostic%20Laboratory!5e0!3m2!1sen!2sin!4v1777639250586!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{border:0, borderRadius:'15px'}}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </Box>
            </Box>
        </Wrapper>
    );
};

export default Contact;
