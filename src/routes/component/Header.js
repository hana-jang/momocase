import { Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {
  let navigate = useNavigate();
  return (
    <header>
      <div className="header-wrap">
        {['xxl'].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand onClick={() => { navigate('/') }} className="logo"></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#bestproduct">BEST</Nav.Link>
                    <Nav.Link href="#new">NEW</Nav.Link>
                  </Nav>
                  <Form className="d-flex" style={{alignItems:'center'}}>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"/>
                    <Nav.Link onClick={()=>{navigate('/')}}>
                      <img src={process.env.PUBLIC_URL + "/img/search.png"} alt="search" />
                    </Nav.Link>
                    <Nav.Link onClick={()=>{navigate("/login")}}>
                      <img src={process.env.PUBLIC_URL + "/img/login.png"} className="login" alt="login"/>
                    </Nav.Link>
                    <Nav.Link onClick={() => { navigate("/cart") }}>
                      <img src={process.env.PUBLIC_URL + "/img/cart.png"} alt="cart" className="cartimg"/>
                    </Nav.Link>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </header>
  )
}

export default Header;