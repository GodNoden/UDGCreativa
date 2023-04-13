import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopMenu.css';

function TopMenu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <video width="80" height="60" autoPlay loop muted>
              <source src="UDG.mp4" type="video/mp4"></source>
            </video>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">UDG Creativa</Nav.Link>
            <Nav.Link href="#CentrosUniversitarios">Centros Universitarios</Nav.Link>
            <Nav.Link href="#ProximosEventos">Próximos Eventos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopMenu;
