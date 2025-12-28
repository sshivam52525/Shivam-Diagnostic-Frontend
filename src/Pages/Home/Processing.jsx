import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import BiotechIcon from '@mui/icons-material/Biotech';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const steps = [
    {
        title: '1. Sample Collection',
        description: 'Our certified professionals collect samples with utmost care and precision, ensuring sample integrity from the very beginning.',
        icon: <BiotechIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    },
    {
        title: '2. Laboratory Processing',
        description: 'Samples are meticulously handled and processed in our state-of-the-art laboratory, following strict protocols to prevent contamination.',
        icon: <DonutLargeIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    },
    {
        title: '3. Analysis & Reporting',
        description: 'Advanced analytical techniques are used to interpret the data. Results are compiled into a comprehensive report for you and your healthcare provider.',
        icon: <AnalyticsIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    },
    {
        title: '4. Online Reports',
        description: 'Access your secure, detailed reports online anytime. Easily share them with your healthcare provider for follow-up.',
        icon: <CloudDownloadIcon sx={{ fontSize: 60, color: '#3A7D5F' }} />
    }
];

const Processing = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
            <Container maxWidth="xl">
                <Typography variant="h2" component="h1" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
                    Our Sample Processing Workflow
                </Typography>
                <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
                    From collection to analysis, we ensure the highest standards of quality and accuracy.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {steps.map((step) => (
                        <Grid item xs={12} sm={6} lg={3} key={step.title}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, boxShadow: '0 4px 12px 0 rgba(0,0,0,0.05)' }}>
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
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Processing;
