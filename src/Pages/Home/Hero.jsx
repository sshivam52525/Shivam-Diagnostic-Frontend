
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
      
        <div className='mx-auto flex w-full max-w-[1440px] min-w-0 flex-col gap-5 px-4 pb-8 pt-4 sm:gap-6 sm:px-6 lg:flex-row lg:items-stretch lg:gap-6 lg:px-8'>
            <Box
                sx={{
                    backgroundImage: `linear-gradient(115deg, rgba(240, 247, 255, 0.96), rgba(232, 246, 241, 0.88)), url(${BG1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                    width: { xs: '100%', lg: '58%' },
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    color: "#203550",
                    textAlign: "left",
                    paddingY: { xs: '1.75rem', sm: '2.5rem', lg: '3rem' },
                    paddingX: { xs: '1.25rem', sm: '2rem', lg: '2.5rem' },
                    gap: { xs: '1.15rem', sm: '1.5rem' },
                    borderRadius: { xs: '18px', sm: '24px' },
                    boxSizing: 'border-box',
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom
                    sx={{
                        fontSize: { xs: "2.15rem", sm: '2.8rem', md: '3.25rem', lg: '3.75rem' },
                        fontWeight: "bold",
                        color: "#203550",
                        textAlign: 'left',
                        width: '100%',
                        maxWidth: '14ch',
                        lineHeight: 1.08,
                        overflowWrap: 'anywhere',
                        mb: 0,
                    }}
                >
                    Trusted Clinical Testing For Healthier Lives
                </Typography>

                <Typography variant="h5" component="p"
                    sx={{
                        fontSize: { xs: "0.98rem", sm: '1.05rem', md: "1.1rem" },
                        color: '#4e5e7c',
                        textAlign: 'left',
                        width: '100%',
                        maxWidth: '56ch',
                        lineHeight: 1.7,
                    }}
                >
                    Clinical Pathology Laboratories is dedicated to improving patient outcomes through trusted and reliable medical testing. With advanced technology.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}
                    sx={{
                        width: '100%',
                        maxWidth: '34rem',
                        '& > *': { minWidth: 0, flex: { xs: '1 1 auto', sm: '0 1 auto' } },
                    }}
                >
                    <Button variant="contained"
                        onClick={()=>navigate('/packages')}
                        sx={{
                            width: { xs: '100%', sm: 'auto' },
                            minHeight: 48,
                            px: 2.5,
                            whiteSpace: 'nowrap',
                            backgroundColor: '#203550',
                            textTransform: 'none',
                            fontWeight: 700,
                            '&:hover': {
                                backgroundColor: 'rgb(78, 94, 124)',
                                color: 'white',
                            },
                        }}
                    >Our Packages
                    </Button>
                    <a href="tel:+918146003632" style={{ width: '100%', display: 'block', textDecoration: 'none' }}>
                        <Button variant="contained"
                            fullWidth
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                backgroundColor: '#3A7D5F',
                                textTransform: 'none',
                                fontWeight: 700,
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
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'stretch', sm: 'center' },
                    bgcolor: 'rgba(255, 255, 255, 0.82)',
                    borderRadius: '10px',
                    border: '1px solid rgba(32, 53, 80, 0.1)',
                    gap: { xs: '1rem', sm: '1.25rem' },
                    padding: { xs: '0.85rem', sm: '1rem' },
                    width: '100%',
                    marginTop: { xs: '0.25rem', lg: 'auto' },
                    boxSizing: 'border-box',
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1, minWidth: 0 }}>
                        <Box sx={{ bgColor: 'white', p: 1.2, borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <SupportAgentIcon
                                sx={{
                                    fontSize: '2rem',
                                    color: 'rgb(78, 94, 124)'
                                }} />
                        </Box>
                        <Typography variant='h6' component='p'
                            sx={{
                                fontSize: { xs: "0.9rem", sm: '0.95rem', md: "1rem" },
                                color: '#203550',
                                fontWeight: 'bold',
                                textAlign: 'start',
                                lineHeight: 1.5,
                                overflowWrap: 'anywhere',
                            }}
                        >
                            We are Ready To Serve You with Pleasure <br className='hidden sm:block' /> And Fast Response
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '100%', sm: 'auto' }, flexShrink: 0 }}>
                        <a href="tel:+918146003632" style={{ width: '100%', textDecoration: 'none' }}>
                            <Button variant="contained"
                                fullWidth
                                sx={{
                                    minHeight: 46,
                                    px: 2,
                                    backgroundColor: '#203550',
                                    whiteSpace: 'nowrap',
                                    textTransform: 'none',
                                    fontWeight: 700,
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
                    minWidth: 0,
                    minHeight: { xs: 240, sm: 320, lg: 0 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    borderRadius: { xs: '18px', sm: '24px' },
                    overflow: 'hidden',
                }}
            >
                <img className='h-full min-h-[240px] w-full object-cover sm:min-h-[320px] lg:min-h-0' src={BG2} alt="Diagnostic care" />
            </Box>
        </div>
      
    )
}


export default Hero