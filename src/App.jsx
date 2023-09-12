import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Login  from './Pages/Login';
import Movies from './Pages/Movies';
import Movie from './Pages/Movie';
import About from './Pages/About';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/> 
      <Route path="/movies" element={<Movies/>}/> 
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
