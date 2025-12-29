
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
                            123 Healthway Avenue, Suite 456, Meditown, USA
                        </Typography>
                    </Box>
                    <Box className="info-item" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <WifiCalling3Outlined sx={{ color: '#203550', marginRight: '1rem' }} />
                        <Typography variant="body1" sx={{ color: '#203550' }}>
                            +1 234 567 890
                        </Typography>
                    </Box>
                    <Box className="info-item" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <EmailOutlined sx={{ color: '#203550', marginRight: '1rem' }} />
                        <Typography variant="body1" sx={{ color: '#203550' }}>
                            contact@example.com
                        </Typography>
                    </Box>
                </Box>
                <Box className="contact-map" sx={{ width: { xs: '100%', sm: '80%', md: '600px' }, maxWidth: '600px' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225824025184!2d-122.4194155846813!3d37.77492927975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a2798e65%3A0x28a881d3a58b8d4e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1639556312560!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '15px' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Box>
            </Box>
        </Wrapper>
    );
};

export default Contact;
