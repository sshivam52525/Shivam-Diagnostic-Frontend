
import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../../assests/Logo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        color: '#333',
        py: 5,
        borderTop: '1px solid #e7e7e7',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <img src={Logo} alt="Company Logo" style={{ marginBottom: '1rem', maxHeight: '50px' }} />
            <Typography variant="body2">
              Providing the best healthcare services for you and your family.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">Home</Link>
            <Link href="/about" color="inherit" underline="hover" display="block">About</Link>
            <Link href="/packages" color="inherit" underline="hover" display="block">Packages</Link>
            <Link href="/contact" color="inherit" underline="hover" display="block">Contact</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">123 Health St, Wellness City, 45678</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">(123) 456-7890</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">contact@yourcompany.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link href="https://www.instagram.com" color="inherit" sx={{ mr: 2 }}>
                <InstagramIcon />
              </Link>
              <Link href="https://www.facebook.com" color="inherit" sx={{ mr: 2 }}>
                <FacebookIcon />
              </Link>
              <Link href="https://www.twitter.com" color="inherit">
                <TwitterIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: 'center',
            pt: 5,
            borderTop: '1px solid #e7e7e7',
            mt: 5,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Shivam Diagnostic Laboratory. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
