import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Michael Decroce-Movson
        </Navbar.Brand>
        <div className="NavBar-links">
          <Nav.Link href="#aboutme">About me</Nav.Link>
          <Nav.Link href="#myskills">My Skills</Nav.Link>
          <Nav.Link href="#mytimeline">My Timeline</Nav.Link>
          <Nav.Link href="#contactme">Contact Me</Nav.Link>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
