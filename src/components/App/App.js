import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {

  return(

    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#">BOOTSTRAP</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Contacts</Nav.Link>
          <Nav.Link href="#">Info</Nav.Link>
          <Nav.Link href="#">About us</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
          <Button variant="outline-primary">Login</Button>
          <Button variant="outline-danger">Logout</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

  
}

export default App