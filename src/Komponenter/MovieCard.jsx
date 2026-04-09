import { Link } from "react-router-dom";

function MovieCard({ title, image, releaseDate, imdbID }) {
    return (
        <>

            <Link to={`/movie/${imdbID}`}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>Release Date: {releaseDate}</p>
            </Link>
        </>
    )
}

export default MovieCard;

