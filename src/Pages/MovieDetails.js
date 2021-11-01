import React, { useEffect, useState } from 'react';

import { useLocation, useParams } from 'react-router';
import { useSelector } from "react-redux";

import axiosInstance from "../Network/AxiosConfig";

export default function MovieDetails(props) {
    // console.log(props.match.params)
    const params = useParams();
    const location = useLocation();
    // {id : 12345}
    console.log(params);
    console.log(location);
    const pathImg = "https://www.themoviedb.org/t/p/w220_and_h330_face";

    const movie_id = useSelector(state => state.movie_id);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axiosInstance
            .get(`/movie/${movie_id}}?api_key=b6df6e2465b3dff1fffe5943c196a3a5`)
            .then((res) => {
                setMovie(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err));

    }, []);

    const moviePoster = () => {
        if (movie.backdrop_path !== null && movie.backdrop_path !== "") {
            console.log(pathImg + movie.backdrop_path);
            return pathImg + movie.backdrop_path;
        } else {
            return pathImg + movie.poster_path;
        }
    };

    return (
        <div className="container text-center">
            <h1>{movie.title}</h1>
            <div className="row">
                <img variant="top" src={moviePoster()} alt="..." />
            </div>
            <div className="row">
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}