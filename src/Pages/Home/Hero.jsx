
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BG1 from '../../assests/HeroBg/heroBG1.webp';
import BG2 from '../../assests/HeroBg/heroBG2.webp';
import { useNavigate } from 'react-router-dom';


const Hero = () => {

    const navigate = useNavigate()

    return (
    
        <div className='flex flex-col lg:flex-row gap-[1rem] relative'>
            <Box
                sx={{
                    backgroundImage: "url(" + BG1 + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: { xs: '100%', md: '60%' },
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    alignItems: "start",
                    color: "white",
                    textAlign: "center",
                    paddingY: '3rem',
                    paddingX: '2rem',
                    gap: '1.5rem',
                    borderRadius: '25px',
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom
                    sx={{
                        fontSize: { xs: "2.5rem", md:'3rem',lg:'4rem' },
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        color: "#203550",
                        textAlign: 'start',
                        width: { xs: '100%', md: '75%' },
                    }}
                >
                    Trusted Clinical Testing For Healthier Lives
                </Typography>

                <Typography variant="h5" component="p"
                    sx={{
                        fontSize: { xs: "1rem" },
                        color: 'rgb(78, 94, 124)',
                        textAlign: 'start',
                        width: { xs: '100%', md: '75%' },
                    }}
                >
                    Clinical Pathology Laboratories is dedicated to improving patient outcomes through trusted and reliable medical testing. With advanced technology.
                </Typography>

                <Stack direction="row" spacing={3}
                sx={{
                    width: { xs: '100%', md: '75%' },
                }}
                >
                    <Button variant="contained"
                    onClick={()=>navigate('/packages')}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'rgb(78, 94, 124)',
                                color: 'white',
                            },
                        }}
                    >Our Packages
                    </Button>
                    <a href="tel:+919814719180">
                    <Button variant="contained"
                        sx={{
                            '&:hover': {
                                backgroundColor: 'rgb(78, 94, 124)',
                                color: 'white',
                            },
                        }}
                    >
                    Call Us
                    </Button>
                    </a>
                </Stack>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'start', lg: 'center' },
                    bgcolor: '#DCEEFF',
                    borderRadius: '10px',
                    gap: '2rem',
                    padding: '1rem',
                    width: { xs: '100%', md: '75%',lg:'100%' },
                    marginTop: {xs:'2rem',lg:'8rem'},
                }}>
                    <div className='flex items-center  gap-4 '>
                        <div className='bg-white p-2 rounded-full '>
                            <SupportAgentIcon
                                sx={{
                                    fontSize: '2rem',
                                    color: 'rgb(78, 94, 124)'
                                }} />
                        </div>
                        <Typography variant='h6' component='p'
                            sx={{
                                fontSize: { xs: "1rem" },
                                color: '#203550',
                                fontWeight: 'bold',
                                textAlign: 'start'
                            }}
                        >
                            We are Ready To Serve You with Pleasure <br className='hidden sm:block' /> And Fast Response
                        </Typography>
                    </div>

                    <div className='flex items-start pl-[0.5rem]'>

                        <a href="tel:+918146003632">
                        <Button variant="contained"
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgb(78, 94, 124)',
                                    color: 'white',
                                },
                            }}
                        >
                           Help & Support
                        </Button>
                        </a>
                    </div>

                </Box>
            </Box>


            <Box
                sx={{
                    height: { xs: '100%', md: '54%'},
                    width: { xs: '100%', md: '50%',lg:'50%' },
                    position: { xs: 'relative',sm:'static', md: 'absolute', lg: 'static' },
                    top: { xs: 0, md: '30%', },
                    left: { xs: 0, md: '46%' },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    borderRadius: '25px',
                }}
            >
                <img className='rounded-3xl ' src={BG2} alt="" />
            </Box>
        </div>
       
    )
}


export default Hero