
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const accreditations = [
    {
        name: 'ISO 15189:2022',
        description: 'Recognized worldwide for medical laboratories, this accreditation confirms our competence to deliver timely, accurate, and reliable results.',
        logo: <VerifiedUserIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    },
    {
        name: 'College of American Pathologists (CAP)',
        description: 'The CAP Accreditation is the gold standard for laboratory quality assurance, ensuring our practices meet the highest standards of laboratory medicine.',
        logo: <VerifiedUserIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    },
    {
        name: 'Clinical Laboratory Improvement Amendments (CLIA)',
        description: 'Certified by the federal government, our lab adheres to strict quality standards for all testing, ensuring the accuracy, reliability, and timeliness of patient test results.',
        logo: <VerifiedUserIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    },
];

const LabAccreditation = () => {
    return (
        <Box sx={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
            <Container maxWidth="lg">
                {/* Hero Section */}
                <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', color: '#203550', marginBottom: '1rem' }}>
                        Our Commitment to Quality and Excellence
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'rgb(78, 94, 124)', maxWidth: '800px', margin: '0 auto' }}>
                        We are proud to be recognized by the world's leading healthcare accreditation bodies. These certifications reflect our unwavering commitment to providing the highest quality of diagnostic services.
                    </Typography>
                </Box>

                {/* Accreditation Badges */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: '2rem',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    marginBottom: '1rem'
                }}>
                    {accreditations.map((accreditation, index) => (
                        <Card key={index} sx={{
                            flex: 1,
                            borderRadius: '1rem',
                            boxShadow: 3,
                            textAlign: 'center',
                            padding: '2rem',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                boxShadow: 6,
                                transform: 'translateY(-5px)'
                            }
                        }}>
                            <Box sx={{ marginBottom: '1.5rem' }}>
                                {accreditation.logo}
                            </Box>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#203550', marginBottom: '1rem' }}>
                                    {accreditation.name}
                                </Typography>
                                <Typography sx={{ color: 'rgb(78, 94, 124)' }}>
                                    {accreditation.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                {/* Our Commitment to Quality Section */}
            {/*   <Box sx={{ backgroundColor: 'white', borderRadius: '1rem', padding: '3rem', textAlign: 'center', boxShadow: 3 }}>
                    <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: '#203550', marginBottom: '1.5rem' }}>
                        Beyond the Badges
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgb(78, 94, 124)', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                        Our commitment to quality goes beyond certifications. We are dedicated to continuous improvement, investing in the latest technology, and fostering a culture of excellence among our team of highly skilled professionals. Every test we perform is a promise of accuracy and care.
                    </Typography>
                    <Button variant="contained" size="large" sx={{ fontWeight: 'bold' }}>
                        View Our Certifications
                    </Button>
                </Box>   */}
            </Container>
        </Box>
    );
}

export default LabAccreditation;
