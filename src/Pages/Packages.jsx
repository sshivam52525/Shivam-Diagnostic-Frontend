import bg from '../assests/Packages/third-package-shape.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Wrapper from '../Components/Wrapper';
import { openWhatsAppForPackage } from '../utils/whatsapp';
import { packages } from './packageData';

const Packages = () => {
    const PackageCard = ({ pkg }) => {
        return (
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '1.25rem',
                    border: '1px solid rgba(32, 53, 80, 0.08)',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(240,247,244,0.96) 100%)',
                    boxShadow: '0 18px 38px rgba(32, 53, 80, 0.12)',
                    transition: 'all 0.3s ease-in-out',
                    overflow: 'hidden',
                    '&:hover': {
                        boxShadow: '0 24px 48px rgba(32, 53, 80, 0.18)',
                        transform: 'translateY(-6px)'
                    }
                }}
            >
                <CardContent sx={{
                    px: { xs: 2, sm: 2.5 },
                    py: { xs: 2.5, sm: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                }}>
                    <Box sx={{
                        display: 'inline-flex',
                        alignSelf: 'center',
                        px: 1.5,
                        py: 0.6,
                        borderRadius: '999px',
                        backgroundColor: 'rgba(58, 125, 95, 0.12)',
                        color: '#3A7D5F',
                        fontWeight: 700,
                        fontSize: { xs: '0.7rem', sm: '0.8rem' },
                        mb: 2
                    }}>
                        Health Checkup
                    </Box>

                    <Typography variant="h5" component="div" sx={{
                        fontWeight: 800,
                        textAlign: 'center',
                        lineHeight: 1.25,
                        minHeight: { xs: '4.5rem', sm: '5rem', md: '5.3rem', lg: '5.8rem' },
                        fontSize: { xs: '1.08rem', sm: '1.25rem', md: '1.2rem', lg: '1.35rem' },
                        letterSpacing: '-0.03em',
                        color: '#203550',
                        textTransform: 'none',
                        borderBottom: '1px solid rgba(32, 53, 80, 0.08)',
                        pb: 1.2,
                        mb: 0.5,
                        px: { xs: 0.3, sm: 0.8 },
                    }}>
                        {pkg.name}
                    </Typography>

                    <Box sx={{
                        my: 2.5,
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(58,125,95,0.08), rgba(32,53,80,0.03))',
                        borderRadius: '0.9rem',
                        py: 1.5,
                        px: 1
                    }}>
                        <Typography variant="h4" sx={{
                            fontWeight: 800,
                            color: '#3A7D5F',
                            fontSize: { xs: '1.7rem', sm: '2.1rem', md: '2.1rem', lg: '2.3rem' }
                        }}>
                            Rs. {pkg.price}/-
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.25,
                        mb: 2,
                        flex: 1
                    }}>
                        {pkg.features.map((feature, index) => (
                            <Box key={index} sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 1,
                                color: 'rgb(78, 94, 124)',
                            }}>
                                <CheckIcon sx={{
                                    color: '#3A7D5F',
                                    flexShrink: 0,
                                    mt: '2px',
                                    fontSize: { xs: '1rem', sm: '1.1rem' }
                                }} />
                                <Typography sx={{
                                    color: 'rgb(78, 94, 124)',
                                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                                    fontWeight: 700,
                                    lineHeight: 1.5,
                                    wordBreak: 'break-word',
                                }}>
                                    {feature}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </CardContent>

                <Box sx={{ px: { xs: 2, sm: 2.5 }, pb: { xs: 2.5, sm: 3 } }}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => openWhatsAppForPackage(pkg)}
                        sx={{
                            fontWeight: 700,
                            py: 1.15,
                            borderRadius: '999px',
                            background: 'linear-gradient(135deg, #3A7D5F 0%, #264A5D 100%)',
                            textTransform: 'none',
                            fontSize: { xs: '0.95rem', sm: '1rem' },
                            boxShadow: 'none',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #203550 0%, #3A7D5F 100%)',
                                boxShadow: '0 10px 20px rgba(32, 53, 80, 0.18)'
                            }
                        }}
                    >
                        Book Now
                    </Button>
                </Box>
            </Card>
        );
    }

    return (
        <Wrapper>
            <Box sx={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: { xs: '3rem 1rem', md: '4rem 2rem' },
                backgroundColor: '#f8fafc'
            }}>
                <Box sx={{ width: '100%', maxWidth: '1280px' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{
                        color: '#203550',
                        fontWeight: 800,
                        fontSize: { xs: '2.3rem', sm: '3rem', md: '4rem' },
                        lineHeight: 1.12,
                        mb: 1.5,
                        fontFamily: 'inherit'
                    }}>
                        Our Health Packages
                    </Typography>
                    <Typography variant="h6" sx={{
                        color: 'rgb(78, 94, 124)',
                        maxWidth: '700px',
                        margin: '0 auto 3rem auto',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        lineHeight: 1.7,
                        fontFamily: 'inherit'
                    }}>
                        We offer a variety of health packages to suit your needs. Choose from our basic to comprehensive packages for a full health check-up.
                    </Typography>

                    <Grid container spacing={{ xs: 2, sm: 2.5, md: 2.8, lg: 3 }} justifyContent="center">
                        {packages.map((pkg, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
                                <PackageCard pkg={pkg} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Wrapper>
    )
}

export default Packages;
