
import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import BiotechIcon from '@mui/icons-material/Biotech';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const steps = [
    {
        title: '1. Sample Collection',
        description: 'Our streamlined process begins with easy and convenient sample collection. We provide comprehensive kits and clear instructions for a seamless experience.',
        icon: <BiotechIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    },
    {
        title: '2. Laboratory Processing',
        description: 'Your samples are processed in our state-of-the-art laboratory. Our technicians use advanced equipment to ensure accurate handling of every specimen.',
        icon: <DonutLargeIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    },
    {
        title: '3. Analysis & Reporting',
        description: 'Our certified scientists conduct a thorough analysis, utilizing cutting-edge technology to generate detailed and precise reports for the insights you need.',
        icon: <AnalyticsIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    },
    {
        title: '4. Online Reports',
        description: 'Access your results securely and conveniently through our online portal. Your comprehensive reports are available 24/7 for immediate access.',
        icon: <CloudDownloadIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    }
];

const Processing = () => {
    return (
        <Box sx={{ backgroundColor: '#f9f9f9',marginTop:'2rem' }}>
            <Container maxWidth="xl">
                <Typography variant="h2" component="h1" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
                    Our Sample Processing Workflow
                </Typography>
                <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
                    From collection to analysis, we ensure the highest standards of quality and accuracy.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                    {steps.map((step) => (
                        <Card key={step.title} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, boxShadow: '0 4px 12px 0 rgba(0,0,0,0.05)', flex: '1 1 300px', minWidth: '300px' }}>
                            <Box sx={{ mb: 2 }}>
                                {step.icon}
                            </Box>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'medium' }}>
                                    {step.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {step.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Processing;
