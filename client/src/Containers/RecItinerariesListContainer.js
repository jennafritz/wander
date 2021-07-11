import NavBar from '../Components/NavBarComponent'
import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useDispatch, useSelector} from 'react-redux'
import {recommendItineraries} from '../reducers.js/itinerariesReducer'
import {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RecItinerariesListContainer() {

    const dispatch = useDispatch()
    const recommendedItineraries = useSelector(state => state.itineraries.recommendedItineraries)
    // const myItineraries = useSelector(state => state.itineraries.myItineraries)
    // const user = useSelector(state => state.user.currentUser)

    return (
        <Container fluid className="backgroundColor">
            <NavBar />
            <Container fluid id="recItineraryListContainer" className="containerWidth">
                <Row>
                    <Col as="h1">Adventures Recommended For You</Col>
                </Row>
            <Container fluid id="recItineraryListThumbnailContainer">
               
                    {recommendItineraries.length > 0
                    ?  <Row md={4}> {recommendedItineraries.map(itinerary => <ItineraryThumbnailContainer parent="RecItinerariesListContainer" itinerary={itinerary} mine={false}/>)} </Row>
                    : <Col as="h4">Looks like there are no good matches for you right now. Our catalog is always being updated, though, so please check back again soon.</Col>}
                
            </Container>
            </Container>
        </Container>
    )
  }
  
  export default RecItinerariesListContainer;