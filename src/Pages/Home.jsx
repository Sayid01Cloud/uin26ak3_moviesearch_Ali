import { useEffect, useState } from "react";    
import Movies from "../Komponenter/Movies";

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");  

const fetchMovies = async (searchText) => {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchText.replace(/\s/g, '+')}&apikey=5747f724`);
        const data = await response.json();
        setMovies(data.Search || []);
    };

    useEffect(() => {
        if (searchText.length >= 3) {
            fetchMovies(searchText);
        } else { fetchMovies("james bond"); }
    }, [searchText]);

   
   

    return (
        <>
            <h1>Welcome to the Movie App</h1> 
            <input 
    type="text"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}

    />
            <Movies movies={movies} />
        </>
    );
}


    export default Home;