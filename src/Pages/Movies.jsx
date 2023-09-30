import '../App'
import MainWrapper from '../Components/MainWrapper'
import Navbar from '../Components/Navbar'
// import Search from '../Components/Search'
import AllMovies from '../Components/AllMovies'
// import SideBar from '../Components/SideBar'
import Footer from '../Components/Footer'


function Movies () {  
	return (
    <>
      <MainWrapper>
        <Navbar />
        {/* <Search /> */}
        {/* <SideBar /> */}
        <AllMovies />
      </MainWrapper>
      <Footer />
    </>
  )
}

export default Movies