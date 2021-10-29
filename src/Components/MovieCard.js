import { Card, Button } from "react-bootstrap";

export default function MovieItem({ title, poster, release_date }) {
    //const { title, poster } = props;
    return (
        <div className="col-lg-3 col-md-4 col-6 d-flex my-3">
            <Card className="shadow flex-fill">
                <Card.Img variant="top" src={poster} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {release_date}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};