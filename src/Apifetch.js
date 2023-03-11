import axios from "axios";
import { useState, useEffect } from "react";
import './api.css'

function Apifetch() {
    const [movies, setMovies] = useState([]);
    const [showMovies, setShowMovies] = useState(false)


    useEffect(() => async function fetchData() {

        const response = await axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war");
        setMovies(response.data.Search);
        setShowMovies(true)

    })
    return (
        <div>

            <div className="movies_container">
                {
                    showMovies && movies.map((movie) => {
                        return (
                            <div key={movie.Id} className="movie">
                                <div className="image-wrapper">
                                    <img src={movie.Poster} alt="" />
                                </div>
                                <div className="details-wrapper">
                                    <p className="movie_name">{movie.Title}</p>
                                    <p className="movie_year">{movie.Year}</p>

                                </div>



                            </div>




                        )
                    })
                }

            </div>
        </div>

    )

}
export default Apifetch;