
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import isoLogo from '../../assests/labAccrediation/iso.png';
import mcaLogo from '../../assests/labAccrediation/mca.png';
import msmeLogo from '../../assests/labAccrediation/msme.png';

const accreditations = [
    { logo: isoLogo },
    { logo: mcaLogo },
    { logo: msmeLogo },
];

const LabAccreditation = () => {
    return (
        <Box sx={{ backgroundColor: '#f8fafc', padding: '2.5rem 0' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', marginBottom: { xs: '1.5rem', md: '2.5rem' } }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            color: '#203550',
                            marginBottom: '0.75rem',
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        }}
                    >
                        Our Accreditations
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={{ xs: 2.5, md: 3 }}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'stretch',
                    }}
                >
                    {accreditations.map((accreditation, index) => (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Card
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    maxWidth: { xs: '100%', sm: 320, md: 360 },
                                    minHeight: { xs: 220, md: 260 },
                                    borderRadius: '1rem',
                                    boxShadow: '0 18px 38px rgba(32, 53, 80, 0.12)',
                                    textAlign: 'center',
                                    padding: '0.9rem',
                                    transition: 'all 0.3s ease-in-out',
                                    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                                    border: '1px solid rgba(32, 53, 80, 0.06)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    '&:hover': {
                                        boxShadow: '0 22px 46px rgba(32, 53, 80, 0.18)',
                                        transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        minHeight: { xs: 100, md: 120 },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={accreditation.logo}
                                        alt="Accreditation logo"
                                        sx={{
                                            width: { xs: 120, sm: 130, md: 150 },
                                            height: 'auto',
                                            objectFit: 'contain',
                                            display: 'block',
                                            margin: 0,
                                            filter: 'drop-shadow(0 12px 18px rgba(32, 53, 80, 0.12))',
                                        }}
                                    />
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default LabAccreditation;
