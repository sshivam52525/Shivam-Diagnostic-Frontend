
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
      
        <div className='flex flex-col gap-6 px-4 pt-4 pb-8 md:px-6 lg:flex-row lg:items-center lg:gap-6 lg:px-8'>
            <Box
                sx={{
                    backgroundImage: "url(" + BG1 + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: { xs: '100%', lg: '58%' },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    color: "white",
                    textAlign: "center",
                    paddingY: { xs: '2.25rem', md: '2.75rem' },
                    paddingX: { xs: '1.25rem', md: '2rem' },
                    gap: '1.5rem',
                    borderRadius: '25px',
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom
                    sx={{
                        fontSize: { xs: "2.5rem", sm: '3rem', md: '3.2rem', lg: '4rem' },
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        color: "#203550",
                        textAlign: 'start',
                        width: { xs: '100%', md: '90%', lg: '75%' },
                    }}
                >
                    Trusted Clinical Testing For Healthier Lives
                </Typography>

                <Typography variant="h5" component="p"
                    sx={{
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        color: 'rgb(78, 94, 124)',
                        textAlign: 'start',
                        width: { xs: '100%', md: '90%', lg: '75%' },
                        lineHeight: 1.6,
                    }}
                >
                    Clinical Pathology Laboratories is dedicated to improving patient outcomes through trusted and reliable medical testing. With advanced technology.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}
                    sx={{
                        width: { xs: '100%', md: '90%', lg: '75%' },
                    }}
                >
                    <Button variant="contained"
                        onClick={()=>navigate('/packages')}
                        sx={{
                            width: { xs: '100%', sm: 'auto' },
                            '&:hover': {
                                backgroundColor: 'rgb(78, 94, 124)',
                                color: 'white',
                            },
                        }}
                    >Our Packages
                    </Button>
                    <a href="tel:+918146003632" style={{ width: '100%', display: 'block' }}>
                        <Button variant="contained"
                            fullWidth
                            sx={{
                                width: { xs: '100%', sm: 'auto' },
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
                    alignItems: { xs: 'flex-start', lg: 'center' },
                    bgcolor: '#DCEEFF',
                    borderRadius: '10px',
                    gap: { xs: '1rem', lg: '2rem' },
                    padding: '1rem',
                    width: { xs: '100%', md: '90%', lg: '100%' },
                    marginTop: { xs: '1rem', lg: '4rem' },
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                        <Box sx={{ bgColor: 'white', p: 1.2, borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <SupportAgentIcon
                                sx={{
                                    fontSize: '2rem',
                                    color: 'rgb(78, 94, 124)'
                                }} />
                        </Box>
                        <Typography variant='h6' component='p'
                            sx={{
                                fontSize: { xs: "0.95rem", md: "1rem" },
                                color: '#203550',
                                fontWeight: 'bold',
                                textAlign: 'start',
                                lineHeight: 1.5,
                            }}
                        >
                            We are Ready To Serve You with Pleasure <br className='hidden sm:block' /> And Fast Response
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '100%', lg: 'auto' } }}>
                        <a href="tel:+918146003632" style={{ width: '100%' }}>
                            <Button variant="contained"
                                fullWidth
                                sx={{
                                    width: { xs: '100%', lg: 'auto' },
                                    '&:hover': {
                                        backgroundColor: 'rgb(78, 94, 124)',
                                        color: 'white',
                                    },
                                }}
                            >
                                Help & Support
                            </Button>
                        </a>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    width: { xs: '100%', lg: '42%' },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    borderRadius: '25px',
                }}
            >
                <img className='w-full rounded-3xl object-cover' src={BG2} alt="Diagnostic care" />
            </Box>
        </div>
      
    )
}


export default Hero