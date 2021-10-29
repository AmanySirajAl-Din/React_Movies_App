import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

import MovieItem from "../Components/MovieCard";
import Pagination from "../Components/Pagination";

import axiosInstance from "../Network/AxiosConfig";

export default function Movies(props) {
    const [movies, setMovie] = useState([]);
    const [total_pages, setTotalPages] = useState(0);
    //let [page, setPage] = useState(Number(props.match.params.page) || 1);
    //or
    let [page, setPage] = useState(useParams().page || 1);


    console.log(useParams());

    const pageNumFun = (pageToGo) => {
        //console.log("pageToGo " + pageToGo)
        switch (pageToGo) {
            case "-1":
                if (page !== 1) {
                    setPage(--page);
                }
                break;
            case "+1":
                if (page !== total_pages) {
                    setPage(++page);
                }
                break;
            default:
                setPage(page = pageToGo);
        };
        //console.log("page " + page)
    };

    useEffect(() => {
        props.history.push(`/movies/page=${page}`); // change URL to put page number as param

        axiosInstance
            .get(`popular?api_key=b6df6e2465b3dff1fffe5943c196a3a5&page=${page}`)
            .then((res) => {
                setMovie(res.data.results)
                //console.log("then")
                //console.log(movies)
                setTotalPages(res.data.total_pages);
                console.log(res.data.results)
            })
            .catch((err) => console.log(err));

    }, [page, props.history]);

    return (
        <Container className="row m-auto">
            {movies.map((movie) => {
                movie.backdrop_path = `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`
                return <MovieItem key={movie.id} title={movie.title} poster={movie.backdrop_path} release_date={movie.release_date} />;
            })}
            <Pagination page={page} total_pages={total_pages} handelClick={pageNumFun} />
        </Container >
    );
};