import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Headers extends Component {

  onLogin() {
    this.props.onLogin();
  }

  onLogout() {
    this.props.onLogout();
  }

  render() {
    let page;
    if(this.props.idToken) {
      page = <NavItem onClick={this.onLogin.bind(this)} href="#link">Logout</NavItem>
    } else {
      page = <NavItem onClick={this.onLogin.bind(this)} href="#link">Login</NavItem>
    }


    return (
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      {page}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default Headers;
