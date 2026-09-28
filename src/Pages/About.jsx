import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Wrapper from '../Components/Wrapper';

const teamMembers = [
    {
        name: 'Mr. Sandeep Singh',
        role: 'Founder & Director',
        bio: 'Mr. Sandeep Singh (B.Sc. MLT), Director of HemoCure Dignostic And Solutions Pvt. Ltd., has over 15 years of experience in medical laboratory technology and is committed to delivering accurate and reliable diagnostic results.',
    },
    {
        name: 'Mr. Shivam Singh',
        role: 'Lab Manager & Administrator',
        bio: 'Mr. Shivam Singh (D. Pharmacy), Lab Manager at HemoCure Dignostic And Solutions Pvt. Ltd., has 6 years of experience and manages lab operations along with IT systems to ensure accurate and timely reporting.',
    },
    {
        name: 'Mrs. Reena',
        role: 'Assistant Director & Receptionist',
        bio: 'Ms. Reena is the Receptionist at HemoCure Dignostic And Solutions Pvt. Ltd., assisting patients with registration, appointments, and inquiries with professionalism and care.',
    },
];

const About = () => {
    return (
        <Wrapper>
            <Box sx={{ flexGrow: 1 }}>
                {/* Hero Section */}
                <Box
                    sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        py: { xs: 7, sm: 9, md: 12 },
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #203550 0%, #2f4d6d 100%)',
                        boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.08)',
                    }}
                >
                    <Container maxWidth="md">
                        <Typography
                            variant="h2"
                            component="h1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontSize: { xs: '2.3rem', sm: '3rem', md: '4rem' },
                                lineHeight: 1.1,
                            }}
                        >
                            About Us
                        </Typography>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: { xs: '1rem', sm: '1.3rem', md: '1.6rem' },
                                lineHeight: 1.6,
                            }}
                        >
                            Your health is our priority. Learn about our mission, our values, and the team dedicated to providing you with the best care.
                        </Typography>
                    </Container>
                </Box>

                {/* Mission and Vision Section */}

                <Container maxWidth="lg"
                    sx={{
                        py: { xs: 6, md: 10 }
                    }}>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper
                                sx={{
                                    p: { xs: 2.5, md: 3 },
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3,
                                    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                                    boxShadow: '0 12px 28px rgba(32,53,80,0.08)',
                                    border: '1px solid rgba(32,53,80,0.06)',
                                }}
                            >
                                <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ color: '#203550', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                                    Our Mission
                                </Typography>
                                <Typography variant="body1" textAlign={'center'} sx={{ color: 'rgb(78, 94, 124)', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.7 }}>
                                    To provide accessible, affordable, and high-quality diagnostic services to our community. We are committed to using the latest technology to deliver accurate results and empower individuals to take control of their health.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper
                                sx={{
                                    p: { xs: 2.5, md: 3 },
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3,
                                    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                                    boxShadow: '0 12px 28px rgba(32,53,80,0.08)',
                                    border: '1px solid rgba(32,53,80,0.06)',
                                }}
                            >
                                <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ color: '#203550', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                                    Our Vision
                                </Typography>
                                <Typography variant="body1" textAlign={'center'} sx={{ color: 'rgb(78, 94, 124)', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.7 }}>
                                    To be a trusted partner in health and wellness, known for our commitment to excellence, innovation, and patient-centered care. We envision a future where everyone has the information they need to live a healthier life.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

                { /*
                <Container
                    sx={{
                        py: { xs: 6, md: 10 },
                    }}>
                    <Grid container spacing={6} alignItems="center"
                        sx={{
                            border: 1,
                            borderColor: 'red',
                        }}
                    >
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom
                                sx={{
                                    color: '#203550',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                Our Mission
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgb(78, 94, 124)', fontSize: '1.1rem' }}>
                                To provide accessible, affordable, and high-quality diagnostic services to our community. We are committed to using the latest technology to deliver accurate results and empower individuals to take control of their health.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom
                                sx={{
                                    color: '#203550',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                Our Vision
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'rgb(78, 94, 124)', fontSize: '1.1rem' }}>
                                To be a trusted partner in health and wellness, known for our commitment to excellence, innovation, and patient-centered care. We envision a future where everyone has the information they need to live a healthier life.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                */}

                {/* Core Values Section */}
                <Box
                    sx={{
                        bgcolor: '#f8fafc',
                        py: { xs: 6, md: 10 },

                    }}>
                    <Container maxWidth="md">
                        <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom sx={{ color: '#203550', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                            Our Core Values
                        </Typography>
                        <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mt: { xs: 2, md: 4 }, justifyContent: 'center' }}>
                            {['Accuracy', 'Compassion', 'Integrity', 'Innovation'].map((value) => (
                                <Grid item xs={12} sm={6} md={3} key={value} sx={{ textAlign: 'center' }}>
                                    <Box
                                        sx={{
                                            background: 'linear-gradient(180deg, #ffffff 0%, #edf7f3 100%)',
                                            borderRadius: 3,
                                            border: '1px solid rgba(58,125,95,0.15)',
                                            py: 2,
                                            px: 1.5,
                                            boxShadow: '0 8px 18px rgba(58,125,95,0.08)',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            sx={{
                                                color: '#3A7D5F',
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                            }}
                                        >
                                            {value}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Meet Our Team Section */}
                <Container sx={{ py: { xs: 6, md: 10 } }}>
                    <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom sx={{ color: '#203550', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                        Meet Our Team
                    </Typography>
                    <Grid container spacing={{ xs: 2.5, md: 4 }} sx={{ mt: { xs: 2, md: 4 }, justifyContent: 'center' }}>
                        {teamMembers.map((member) => (
                            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={member.name}>
                                <Paper
                                    sx={{
                                        p: { xs: 2, md: 2.5 },
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'stretch',
                                        borderRadius: 3,
                                        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                                        boxShadow: '0 14px 30px rgba(32,53,80,0.08)',
                                        border: '1px solid rgba(32,53,80,0.06)',
                                    }}
                                >
                                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                                        <Avatar
                                            sx={{
                                                width: { xs: 90, sm: 110, md: 120 },
                                                height: { xs: 90, sm: 110, md: 120 },
                                                margin: '0 auto 1rem',
                                                border: '3px solid #eaf2ff',
                                                background: '#f3f4f6',
                                                color: '#4b5563',
                                                fontSize: { xs: '2.4rem', md: '2.8rem' },
                                                boxShadow: '0 10px 22px rgba(32,53,80,0.08)',
                                            }}
                                        >
                                            <AccountCircle fontSize="inherit" />
                                        </Avatar>
                                        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>{member.name}</Typography>
                                        <Typography variant="subtitle1" color="primary.main" sx={{ color: '#3A7D5F', fontSize: { xs: '0.85rem', md: '1rem' } }}>{member.role}</Typography>
                                        <Typography variant="body2" sx={{ mt: 1, color: 'rgb(78, 94, 124)', lineHeight: 1.7, fontSize: { xs: '0.82rem', md: '0.95rem' } }}>{member.bio}</Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Wrapper>
    );
};

export default About;
