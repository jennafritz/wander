import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { clearActivities } from '../reducers.js/activitiesReducer'
import { clearDays } from '../reducers.js/daysReducer'
import { clearItineraries } from '../reducers.js/itinerariesReducer'
import { clearPhotos } from '../reducers.js/photosReducer'
import { clearUserItineraries } from '../reducers.js/userItinerariesReducer'
import { clearUser } from '../reducers.js/userReducer'

function NavBarComponent() {

    const dispatch = useDispatch()
    const history = useHistory()

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
                <button id="logoutButton" className="defaultButton"
                onClick={() => {
                    dispatch(clearActivities())
                    dispatch(clearDays())
                    dispatch(clearItineraries())
                    dispatch(clearPhotos())
                    dispatch(clearUserItineraries())
                    dispatch(clearUser())
                    localStorage.clear()
                    history.push("/")
                }}
                >Log Out</button>
                {/* </Nav> */}
                </Col>
                </Nav>
            {/* </Row> */}
            </Container>
        </Navbar>
    )
  }
  
  export default NavBarComponent;