import Wrapper from "../../Components/Wrapper"
import Button from '@mui/material/Button';

const services = [
    {
        img: "./src/assests/Services/service1.png",
        service: 'All Routine Laboratory Services'
    },
    {
        img: "./src/assests/Services/service2.png",
        service: 'Microbiology & Disease Services'
    },
    {
        img: "./src/assests/Services/service3.png",
        service: 'Molecular and Genetic Services'
    },
    {
        img: "./src/assests/Services/service3.png",
        service: 'Immunology & Allergy Services'
    },
]


const Services = () => {

    return (
        <Wrapper>
            <div className="max-w-full m-auto">

                <h1 className="text-4xl font-bold text-center mt-15 max-w-150 mx-auto text-[#22334F]">
                    Our Popular Clinical Pathology Laboratories Test Services
                </h1>
                <div className="flex flex-wrap mx-auto justify-center gap-6 mt-20">
                    {services.map((s, index) => (
                        <Card key={index} image={s.img} service={s.service} />
                    ))}
                </div>
            </div>

        </Wrapper>
    )
}

export default Services;

const Card = ({ image, service }) => {

    return (
        <div className="card flex flex-col gap-[2rem] items-center bg-[#F0E9F3] w-100 lg:w-66 h-90 pt-15 shadow-sm hover:shadow-xl hover:scale-105 duration-300 hover:bg-[#F2F0F2]">
            <figure className="h-[10rem] w-[10rem]">
                <img
                    src={image}
                    alt="Shoes"
                    className="p-5 object-contain w-full h-full  bg-red-200 rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <Button variant="contained"
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgb(78, 94, 124)',
                            color: 'white',
                        },
                    }}
                >{service}</Button>
            </div>
        </div>
    )
}