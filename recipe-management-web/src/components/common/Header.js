import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="light-grey">
      <Nav>
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/recipies">
          Recipies
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

export default Header;
