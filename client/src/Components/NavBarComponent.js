import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function NavBarComponent() {
    return (
        <Navbar className="navBar">
            <Container fluid id="navbarContainer">
            {/* <h3>NavBar Component</h3> */}
            {/* <Row> */}
                <Nav className="navBarSettings">
                <Col xs={1} style={{textAlign: 'center'}}>
                    <Navbar.Brand as={NavLink} id="navBarBrand" to="/profile">W</Navbar.Brand>
                </Col>
                {/* <Col xs={"auto"}> */}
                    <Col xs={"auto"}>
                    <Nav.Link as={NavLink}
                    to="/profile"
                    exact
                    >
                    Profile
                    </Nav.Link>
                    </Col>
                    <Col xs={"auto"}>
                    <Nav.Link as={NavLink}
                    to="/myJourneys"
                    exact
                    >
                    My Journeys
                    </Nav.Link>
                    </Col>
                    <Col xs={"auto"}>
                    <Nav.Link as={NavLink}
                    to="/catalog"
                    exact
                    >
                    Itinerary Catalog
                    </Nav.Link>
                    </Col>
                    <Col xs={"auto"}>
                    <Nav.Link as={NavLink}
                    to="/recommended"
                    exact
                    >
                    Recommended Adventures
                    </Nav.Link>
                    </Col>
                    <Col xs={"auto"}>
                    <Nav.Link as={NavLink}
                    to="/submitATrip"
                    exact
                    >
                    Submit a Trip
                    </Nav.Link>
                    </Col>
                {/* </Col> */}
                <Col xs={"auto"}>
                {/* <Nav> */}
                <button id="logoutButton" className="defaultButton">Log Out</button>
                {/* </Nav> */}
                </Col>
                </Nav>
            {/* </Row> */}
            </Container>
        </Navbar>
    )
  }
  
  export default NavBarComponent;