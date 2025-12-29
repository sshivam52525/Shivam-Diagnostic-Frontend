import Hero from './Hero'
import Services from './Services'
import Other from './Other'
import HomePackages from './HomePackages'
import Reviews from './Reviews'
import LabAccreditation from './LabAccreditation'
import Processing from './Processing'


const Home = () => {

    return (
        <>
            <Hero />
            <Services />
            <Other />
            <Processing />
            <HomePackages/>
            <Reviews/>
            <LabAccreditation/>
        </>
    )
}

export default Home;