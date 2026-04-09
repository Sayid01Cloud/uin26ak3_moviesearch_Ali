import MovieCard from "./MovieCard";

function Movies({ movies }) {
    return (
        <section>
            {
                movies.map(movie => (
                    <MovieCard 
                        key={movie.imdbID}
                        title={movie.Title}
                        image={movie.Poster}
                        releaseDate={movie.Year}
                        imdbID={movie.imdbID}
                    />
                ))
            }
        </section>
    )

}
export default Movies;
