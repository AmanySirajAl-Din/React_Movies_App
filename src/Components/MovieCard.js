import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { showMovieDetails } from "../redux/actions";
import { useHistory } from "react-router";

export default function MovieItem({ movie }) {
    //const { title, poster } = props;
    //console.log(movie)
    //const movieDetails = useSelector(state => state.movie_id);
    const history = useHistory();
    const dispatch = useDispatch();
    const showMovieDetails_fun = () => {
        console.log("showMovieDetails_fun");
        dispatch(showMovieDetails(movie.id));
        history.push(`/details/${movie.id}`);
        //return <Redirect to="/details" />
    };
    return (
        <div className="col-lg-3 col-md-4 col-6 d-flex my-3">
            <Card id={movie.id} className="shadow flex-fill">
                <Card.Img variant="top" src={movie.poster} alt="..." />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.release_date}
                    </Card.Text>
                </Card.Body>
                <Button variant="primary" onClick={showMovieDetails_fun}>Show Details</Button>
            </Card>
        </div>
    );
};