import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TopMenu = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/home");
  };

  return (
    <>
      {localStorage.getItem("username") ? (
        <>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="home">Home</Nav.Link>
                </Nav>
                <div className="ms-auto text-white">
                  Welcome: {localStorage.getItem("username")} <br />
                  Email: {localStorage.getItem("useremail")} <br />
                  <button onClick={logout} className="btn btn-light">Logout</button>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="home">Home</Nav.Link>
                  <Nav.Link as={Link} to="login">Login</Nav.Link>
                  <Nav.Link as={Link} to="registration">Registration</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
    </>
  );
};

export default TopMenu;
