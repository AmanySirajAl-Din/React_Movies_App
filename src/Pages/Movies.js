import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import MovieCard from "../Components/MovieCard";

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
        <Container className="row m-auto">
            {movies.map((movie) => {
                movie.backdrop_path = `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`
                return <MovieCard key={movie.id} title={movie.title} poster={movie.backdrop_path} />;
            })}
        </Container >
    );
};