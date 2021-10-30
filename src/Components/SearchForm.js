import { useState } from "react";
import ReactDOM from 'react-dom';

import { Form, FormControl, Button } from "react-bootstrap";

import SearchResult from "./SearchResult";
import { useHistory } from "react-router";

export default function SearchForm(props) {
    const [searchTxt, setSearchTxt] = useState("")

    const handleSearchChange = event => {
        setSearchTxt(event.target.value);
    };

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        //history.push(`/movies/search=${searchTxt}`); //For SearchResult Component
        history.push(`/movies?${searchTxt}`); //For Movies Component
    }

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