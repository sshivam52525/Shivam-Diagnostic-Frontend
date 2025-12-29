import bg from '../../assests/Packages/third-package-shape.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

const HomePackages = () => {

    const navigate = useNavigate();

    const packages = [
        {
            name: 'Basic Health Check',
            price: '$99',
            tests: 4,
            features: [
                'Complete Blood Count',
                'Urine Analysis',
                'Blood Sugar Test',
                'Cholesterol Test',
            ],
            description: 'A foundational health screening to assess your general well-being and detect common health issues early.'
        },
        {
            name: 'Standard Health Check',
            price: '$149',
            tests: 7,
            features: [
                'All Basic Features',
                'Kidney Function Test',
                'Liver Function Test',
                'ECG (Electrocardiogram)',
            ],
            description: 'A comprehensive evaluation of your vital organs, including heart, kidneys, and liver, for a deeper health insight.'
        },
        {
            name: 'Premium Health Check',
            price: '$249',
            tests: 10,
            features: [
                'All Standard Features',
                'Thyroid Function Test',
                'Vitamin D & B12 Test',
                'Cardiac Risk Markers',
            ],
            description: 'Our most thorough health assessment, covering an extensive range of tests for a complete picture of your health.'
        },
        {
            name: 'Premium Health Check',
            price: '$249',
            tests: 10,
            features: [
                'All Standard Features',
                'Thyroid Function Test',
                'Vitamin D & B12 Test',
                'Cardiac Risk Markers',
            ],
            description: 'Our most thorough health assessment, covering an extensive range of tests for a complete picture of your health.'
        }
    ];

    const PackageCard = ({ pkg }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <Card
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    position: 'relative',
                    borderRadius: '1rem',
                    boxShadow: 3,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: 6,
                        transform: 'scale(1.03)'
                    },
                    overflow: 'hidden' // important for the overlay effect
                }}
            >
                {/* Original Card Content */}
                <CardContent sx={{ padding: '2rem' }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#203550', marginBottom: '1rem', textAlign: 'center' }}>
                        {pkg.name}
                    </Typography>
                    <Box sx={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3A7D5F' }}>
                            {pkg.price}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'rgb(78, 94, 124)' }}>
                            Includes {pkg.tests} Tests
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                        {pkg.features.map((feature, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckIcon sx={{ color: '#3A7D5F' }} />
                                <Typography sx={{ color: 'rgb(78, 94, 124)' }}>{feature}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            fontWeight: 'bold',
                            padding: '0.8rem',
                            backgroundColor: '#3A7D5F',
                            '&:hover': {
                                backgroundColor: '#203550',
                            },
                        }}
                    >
                        Book Now
                    </Button>
                </CardContent>

                {/* Hover Overlay with Details */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(248, 250, 252, 0.97)', // slate-50 with opacity
                        color: '#203550',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem',
                        textAlign: 'center',
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'all 0.4s ease-in-out',
                    }}
                >
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                        {pkg.name}
                    </Typography>
                    <Typography sx={{ marginBottom: '1.5rem', color: 'rgb(78, 94, 124)' }}>
                        {pkg.description}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/booking')}
                        sx={{
                            fontWeight: 'bold',
                            padding: '0.8rem 1.5rem',
                            backgroundColor: '#3A7D5F',
                            '&:hover': {
                                backgroundColor: '#203550',
                            },
                        }}
                    >
                        Book Now
                    </Button>
                </Box>
            </Card>
        );
    }

    return (
        <Box sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: '#f8fafc'
        }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{
                color: '#203550',
                fontWeight: 'bold'
            }}>
                Our Health Packages
            </Typography>
            <Typography variant="h6" sx={{
                color: 'rgb(78, 94, 124)',
                maxWidth: '600px',
                marginBottom: '3rem'
            }}>
                We offer a variety of health packages to suit your needs. Choose from our basic to comprehensive packages for a full health check-up.
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: '3rem' }}>
                {packages.map((pkg, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <PackageCard pkg={pkg} />
                    </Grid>
                ))}
            </Grid>

            <Button
                variant="contained"
                onClick={() => navigate('/packages')}
                sx={{
                    fontWeight: 'bold',
                    padding: '0.8rem 1.5rem',
                    '&:hover': {
                        backgroundColor: 'rgb(78, 94, 124)',
                        color: 'white',
                    },
                }}
            >
                More Packages
            </Button>
        </Box>
    )
}

export default HomePackages;