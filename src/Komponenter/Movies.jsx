import { useParams } from "react-router-dom";
import { useState, useEffect,} from "react";

function Movies () {
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);

    const getMovie = async () => { 
        const response = await fetch (`https://www.omdbapi.com/?apikey=YOUR_API_KEY&t=${id}`)
        const data = await response.json();
        setMovieData(data);
}

useEffect(() => {
    getMovie();
}, [id]);

return (
    <>
    <h1>{movieData?.title}</h1>
    <p>{movieData?.overview}</p>
    </>
)
}
export default Movies;
