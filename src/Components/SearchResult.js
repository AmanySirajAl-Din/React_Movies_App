import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

import MovieItem from "../Components/MovieCard";
import Pagination from "../Components/Pagination";

import axiosInstance from "../Network/AxiosConfig";

export default function SearchResult() {
    const [moviesSearch, setMoviesSearch] = useState([]);
    const [total_pages, setTotalPages] = useState(0);

    //console.log(useParams().searchTxt)
    const searchTxt = useParams().searchTxt;
    const history = useHistory();

    let [page, setPage] = useState(useParams().txt || 1);


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
        history.push(`/movies/search=${searchTxt}`); // change URL to put page number as param

        axiosInstance
            .get(`/search/movie?api_key=b6df6e2465b3dff1fffe5943c196a3a5&language=en-US&query=${searchTxt}&page=${page}&include_adult=false`)
            .then((res) => {
                setMoviesSearch(res.data.results)
                //console.log("then")
                //console.log(movies)
                setTotalPages(res.data.total_pages);
                console.log(res.data.results)
            })
            .catch((err) => console.log(err));

    }, [page, history]);

    return (
        <Container className="row m-auto">
            {moviesSearch.map((movie) => {
                if (movie.backdrop_path !== null || movie.backdrop_path !== "") {
                    movie.poster = `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`;
                } else {
                    movie.poster = `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`;
                }
                return <MovieItem key={movie.id} movie={movie} />;
            })}

            <Pagination page={page} total_pages={total_pages} handelClick={pageNumFun} />
        </Container >
    );
};