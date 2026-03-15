import { useEffect, useState } from "react";    
import MovieCard from "../Komponenter/MovieCard";

function Home() {
    const [movies, setMovies] = useState([]);

const fetchMovies = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s=james+bond&apikey=5747f724`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const [searchText, setSearchText] = useState("");   
   

    return (
        <>
            <h1>Welcome to the Movie App</h1> 
            <input 
    type="text"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}

    />
            <ul>
                {movies.map(movie => (
                    <li key={movie.imdbID}>
                        <MovieCard 
                        title={movie.Title}
                        image={movie.Poster}
                        releaseDate={movie.Year}
                        id={movie.imdbID}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}


    export default Home;