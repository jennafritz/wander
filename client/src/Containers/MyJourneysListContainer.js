import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyJourneysListContainer() {

    const myItineraries = useSelector(state => state.itineraries.myItineraries)

    return (
        <Container fluid id="myJourneysListContainer">
            <Row>
                <Col as="h2">Places I've Been</Col>
            </Row>
            {myItineraries.length > 0
            ? (<Row md={4}> 
                {myItineraries.map(itinerary => <ItineraryThumbnailContainer itinerary={itinerary} key={itinerary.id} parent="MyJourneysListContainer" mine={true}/>)}
                </Row>)
            : <Row> <Col as="h3">You have no saved itineraries! Browse your recommended adventures or our full catalog to start wandering!</Col></Row>}
        </Container>
    )
  }
  
  export default MyJourneysListContainer;