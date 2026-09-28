import Wrapper from "../../Components/Wrapper"
import starShapeImage from '../../assests/Services/starshape.png';
import aboutImage from '../../assests/Services/third-about1.webp'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Other = () => {

    const navigate = useNavigate()

    const Task = ({ text }) => {

        return (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TaskAltIcon sx={{ color: '#203550', fontSize: { xs: '2rem', md: '2.5rem' } }} />
                <Typography sx={{ color: '#203550', fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: '600' }}>
                    {text}
                </Typography>
            </Box>
        )
    }

    return (
    
        <Wrapper>
            <Box sx={{ mx: 2, pt: { xs: 5, md: 8 } }}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'flex-start', md: 'center' },
                        justifyContent: 'space-between',
                        gap: 2,
                        color: 'white',
                        textAlign: { xs: 'left', md: 'left' },
                        borderRadius: '25px',
                    }}
                >
                    <Typography variant="h2" component="h1" gutterBottom
                        sx={{
                            fontSize: { xs: '2.1rem', sm: '2.6rem', md: '3rem' },
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                            color: '#203550',
                            width: { xs: '100%', md: '75%' },
                            lineHeight: 1.2,
                        }}
                    >
                        Empowering Healthcare with Reliable Accurate Diagnostics Our Commitment {' '}
                        <Box component="span" sx={{ display: 'inline-block', color: '#8A9AB8', textShadow: 'none' }}>
                            To Quality Precision and Patient-Centered Care
                        </Box>
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <img className="w-48 h-48" src={starShapeImage} alt="Star Shape Graphic" />
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '2rem',
                px: { xs: 2, md: 4 },
                alignItems: 'center',
                pb: { xs: 5, md: 8 },
                pt: { xs: 2, md: 4 },
            }}>
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                }}>
                    <img src={aboutImage} style={{ width: '100%', borderRadius: '15px', display: 'block' }} alt="About the lab" />
                </Box>

                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Typography sx={{ color: '#203550', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7 }}>
                        We offer a comprehensive range of tests, from routine bloodwork and pathology to specialized molecular and genetic diagnostics, ensuring each patient receives the personalized insights they need.
                    </Typography>

                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                        gap: '1.5rem',
                        marginTop: '1.5rem',
                        width: '100%',
                    }}>
                        <Task text="Advanced Technology" />
                        <Task text="Expert Team" />
                        <Task text="Patient-Centered Care" />
                        <Task text="Fast & Accurate" />
                    </Box>

                    <Box sx={{ marginTop: '2rem' }}>
                        <Button
                            variant="contained"
                            onClick={()=>navigate('/about')}
                            sx={{
                                fontWeight: 'bold',
                                padding: '0.8rem 1.5rem',
                                '&:hover': {
                                    backgroundColor: 'rgb(78, 94, 124)',
                                    color: 'white',
                                },
                            }}
                        >
                            More About Us
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Wrapper>
        
    )
}

export default Other;