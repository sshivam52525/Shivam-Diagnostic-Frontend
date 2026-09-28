
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import HemoCure from '../../assests/HemoCure.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #071b2f 0%, #0b2d4d 45%, #0f172a 100%)',
        color: '#eaf6ff',
        py: { xs: 5, md: 6 },
        mt: 8,
        borderTop: '1px solid rgba(255,255,255,0.12)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 3,
                p: { xs: 1.2, sm: 1.6 },
                mb: 2,
                minWidth: { xs: 100, sm: 120 },
                width: '100%',
                maxWidth: 180,
              }}
            >
              <img
                src={HemoCure}
                alt="Company Logo"
                style={{
                  maxHeight: '78px',
                  width: '100%',
                  maxWidth: '160px',
                  height: 'auto',
                  borderRadius: '12px',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(234,246,255,0.8)',
                lineHeight: 1.8,
                maxWidth: { xs: '100%', sm: 260 },
                fontSize: { xs: '0.85rem', sm: '0.875rem' },
              }}
            >
              Providing the best healthcare services for you and your family with compassionate care and modern diagnostics.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: 52,
                  height: 3,
                  background: 'linear-gradient(90deg, #4ecdc4, #7dd3fc)',
                  borderRadius: 999,
                  mt: 1,
                },
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.2}>
              {['Home', 'About', 'Packages', 'Contact'].map((label) => (
                <Link
                  key={label}
                  href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                  color="inherit"
                  underline="none"
                  sx={{
                    color: 'rgba(234,246,255,0.8)',
                    fontSize: { xs: '0.9rem', sm: '0.96rem' },
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#7dd3fc',
                      transform: { xs: 'none', sm: 'translateX(4px)' },
                    },
                  }}
                >
                  {label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: 52,
                  height: 3,
                  background: 'linear-gradient(90deg, #4ecdc4, #7dd3fc)',
                  borderRadius: 999,
                  mt: 1,
                },
              }}
            >
              Contact Us
            </Typography>
            <Stack spacing={1.8}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(125,211,252,0.12)',
                    color: '#7dd3fc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 0.2,
                    flexShrink: 0,
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 18 }} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(234,246,255,0.8)',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.82rem', sm: '0.875rem' },
                  }}
                >
                  33/3, New Shimlapuri, Ludhiana, Punjab 141003
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(78,205,196,0.12)',
                    color: '#4ecdc4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 18 }} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(234,246,255,0.8)',
                    fontSize: { xs: '0.82rem', sm: '0.875rem' },
                  }}
                >
                  +91 81460-03632, +91 76965-19180
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fcd34d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <EmailIcon sx={{ fontSize: 18 }} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(234,246,255,0.8)',
                    fontSize: { xs: '0.82rem', sm: '0.875rem' },
                  }}
                >
                  hemocurelabs@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: 52,
                  height: 3,
                  background: 'linear-gradient(90deg, #4ecdc4, #7dd3fc)',
                  borderRadius: 999,
                  mt: 1,
                },
              }}
            >
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1.2} sx={{ mt: 1, flexWrap: 'wrap' }}>
              {[
                { icon: <InstagramIcon />, href: 'https://www.instagram.com', color: '#E1306C' },
                { icon: <FacebookIcon />, href: 'https://www.facebook.com', color: '#1877F2' },
                { icon: <TwitterIcon />, href: 'https://www.twitter.com', color: '#1DA1F2' },
              ].map((social) => (
                <IconButton
                  key={social.href}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    background: 'rgba(255,255,255,0.08)',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.12)',
                    '&:hover': {
                      background: social.color,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                    width: { xs: 36, sm: 40 },
                    height: { xs: 36, sm: 40 },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 4,
            mt: 5,
            borderTop: '1px solid rgba(255,255,255,0.12)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(234,246,255,0.72)',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              lineHeight: 1.6,
              px: 1,
            }}
          >
            © {new Date().getFullYear()} HemoCure Diagnostic And Solutions Pvt. Ltd. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
