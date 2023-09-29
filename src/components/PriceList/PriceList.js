import { Container, Card, Button } from "react-bootstrap"


export default function PriceList() {

    const cardsData = [
        {
            title: 'Free',
            price: '$0/mo',
            description: '10 users included 2 GB of storage Email support Help center access',
            buttonText: 'Sign up for free',
        },
        {
            title: 'Pro',
            price: '$15/mo',
            description: '30 users included 2 GB of storage Email support Help center access',
            buttonText: 'Get started',
        },
        {
            title: 'Enterprise',
            price: '$29/mo',
            description: '10 users included 2 GB of storage Email support Help center access',
            buttonText: 'Contact us',
        },

    ];

    const cardComponents = cardsData.map((info,index) => (
        <Card 
        key={index}
        className="text-center mt-5  " 
        style={{ width: '18rem', height: "300px" }}>
            <Card.Header as="h5">{info.title}</Card.Header>
            <Card.Body>
                <Card.Title>{info.price}</Card.Title>
                <Card.Text>{info.description}</Card.Text>
                <Button variant="primary">{info.buttonText}</Button>
            </Card.Body>
        </Card>
    ));


    return (
        <Container>
            <Container
                className="text-center"
                style={{
                    width: "400px",
                    marginTop: "200px"
                }}>
                <h2> Pricing</h2>
                <p>Quickly build an effective pricing table
                    for your potential customers with this
                    Bootstrap example. It’s built with default
                    Bootstrap components and utilities with
                    little customization.</p>
            </Container>


            <Container className="d-flex flex-row justify-content-evenly mt-3 h-200">
                {cardComponents}
            </Container>


        </Container>

    );

    // <Container>
    //     <Container
    //         className="text-center"
    //         style={{
    //             width: "400px",
    //             marginTop: "200px"
    //         }}>
    //         <h2> Pricing</h2>
    //         <p>Quickly build an effective pricing table
    //             for your potential customers with this
    //             Bootstrap example. It’s built with default
    //             Bootstrap components and utilities with
    //             little customization.</p>
    //     </Container>


    //     <Card className="text-center mt-5" style={{ width: '18rem' }}>
    //         <Card.Header as="h5">Free</Card.Header>
    //         <Card.Body>
    //             <Card.Title>$0/mo</Card.Title>
    //             <Card.Text>
    //                 10 users included
    //                 2 GB of storage
    //                 Email support
    //                 Help center access
    //             </Card.Text>
    //             <Button variant="primary">Sign up for free</Button>
    //         </Card.Body>
    //     </Card>





    // 
    // )
}