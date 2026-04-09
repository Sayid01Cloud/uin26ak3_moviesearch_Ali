import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function MoviePage() {
    const { title } = useParams();
    const [movieData, setMovieData] = useState(null);
    const fetchMovieData = async () => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=5747f724&i=${title}`);
        const data = await response.json();
        setMovieData(data);
    };

    useEffect(() => {
        fetchMovieData();
    }, []); 

    return (
        <>
      <section>
        <h1>{movieData?.Title}</h1>
        <img src = {movieData?.Poster} alt={movieData?.Title} />
        <p>{movieData?.Year}</p>
      </section>
        </>
    );

}

export default MoviePage;
