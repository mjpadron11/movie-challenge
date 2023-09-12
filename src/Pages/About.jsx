import '../App'
import MainWrapper from '../Components/MainWrapper'
import Navbar from '../Components/Navbar'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'



function About () {  
	return (
    <>
    	<MainWrapper>
        <Navbar />
        <AboutUs />
    	</MainWrapper>
    <Footer />
    </>
  )
}

export default About