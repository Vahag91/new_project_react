import { Card, Col } from "react-bootstrap";

export default function Cards({ title, text, img, key }) {

    return (
        <Col lg={3} md={4} sm={6} key={key}>
            <Card className="mb-4">
                <Card.Img variant="top" src={img} style={{height:"200px"}} />
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