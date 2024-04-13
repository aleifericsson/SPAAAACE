import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import logo from "../assets/favicon/android-chrome-512x512.png";

function Navig() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link href="/home">
          <div className="logo-container">
            <img className="logo" src={logo} />
            <Navbar.Brand>Space Game</Navbar.Brand>
          </div>
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/game">The Game</Nav.Link>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="/fact-machine">Fact Machine</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            {/*
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navig;
