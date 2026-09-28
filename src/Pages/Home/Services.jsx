import Wrapper from "../../Components/Wrapper"
import Button from '@mui/material/Button';
import img1 from '../../assests/Services/service1.png'
import img2 from '../../assests/Services/service2.png'
import img3 from '../../assests/Services/service3.png'


const services = [
    {
        img: img1,
        service: 'All Routine Laboratory Services'
    },
    {
        img: img2,
        service: 'Microbiology & Disease Services'
    },
    {
        img: img3,
        service: 'Molecular and Genetic Services'
    },
    {
        img: img3,
        service: 'Immunology & Allergy Services'
    },
]


const Services = () => {

    return (
        <Wrapper>
            <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-sky-700">
                        Trusted diagnostic care
                    </span>
                    <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-black tracking-tight text-[#22334F] sm:text-4xl lg:text-5xl">
                        Our Popular Clinical Pathology Laboratory Services
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
                        Accurate testing, compassionate care, and timely reports for a healthier tomorrow.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((s, index) => (
                        <Card key={index} image={s.img} service={s.service} />
                    ))}
                </div>
            </section>
        </Wrapper>

    )
}

export default Services;

const Card = ({ image, service }) => {

    return (
        <div className="group flex h-full min-h-[290px] flex-col items-center rounded-[28px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(34,51,79,0.16)] md:min-h-[310px]">
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#eaf4ff] via-[#f2f8ff] to-[#edfdf7] ring-8 ring-white shadow-inner shadow-slate-200/70 md:h-32 md:w-32">
                <img
                    src={image}
                    alt={service}
                    className="h-16 w-16 object-contain drop-shadow-sm md:h-[4.25rem] md:w-[4.25rem]" />
            </div>

            <div className="mt-auto w-full">
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        borderRadius: '999px',
                        background: 'linear-gradient(135deg, #22334F 0%, #3A5378 100%)',
                        boxShadow: 'none',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        py: 1.5,
                        px: 2,
                        minHeight: '56px',
                        whiteSpace: 'normal',
                        lineHeight: 1.4,
                        '&:hover': {
                            background: 'linear-gradient(135deg, #1a2c49 0%, #2f4465 100%)',
                            boxShadow: 'none',
                        },
                    }}
                >
                    {service}
                </Button>
            </div>
        </div>
    )
}