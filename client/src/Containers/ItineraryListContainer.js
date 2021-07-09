import NavBar from "../Components/NavBarComponent";
import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'
import { useState } from "react";
import Container from "react-bootstrap/Container";
import ItineraryFilterModal from "../Components/ItineraryFilterModal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ItineraryListContainer() {

    const itineraries = useSelector(state => state.itineraries.allItineraries)
    const [filteredItineraries, setFilteredItineraries] = useState(itineraries)

    const user = useSelector(state => state.user.currentUser)

    const [modalShow, setModalShow] = useState(false);

    const filterItineraries = (criteria) => {
        let filteredItineraries = [...itineraries]
        Object.keys(criteria).forEach(requirement => {
            let searchValue = criteria[`${requirement}`]
            if(requirement === "length" || requirement === "budget"){
                searchValue = parseInt(criteria[`${requirement}`])
            }
            filteredItineraries = filteredItineraries.filter(itinerary => {
                if(!!searchValue === false){
                    return true 
                } else if(searchValue && searchValue === itinerary[`${requirement}`]){
                    return true
                } else if (searchValue && searchValue !== itinerary[`${requirement}`]){
                    return false
                }
            })
        })
        setFilteredItineraries(filteredItineraries)
        setModalShow(false)
    }

    const clearFilters = () => {
        setFilteredItineraries(itineraries)
        setModalShow(false)
    }
    
    return (
        <Container fluid className="backgroundColor">
            <NavBar />
            <Container fluid id="itineraryListContainer" className="containerWidth">
                    <Row>
                        <Col as="h1">Wander Itinerary Catalog</Col>
                        <Col style={{textAlign: 'right'}}><button id="filterButton" className="defaultButton" onClick={() => setModalShow(true)}>Filter</button></Col>
                    </Row>
                                
                <Container fluid id="itineraryListThumbnailContainer">
                    {filteredItineraries.length > 0
                    ? (<Row md={4}> {filteredItineraries.map(itinerary => <ItineraryThumbnailContainer parent="ItineraryListContainer" itinerary={itinerary} key={itinerary.id}/>)}</Row>)
                    : <Row> <Col as="h3" >We're sorry, it looks like no itineraries match your search criteria. Our catalog is continuously being updated, though, so please try this search again soon.</Col></Row>}
                    <ItineraryFilterModal show={modalShow} onHide={() => setModalShow(false)} filterItineraries={filterItineraries} clearFilters={clearFilters}/>
                </Container>
            </Container>
        </Container>
    )
  }
  
  export default ItineraryListContainer;