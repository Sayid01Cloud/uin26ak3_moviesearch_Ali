import { Link } from "react-router-dom";

function MovieCard({ title, image, releaseDate, id }) {
    return (
        <>

            <Link to={`/movie/${id}`}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>Release Date: {releaseDate}</p>
            </Link>
        </>
    )
}

export default MovieCard;

