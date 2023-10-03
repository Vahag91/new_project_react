import { Container, Row } from "react-bootstrap";
import Cards from "../Cards/Cards";


export default function NewsCard({ cardData }) {



    const cardComponents = cardData.map((info, index) => (
        <Cards
            title={info.title}
            text={info.text}
            img={info.img}
            key={index} />
    ))

    return (

        <Container className="mt-4">
            <Row>
                {cardComponents}
            </Row>
        </Container>
    )
}