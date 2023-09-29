import { Container, Card, Button } from "react-bootstrap"


export default function PriceList() {

    const cardsData = [
        {
            title: 'Free',
            price: '$0/mo',
            description: '10 users included 2 GB of storage Email support Help center access',
            buttonText: 'Sign up for free',
            buttonView: "outline-primary"
        },
        {
            title: 'Pro',
            price: '$15/mo',
            description: '30 users included 2 GB of storage Email support Help center access',
            buttonText: 'Get started',
            buttonView: "primary"
        },
        {
            title: 'Enterprise',
            price: '$29/mo',
            description: '10 users included 2 GB of storage Email support Help center access',
            buttonText: 'Contact us',
            buttonView: "primary"
        },

    ];

    const cardComponents = cardsData.map((info,index) => (
        <Card 
        bg="dark"
        key={index}
        className="text-center mt-5 fs-5 border border-secondary" 
        style={{ width: '18rem', height: "300px",color:"white" }}>
            <Card.Header as="h5" style={{backgroundColor:"grey"}} >{info.title}</Card.Header>
            <Card.Body className="d-flex flex-column align-items-center justify-content-evenly border border-secondary">
                <Card.Title as="h2">{info.price}</Card.Title>
                <Card.Text>{info.description}</Card.Text>
                <Button size="lg" variant={info.buttonView}>{info.buttonText}</Button>
            </Card.Body>
        </Card>
    ));


    return (
        <Container style={{ color: "white"}}>
            <Container
                className="text-center"
                style={{
                    width: "400px",
                    marginTop: "100px",
                    }}>
                <h2 className="fs-1"> Pricing</h2>
                <p className="fs-5 text-body-primary">Quickly build an effective pricing table
                    for your potential customers with this
                    Bootstrap example. It built with default
                    Bootstrap components and utilities with
                    little customization.</p>
            </Container>


            <Container className="d-flex flex-row flex-wrap justify-content-evenly mt-3 h-200">
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