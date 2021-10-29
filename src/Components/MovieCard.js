import { Card, Button } from "react-bootstrap";

import "./MovieCard.css"

export default function MovieItem(props) {
    
    return (
        <Card className="col-lg-3 col-md-4 col-5 shadow m-3">
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};