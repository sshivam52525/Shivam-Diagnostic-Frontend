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
            <div className=" mx-4 ">
                <Box
                    sx={{
                        width: '100%',
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        color: "white",
                        textAlign: "center",
                        paddingTop: '2rem',
                        gap: '2rem',
                        borderRadius: '25px',
                    }}
                >
                    <Typography variant="h2" component="h1" gutterBottom
                        sx={{
                            fontSize: { xs: "2.5rem", md: '3rem' },
                            fontWeight: "bold",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            color: "#203550",
                            textAlign: 'start',
                            width: { xs: '100%', md: '75%' },
                        }}
                    >
                        Empowering Healthcare with Reliable Accurate Diagnostics Our Commitment {' '}
                        <span className="text-[#8A9AB8] text-shadow-none">
                            To Quality Precision and Patient-Centered Care
                        </span>
                    </Typography>

                    <Box>
                        <img className="hidden  md:block  w-48 h-48" src={starShapeImage} alt="Star Shape Graphic" />
                    </Box>
                </Box>
            </div>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '2rem',
                padding: '1rem',
                alignItems: 'center'
            }}>
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                }}>
                    <img src={aboutImage} style={{ width: '100%', borderRadius: '15px' }} />
                </Box>

                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                }}>
                    <Typography sx={{ color: '#203550', fontSize: { xs: '1rem', md: '1.2rem' } }}>
                        We offer a comprehensive range of tests, from routine bloodwork and pathology to specialized molecular and genetic diagnostics, ensuring each patient receives the personalized insights they need.
                    </Typography>

                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                        gap: '2rem',
                        marginTop: '1rem',
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