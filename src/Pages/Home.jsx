import '../App'
import HomeBackground from '../Components/HomeBackground'
import MainWrapper from '../Components/MainWrapper'
import Navbar from '../Components/Navbar'
import Welcome from '../Components/Welcome'
import MoviesInfo from '../Components/MoviesInfo'
import LatestReleases from '../Components/LatestReleases'
import Footer from '../Components/Footer'



function Home () { 
	return (
    <>
    <HomeBackground />
      <MainWrapper>
        <Navbar />
        <Welcome />
        <MoviesInfo />
        <LatestReleases />
      </MainWrapper>
    <Footer />
    </>
  )
}

export default Home
