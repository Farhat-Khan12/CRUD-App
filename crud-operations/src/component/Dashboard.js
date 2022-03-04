import React from 'react';
import { Container, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router';
//import '../components/Dashboard.css';
import NavBarDashBoard from './NavBar';
export default function Dashboard() {
  return(
    <>
      <Container>
        <NavBarDashBoard/>
        <Row>
          <h1>Welcome to Dashboard</h1>
          <h1>Welcome to Dashboard</h1>
          <h1>Welcome to Dashboard</h1>
          <h1>Welcome to Dashboard</h1>
        </Row>
      </Container>
    </>
  )
}