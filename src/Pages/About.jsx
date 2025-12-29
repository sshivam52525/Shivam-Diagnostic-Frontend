import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import image1 from '../assests/image1.jpg';
import image2 from '../assests/image2.jpg';
import image3 from '../assests/image3.jpg';
import Wrapper from '../Components/Wrapper';

const teamMembers = [
    {
        name: 'Dr. Emily Carter',
        role: 'Founder & Chief Medical Officer',
        avatar: image1,
        bio: 'Dr. Carter has over 20 years of experience in internal medicine and is passionate about preventive healthcare.',
    },
    {
        name: 'John Doe',
        role: 'Lab Director',
        avatar: image2,
        bio: 'John is a certified clinical laboratory scientist with a focus on quality assurance and technological innovation.',
    },
    {
        name: 'Jane Smith',
        role: 'Head of Patient Care',
        avatar: image3,
        bio: 'Jane has a background in nursing and is dedicated to providing a compassionate and seamless patient experience.',
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
            <Container sx={{ py: { xs: 6, md: 10 } }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ color: '#203550' }}>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgb(78, 94, 124)', fontSize: '1.1rem' }}>
                            To provide accessible, affordable, and high-quality diagnostic services to our community. We are committed to using the latest technology to deliver accurate results and empower individuals to take control of their health.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ color: '#203550' }}>
                            Our Vision
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgb(78, 94, 124)', fontSize: '1.1rem' }}>
                            To be a trusted partner in health and wellness, known for our commitment to excellence, innovation, and patient-centered care. We envision a future where everyone has the information they need to live a healthier life.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* Core Values Section */}
            <Box sx={{ bgcolor: '#f8fafc', py: { xs: 6, md: 10 } }}>
                <Container maxWidth="md">
                    <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom sx={{ color: '#203550' }}>
                        Our Core Values
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        {['Accuracy', 'Compassion', 'Integrity', 'Innovation'].map((value) => (
                            <Grid item xs={12} sm={6} md={3} key={value} sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#3A7D5F' }}>{value}</Typography>
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
                <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
                    {teamMembers.map((member) => (
                        <Grid item xs={12} sm={6} md={4} key={member.name}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Avatar
                                    alt={member.name}
                                    src={member.avatar}
                                    sx={{ width: 120, height: 120, margin: '0 auto 1rem' }}
                                />
                                <Typography variant="h6" fontWeight="bold">{member.name}</Typography>
                                <Typography variant="subtitle1" color="primary.main" sx={{color: '#3A7D5F'}}>{member.role}</Typography>
                                <Typography variant="body2" sx={{ mt: 1, color: 'rgb(78, 94, 124)' }}>{member.bio}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
        </Wrapper>
    );
};

export default About;
