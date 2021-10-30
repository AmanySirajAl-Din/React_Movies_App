import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router";

import MovieItem from "../Components/MovieCard";
import Pagination from "../Components/Pagination";

import axiosInstance from "../Network/AxiosConfig";

export default function Movies() {
    const pathImg = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const location = useLocation();
    const history = useHistory();

    const [movies, setMovie] = useState([]);
    const [total_pages, setTotalPages] = useState(0);

    //let [page, setPage] = useState(Number(props.match.params.page) || 1);
    //or
    let [page, setPage] = useState(useParams().page || 1);

    //console.log(useParams());

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

    //console.log(location)

    useEffect(() => {
        if (location.search === '') {
            history.push(`/movies/page=${page}`); // change URL to put page number as param

            axiosInstance
                .get(`/movie/popular?api_key=b6df6e2465b3dff1fffe5943c196a3a5&page=${page}`)
                .then((res) => {
                    setMovie(res.data.results)
                    //console.log("then")
                    //console.log(movies)
                    setTotalPages(res.data.total_pages);
                    console.log(res.data.results)
                })
                .catch((err) => console.log(err));
        } else {
            console.log("search " + location.search);
            history.push(`/movies/page=${page}${location.search}`); // change URL to put page number as param

            axiosInstance
                .get(`/search/movie?api_key=b6df6e2465b3dff1fffe5943c196a3a5&language=en-US&query=${location.search.split('?')[1]}&page=${page}&include_adult=false`)
                .then((res) => {
                    setMovie(res.data.results)
                    console.log("then")
                    setTotalPages(res.data.total_pages);
                    //console.log(movies);
                    console.log(res.data);
                    console.log(res.data.results);
                    console.log("total_pages " + res.data.total_pages);
                })
                .catch((err) => console.log(err));
        }

    }, [page, location.search]);

    return (
        <Container className="row m-auto">
            {movies.map((movie) => {

                if (movie.backdrop_path !== null && movie.backdrop_path !== "") {
                    movie.poster = pathImg + movie.backdrop_path;
                } else {
                    movie.poster = pathImg + movie.poster_path;
                }
                return <MovieItem key={movie.id} movie={movie} />;
            })}
            <Pagination page={page} total_pages={total_pages} handelClick={pageNumFun} />
        </Container >
    );
};