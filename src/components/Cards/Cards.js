import { Card, Col } from "react-bootstrap";

export default function Cards({ title, text, img }) {

    return (
        <Col lg={3} md={4} sm={6}>
            <Card className="mb-4">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}