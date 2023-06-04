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
                    <Nav.Link href="#bestproduct">베스트</Nav.Link>
                    <NavDropdown title="폰케이스" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">심플</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">카드</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">젤리</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">하드</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">플립/폴드</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="스마트톡" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">아크릴톡</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">물방울톡</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">에폭시톡</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">원형톡</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">하트톡</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={() => { navigate('/') }}>케이스+톡</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/') }}>아이패드</Nav.Link>
                    <NavDropdown title="에어팟/버즈" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">에어팟1/2</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">에어팟프로1/2</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">에어팟3</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">버즈/버즈플러스</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => { navigate('/') }} className="dropdown-a">버즈2/라이브/프로</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex" style={{alignItems:'center'}}>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"/>
                    <Nav.Link href="#action1">
                      <img src={process.env.PUBLIC_URL + "/img/search.png"} alt="search" />
                    </Nav.Link>
                    <Nav.Link onClick={()=>{navigate("/login")}}>
                      {/* <i class="fa-regular fa-user login"></i> */}
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