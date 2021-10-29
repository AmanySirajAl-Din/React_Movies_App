import { Card, Button } from "react-bootstrap";

import "./MovieCard.css"

export default function MovieItem({ movie }) {
    //const { title, poster } = props;

    const toggelOverView = () => {

    }
    return (
        <div className="col-lg-3 col-md-4 col-6 d-flex my-3">
            <Card className="shadow flex-fill">
                <Card.Img variant="top" src={movie.poster_path} />
                <Card.Body onMouseOver={toggelOverView} onMouseOut={toggelOverView}>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.release_date}
                    </Card.Text>

                </Card.Body>
                <Button variant="primary">Go somewhere</Button>
            </Card>
        </div>
    );
};