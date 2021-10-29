import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

import { Form, FormControl, Button } from "react-bootstrap";
import axiosInstance from "../Network/AxiosConfig";

export default function SearchForm(props) {
    const [moviesSearch, setMoviesSearch] = useState([]);
    const [searchTxt, setSearchTxt] = useState("")

    const handleSearchChange = event => {
        setSearchTxt(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(`The name you entered was: ${searchTxt}`);
        //https://api.themoviedb.org/3/search/movie?api_key=b6df6e2465b3dff1fffe5943c196a3a5&language=en-US&query=luca&page=1&include_adult=false
        console.log("search");
        console.log(searchTxt);
        console.log(props);
        props.history.push('/addMovie')

        axiosInstance
            .get(`/search/movie?api_key=b6df6e2465b3dff1fffe5943c196a3a5&language=en-US&query=${searchTxt}&page=1&include_adult=false`)
            .then((res) => {
                setMoviesSearch(res.data.results)
                //console.log("then")
                //console.log(movies)

                console.log(res.data.results)
            })
            .catch((err) => console.log(err));

        props.history.push(`/movies/search=${searchTxt}`); // change URL to put page number as param
    }

    /* useEffect(() => {
        props.history.push(`/movies/search=${searchTxt}`); // change URL to put page number as param

        axiosInstance
            .get(`/search/movie?api_key=b6df6e2465b3dff1fffe5943c196a3a5&language=en-US&query=${searchTxt}&page=1&include_adult=false`)
            .then((res) => {
                setMoviesSearch(res.data.results)
                //console.log("then")
                //console.log(movies)

                console.log(res.data.results)
            })
            .catch((err) => console.log(err));

    }, [searchTxt, props.history]);
 */
    return (
        <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTxt}
                onChange={handleSearchChange}
            />
            <Button type="submit" variant="outline-danger">Search</Button>
        </Form>
    )
}

/* ReactDOM.render(<SearchForm />, document.getElementById('root')); */