import { Card, Button } from "react-bootstrap";

import "./MovieCard.css"

export default function MovieItem({ title, poster, release_date }) {
    //const { title, poster } = props;
    const toggelOverView = () => {

    }
    return (
        <div className="col-lg-3 col-md-4 col-6 d-flex my-3">
            <Card className="shadow flex-fill">
                <Card.Img variant="top" src={poster} />
                <Card.Body onMouseOver={toggelOverView} onMouseOut={toggelOverView}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {release_date}
                    </Card.Text>
                </Card.Body>
                <Button variant="primary">Go somewhere</Button>
            </Card>
        </div>
    );
};