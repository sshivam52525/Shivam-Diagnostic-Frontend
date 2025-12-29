
import { Avatar, Box, Card, CardContent, Rating, Typography } from "@mui/material";

const reviews = [
    {
        name: 'Sarah L.',
        location: 'New York, USA',
        rating: 5,
        avatar: 'S',
        review: 'The team was incredibly supportive and made me feel at ease throughout the entire process. The facility is top-notch, and the level of care is exceptional. Highly recommended!'
    },
    {
        name: 'David M.',
        location: 'London, UK',
        rating: 5,
        avatar: 'D',
        review: 'I had a great experience. The doctors were thorough, and the staff was friendly and professional. I received a detailed and easy-to-understand health report.'
    },
    {
        name: 'Jessica P.',
        location: 'Sydney, AUS',
        rating: 4.5,
        avatar: 'J',
        review: 'A very positive experience overall. The clinic is modern, and the technology they use is impressive. The only small issue was the wait time, but the quality of care made up for it.'
    }
];

const Reviews = () => {

    return (
        <Box sx={{ backgroundColor: '#f8fafc', padding: '4rem 2rem', textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{
                color: '#203550',
                fontWeight: 'bold'
            }}>
                What Our Patients Say
            </Typography>
            <Typography variant="h6" sx={{
                color: 'rgb(78, 94, 124)',
                maxWidth: '600px',
                margin: '0 auto 3rem auto'
            }}>
                Read genuine reviews from our satisfied patients and see why they trust us with their health.
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                {reviews.map((item, index) => (
                    <Card key={index} sx={{
                        flex: 1,
                        borderRadius: '1rem',
                        boxShadow: 3,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            boxShadow: 6,
                            transform: 'translateY(-5px)'
                        }
                    }}>
                        <CardContent sx={{ padding: '2rem', textAlign: 'left' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <Avatar sx={{ bgcolor: '#3A7D5F', width: 56, height: 56, marginRight: '1rem', fontSize: '1.5rem' }}>
                                    {item.avatar}
                                </Avatar>
                                <Box>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#203550' }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'rgb(78, 94, 124)' }}>
                                        {item.location}
                                    </Typography>
                                </Box>
                            </Box>
                            <Rating name="read-only" value={item.rating} precision={0.5} readOnly sx={{ marginBottom: '1rem' }} />
                            <Typography variant="body1" sx={{ color: 'rgb(78, 94, 124)' }}>
                                {item.review}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default Reviews;
