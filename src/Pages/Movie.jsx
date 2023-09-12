import '../App'
import MainWrapper from '../Components/MainWrapper'
import Navbar from '../Components/Navbar'
import Details from '../Components/Details'
import Footer from '../Components/Footer'



function Movie () {  
	return (
    <>
    	<MainWrapper>
        <Navbar />
        <Details />
    	</MainWrapper>
    <Footer />
    </>
  )
}

export default Movie