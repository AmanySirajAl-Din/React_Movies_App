import { useState, useEffect } from "react";

import axiosInstance from "../Network/AxiosConfig";

export default function Movies() {
    const [movies, setMovie] = useState([]);
    useEffect(() => {
        axiosInstance
            .get("/3/movie/popular?api_key=b6df6e2465b3dff1fffe5943c196a3a5")
            .then((res) => {
                setMovie(res.data.results)
                //console.log("then")
                //console.log(movies)
            })
            .catch((err) => console.log(err));
    }, []); // to run on load

    return (
        <div>
            <h1>Movies list</h1>
            <ul>
                {movies.map((movie) => {
                    return <li key={movie.id}>{movie.title}</li>;
                })}
            </ul>
        </div>
    );
};