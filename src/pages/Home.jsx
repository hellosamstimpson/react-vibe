import MovieCard from "../components/MovieCard"
import Hero from "../components/Hero"
import {useState} from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "1", release_date: "2020" },
        { id: 2, title: "2", release_date: "2021" },
        { id: 3, title: "3", release_date: "2022" },
        { id: 4, title: "4", release_date: "2023" },
        { id: 5, title: "5", release_date: "2024" },
        { id: 6, title: "6", release_date: "2025" },
        { id: 7, title: "7", release_date: "2026" },
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    };

    const heros = [{ id: 2, title: "Powering Your Awards, from Entry to Excellence", lead: "Awards Engine is the all-in-one platform designed for awards organisers, streamlining entry collection, judging, and winner announcements-all in one seamless system.", prod: "poo" }];

    return(
        <div>
            {heros.map((hero) => (
                <Hero key={hero.id} hero={hero} />
            ))}
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input 
                        type="text" 
                        placeholder="search for movies..." 
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-button">Search</button>
                </form>
                <div className="movies-grid">
                    {movies
                        .filter((movie) =>
                            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
                        )
                        .map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}


// the .map function is going to iterate over all the values in our array
// for each it will takes its values and pass it to this function (movie) =>
// you need to give a key id to each so react knows how to update everything in the backgroudn 

export default Home;