import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar bg="transparent" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Aesthetics in Jewelry</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/exceptionals">Exceptionals</Nav.Link>
              <Nav.Link href="/birthstones">Birthstones</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/visit">Visit Us</Nav.Link>
            </Nav>
            <Nav className="d-none d-lg-block">
              <Navbar.Text>Let's find you some amazing jewelry!</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
