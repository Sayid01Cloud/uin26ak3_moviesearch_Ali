import { useState, useEffect } from "react";
import  MovieCard  from "../Komponenter/MovieCard";

function MoviePage() {
    const [movieData, setMovieData] = useState(null);
    const fetchMovieData = async () => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&t=${id}`);
        const data = await response.json();
        setMovieData(data);
    };

    useEffect(() => {
        fetchMovieData();
    }, []); 

    return (
        <>
        <h1>Movies</h1>
        <ul>
            {Movies.map(movie => (
                <li key={movie.id}>
                    <MovieCard movie={movie} />
                </li>
            ))}
        </ul>
        </>
    );

}

export default MoviePage;
