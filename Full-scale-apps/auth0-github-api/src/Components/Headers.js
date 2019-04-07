import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Headers extends Component {

  onLogin() {
    this.props.onLogin();
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavItem onClick={this.onLogin.bind(this)} href="#link">Login</NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      // <Navbar>
      //   <Navbar.Header>
      //     <Navbar.Brand>
      //       "Github Searcher"
      //     </Navbar.Brand>
      //   </Navbar.Header>
      //   <Nav>
      //     <NavItem onClick={this.onLogin.bind(this)} href="#"> Login</NavItem>
      //   </Nav>
      // </Navbar>
    );
  }
}

export default Headers;
