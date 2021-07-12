import NavBar from "../Components/NavBarComponent";
import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'
import { useState } from "react";
import Container from "react-bootstrap/Container";
import ItineraryFilterModal from "../Components/ItineraryFilterModal";
import RandomItineraryModal from "../Components/RandomItineraryModal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ItineraryListContainer() {

    const filteredItineraries = useSelector(state => state.itineraries.filteredItineraries)

    const user = useSelector(state => state.user.currentUser)

    const [itineraryModalShow, setItineraryModalShow] = useState(false);

    const [randomModalShow, setRandomModalShow] = useState(false);

    return (
        <Container fluid className="backgroundColor">
            <NavBar />
            <Container fluid id="itineraryListContainer" className="containerWidth">
                    <Row>
                        <Col as="h1">Wander Itinerary Catalog</Col>
                        <Col style={{textAlign: 'right'}}><button id="filterButton" className="defaultButton" onClick={() => setItineraryModalShow(true)}>Filter</button></Col>
                    </Row>
                                
                <Container fluid id="itineraryListThumbnailContainer">
                    {filteredItineraries.length > 0
                    ? (<Row md={4}> {filteredItineraries.map(itinerary => <ItineraryThumbnailContainer parent="ItineraryListContainer" itinerary={itinerary} key={itinerary.id}/>)}</Row>)
                    : <Row> <Col as="h3" >We're sorry, it looks like no itineraries match your search criteria. Our catalog is continuously being updated, though, so please try this search again soon.</Col></Row>}
                    <ItineraryFilterModal show={itineraryModalShow} onHide={() => setItineraryModalShow(false)}/>
                </Container>
                <Row id="randomItineraryRow" as="h4" >Not sure where to wander? Let us surprise you!
                    <RandomItineraryModal show={randomModalShow} onHide={() => setRandomModalShow(false)}/>
                    <button id="chooseForMeButton" className="defaultButton" onClick={() => setRandomModalShow(true)}>Choose For Me</button>
                </Row>
            </Container>
        </Container>
    )
  }
  
  export default ItineraryListContainer;