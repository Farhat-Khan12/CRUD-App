import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
export default function NavBarDashBoard() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">CRUD Application</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">DASHBOARD</Nav.Link>
      <Nav.Link href="/alltask">ALL TASKS</Nav.Link>
      <Nav.Link href="/addtask">ADD TASKS</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="/">
        LOGOUT
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
  );
}
