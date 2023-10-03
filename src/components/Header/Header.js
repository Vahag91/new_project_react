
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./logo.png"


export default function Header(){

    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="news" style={{width: "50px"}}/>
          </Navbar.Brand>
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
                className="m-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className='m-2'>Search</Button>
              <Button variant="primary" className='m-2'>Login</Button>
              <Button variant="outline-danger" className='m-2'>Logout</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}