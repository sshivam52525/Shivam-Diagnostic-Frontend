import bg from '../assests/Packages/third-package-shape.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import Wrapper from '../Components/Wrapper';

const Packages = () => {

    const navigate = useNavigate();

    const packages = [
        {
            name: 'HemoCure Basic Health Check',
            price: '499',
            testCode: "HC 1.0",
            features: [
                'Hemogram',
                'Lipid Profile',
                'Liver Function Test',
                'Kidney Function Test',
                'Uric Acid',
                'Calcium'
            ],
            description: 'A foundational health screening to assess your general well-being and detect common health issues early.'
        },
        {
            name: 'HemoCure Standard Health Check',
            price: '799',
            testCode: "HC 1.1",
            features: [
                'Hemogram + ESR',
                'Lipid Profile',
                'Liver Function Test',
                'Kidney Function Test',
                'Uric Acid',
                'Calcium',
                'Thyroid Profile'
            ],
            description: 'A comprehensive evaluation of your vital organs, including heart, kidneys, and liver, for a deeper health insight.'
        },
        {
            name: 'HemoCure Premium Health Check',
            price: '1199',
            testCode: "HC 1.2",
            features: [
                'Hemogram + ESR',
                'Lipid Profile',
                'Liver Function Test',
                'Kidney Function Test',
                'Uric Acid',
                'Calcium',
                'Thyroid Profile',
                'HbA1c',
                'Iron Profile'
            ],
            description: 'Our most thorough health assessment, covering an extensive range of tests for a complete picture of your health.'
        },
        {
            name: 'Hemocure Premium Health Check + Vitamins',
            price: '1499',
            testCode: "HC 1.3",
            features: [
                'Hemogram + ESR',
                'Lipid Profile',
                'Liver Function Test',
                'Kidney Function Test',
                'Uric Acid',
                'Calcium',
                'Thyroid Profile',
                'HbA1c',
                'Iron Profile',
                'Vitamin B12',
                'Vitamin D'
            ],
            description: 'A comprehensive package designed to address the specific health needs of women, including cancer screenings.'
        },
        {
            name: 'HemoCure Advance Health Check',
            price: '1999',
            testCode: "HC 1.5",
            features: [
                'Hemogram + ESR',
                'Lipid Profile',
                'Liver Function Test',
                'Kidney Function Test',
                'Uric Acid',
                'Calcium',
                'Thyroid Profile',
                'HbA1c',
                'Iron Profile',
                'Vitamin B12',
                'Vitamin D',
                'CRP Quantitative',
                'RA Quantitative'
            ],
            description: 'A focused health check-up for men, including prostate cancer screening and heart health evaluation.'
        },
        
    ];

    const PackageCard = ({ pkg }) => {

        return (
            <Card

                sx={{
                    borderRadius: '1rem',
                    boxShadow: 3,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: 6,
                        transform: 'scale(1.03)'
                    },
                    overflow: 'hidden', // important for the overlay effect
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                {/* Original Card Content */}
                <CardContent sx={{
                    padding: '2rem',

                }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', 
                        color: '#203550', 
                        marginBottom: '1rem',
                         textAlign: 'center',
                         width:{xs: "16rem", md:'20rem'},
                         
                         }}>
                        {pkg.name}
                    </Typography>
                    <Box sx={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3A7D5F' }}>
                            Rs. {pkg.price}/-
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'rgb(78, 94, 124)' }}>
                            TestCode : {pkg.testCode}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                        {pkg.features.map((feature, index) => (
                            <Box key={index} sx={{ display: 'flex', gap: '0.5rem' }}>
                                <CheckIcon sx={{ color: '#3A7D5F' }} />
                                <Typography sx={{
                                    color: 'rgb(78, 94, 124)',
                                    
                                }}>{feature}</Typography>
                            </Box>
                        ))}
                    </Box>
                </CardContent>

                <Box
                    sx={{
                        paddingX: '2rem'
                    }}
                >
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            fontWeight: 'bold',
                            padding: '0.8rem',
                            backgroundColor: '#3A7D5F',
                            '&:hover': {
                                backgroundColor: '#203550'
                            },
                            marginBottom: 3
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

                <Grid container spacing={4} justifyContent="center">
                    {packages.map((pkg, index) => (
                        <Grid key={index} xs={12} sm={6} md={4}>
                            <PackageCard pkg={pkg} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Wrapper>
    )
}

export default Packages;
