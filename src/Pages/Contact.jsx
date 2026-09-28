
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
                    flexDirection: { xs: 'column', lg: 'row' },
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: { xs: '1.5rem 1rem', md: '2rem' },
                    gap: { xs: 3, md: 4 },
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <Box className="contact-info" sx={{ textAlign: { xs: 'center', lg: 'left' }, width: { xs: '100%', lg: '42%' } }}>
                    <Typography variant="h4" sx={{ color: '#203550', fontWeight: 'bold', marginBottom: '1rem', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                        Contact Information
                    </Typography>
                    <Box className="info-item" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: { xs: 'center', lg: 'flex-start' }, flexWrap: 'wrap' }}>
                        <LocationOnIcon sx={{ color: '#203550', marginRight: '1rem' }} />
                        <Typography variant="body1" sx={{ color: '#203550', fontSize: { xs: '0.96rem', md: '1rem' }, maxWidth: { xs: '100%', sm: 320 } }}>
                            33/3, New Shimlapuri, Ludhiana, Punjab 141003.
                        </Typography>
                    </Box>
                    <Box className="info-item" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: { xs: 'center', lg: 'flex-start' }, flexWrap: 'wrap' }}>
                        <WifiCalling3Outlined sx={{ color: '#203550', marginRight: '1rem' }} />
                        <Typography variant="body1" sx={{ color: '#203550', fontSize: { xs: '0.96rem', md: '1rem' } }}>
                            +91 81460-03632
                        </Typography>
                    </Box>
                    <Box className="info-item" sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: { xs: 'center', lg: 'flex-start' }, flexWrap: 'wrap' }}>
                        <EmailOutlined sx={{ color: '#203550', marginRight: '1rem' }} />
                        <Typography variant="body1" sx={{ color: '#203550', fontSize: { xs: '0.96rem', md: '1rem' } }}>
                            hemocurelabs@gmail.com
                        </Typography>
                    </Box>
                </Box>
                <Box className="contact-map" sx={{ width: { xs: '100%', sm: '85%', lg: '52%' }, maxWidth: '700px' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.2251906103547!2d75.87425127544586!3d30.852369679840958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60664f2d08cc7177%3A0x224659f57d58bbc5!2sHemoCure%20Diagnostic%20And%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1790594052208!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '15px', display: 'block' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Box>
            </Box>
        </Wrapper>
    );
};

export default Contact;
