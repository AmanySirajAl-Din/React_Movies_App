import { Card, Button } from "react-bootstrap";

import "./MovieCard.css"

export default function MovieItem({ title, poster, release_date }) {
    //const { title, poster } = props;
    return (
        <Card className="col-lg-3 col-md-4 col-5 shadow m-3">
            <Card.Img variant="top" src={poster} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {release_date}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};