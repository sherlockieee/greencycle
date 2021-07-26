import React from 'react';
import { Navbar, Button, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Navbar fixed="top" bg="light" expand="lg">
                        <Col>
                            <Navbar.Brand href="/">GreenCycle</Navbar.Brand>
                        </Col>
                        <Col lg={2} xl={2} md={6} xs={6} style={{'display': 'flex', 'justify-content': 'space-between'}}>
                            <Button className='btn' href="/cart">Cart</Button>
                            <Button variant = 'primary' href="/login">Login</Button>
                            <Button variant = 'outline-primary' href="/signup">Sign up</Button>
                        </Col>
                    </Navbar>
                </Row>
        </Container>
        </div>
    )
}
