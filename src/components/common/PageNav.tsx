import * as React from "react";
import * as ReactDOM from "react-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

interface Props {}
interface State {}

export default class PageNav extends React.Component<Props, State> {
  public render() {
    return (
      <Navbar variant="dark" bg="dark" expand="md" fixed="top">
        <Navbar.Brand href="#">Ubunbun</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="http://kento/ex-gen-app">Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}
