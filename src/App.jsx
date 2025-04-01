import MovieCard from "./components/MovieCard"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Typography from "./pages/Typography"
import { Routes, Route } from "react-router-dom"

function App() {

    const movieNumber = 0;

    // conditionals. 
    return (
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/typography" element={<Typography />} />
          </Routes>
        </main>
      </div>
    )
  }


export default App
