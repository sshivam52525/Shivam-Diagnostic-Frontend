import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import image1 from '../assests/image1.jpg';
import image2 from '../assests/image2.jpg';
import image3 from '../assests/image3.jpg';
import Wrapper from '../Components/Wrapper';

const teamMembers = [
    {
        name: 'Mr. Sandeep Singh',
        role: 'Founder & Director',
        avatar: image1,
        bio: 'Mr. Sandeep Singh (B.Sc. MLT), Director of Shivam Diagnostic Laboratory, has over 15 years of experience in medical laboratory technology and is committed to delivering accurate and reliable diagnostic results.',
    },
    {
        name: 'Mr. Shivam Singh',
        role: 'Lab Manager & Administrator',
        avatar: image2,
        bio: 'Mr. Shivam Singh (D. Pharmacy), Lab Manager at Shivam Diagnostic Laboratory, has 6 years of experience and manages lab operations along with IT systems to ensure accurate and timely reporting.',
    },
    {
        name: 'Mrs. Reena',
        role: 'Assistant Director & Receptionist',
        avatar: image3,
        bio: 'Ms. Reena is the Receptionist at Shivam Diagnostic Laboratory, assisting patients with registration, appointments, and inquiries with professionalism and care.',
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
                        py: { xs: 8, md: 12 },
                        textAlign: 'center',
                        backgroundColor: '#203550'
                    }}
                >
                    <Container maxWidth="md">
                        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="h5" component="p" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                            Your health is our priority. Learn about our mission, our values, and the team dedicated to providing you with the best care.
                        </Typography>
                    </Container>
                </Box>

                {/* Mission and Vision Section */}

                <Container maxWidth="lg"
                    sx={{
                        py: { xs: 6, md: 10 }
                    }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ color: '#203550' }}>
                                    Our Mission
                                </Typography>
                                <Typography variant="body1" textAlign={'center'} sx={{ color: 'rgb(78, 94, 124)', fontSize: '1.1rem' }}>
                                    To provide accessible, affordable, and high-quality diagnostic services to our community. We are committed to using the latest technology to deliver accurate results and empower individuals to take control of their health.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ color: '#203550' }}>
                                    Our Vision
                                </Typography>
                                <Typography variant="body1" textAlign={'center'} sx={{ color: 'rgb(78, 94, 124)', fontSize: '1.1rem' }}>
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
                        <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom sx={{ color: '#203550' }}>
                            Our Core Values
                        </Typography>
                        <Grid container spacing={4}
                            sx={{
                                mt: 4,
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            {['Accuracy', 'Compassion', 'Integrity', 'Innovation'].map((value) => (
                                <Grid item xs={12} sm={6} md={3} key={value} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h6" fontWeight="bold"
                                        sx={{
                                            color: '#3A7D5F'
                                        }}>{value}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Meet Our Team Section */}
                <Container sx={{ py: { xs: 6, md: 10 } }}>
                    <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom sx={{ color: '#203550' }}>
                        Meet Our Team
                    </Typography>
                    <Grid container spacing={4}
                        sx={{
                            mt: 4,    
                            display: 'flex',
                            justifyContent: 'center',
                    
                        }}
                    >
                        {teamMembers.map((member) => (
                            <Grid size={{ xs: 12, md: 6 }} key={member.name}>
                                <Paper
                                    sx={{
                                        p: 2
                                    }}
                                >
                                    <Box sx={{ textAlign: 'center', minHeight: 300 }}>
                                        <Avatar
                                            src="/broken-image.jpg"
                                            sx={{ width: 120, height: 120, margin: '0 auto 1rem' }}
                                        />

                                        {/*}    <Avatar src="/broken-image.jpg" />. */}
                                        <Typography variant="h6" fontWeight="bold">{member.name}</Typography>
                                        <Typography variant="subtitle1" color="primary.main" sx={{ color: '#3A7D5F' }}>{member.role}</Typography>
                                        <Typography variant="body2" sx={{ mt: 1, color: 'rgb(78, 94, 124)' }}>{member.bio}</Typography>
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
