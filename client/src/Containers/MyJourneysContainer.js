import MyJourneysSummary from '../Components/MyJourneysSummary'
import MyJourneysListContainer from './MyJourneysListContainer'
import NavBar from '../Components/NavBarComponent'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyJourneysContainer({myItineraries}) {
    return (
        <Container fluid className="backgroundColor">
            <NavBar />
            <Container fluid className="containerWidth">
                <Row>
                    <Col as="h1">My Journeys</Col>
                </Row>
                <Row>
                    <MyJourneysSummary myItineraries={myItineraries}/>
                </Row>
                <Row>
                    <MyJourneysListContainer myItineraries={myItineraries}/>
                </Row>
            </Container>
        </Container>
    )
  }
  
  export default MyJourneysContainer;