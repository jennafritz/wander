import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyJourneysListContainer() {

    const myPastItineraries = useSelector(state => state.itineraries.myPastItineraries)
    const myFutureItineraries = useSelector(state => state.itineraries.myFutureItineraries)

    return (
        <Container fluid id="myJourneysListContainer">
            <Row>
                <Col as="h2">Places I've Been</Col>
            </Row>
            {myPastItineraries.length > 0
            ? (<Row md={4} className="thumbnailRow"> 
                {myPastItineraries.map(itinerary => <ItineraryThumbnailContainer itinerary={itinerary} key={itinerary.id} parent="MyJourneysListContainerPast" mine={true}/>)}
                </Row>)
            : <Row className="thumbnailRow"> <Col as="h3">You have no past trips! You can update your saved itineraries to reflect your previous journeys.</Col></Row>}

            <Row>
                <Col as="h2">Places I'm Going</Col>
            </Row>
            {myFutureItineraries.length > 0
            ? (<Row md={4} className="thumbnailRow"> 
                {myFutureItineraries.map(itinerary => <ItineraryThumbnailContainer itinerary={itinerary} key={itinerary.id} parent="MyJourneysListContainerFuture" mine={true}/>)}
                </Row>)
            : <Row className="thumbnailRow"> <Col as="h4">You have no upcoming trips! Browse your recommended adventures or our full catalog to start wandering!</Col></Row>}
        </Container>
    )
  }
  
  export default MyJourneysListContainer;