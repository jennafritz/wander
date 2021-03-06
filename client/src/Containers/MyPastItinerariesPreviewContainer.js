import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import { fetchMyPastItineraries } from '../reducers.js/itinerariesReducer'
import Carousel from '../Components/Carousel'

function MyPastItinerariesPreviewContainer() {

    // const dispatch = useDispatch()

    const myPastItineraries = useSelector(state => state.itineraries.myPastItineraries)
    
    // useEffect(() => {
    //     dispatch(fetchMyPastItineraries)
    // }, [myPastItineraries])

    let firstFour = myPastItineraries.slice(0, 4)

    return (
        <Container fluid>
            <Container fluid className="previewHeader">
                <Row as="h1">Places I've Been</Row>
            </Container>
            {myPastItineraries.length > 0
            ?
            <Carousel show={4}>
                    {myPastItineraries.map(itinerary =>
                    <Col xs={3}>
                        <ItineraryThumbnailContainer parent="myItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>
                    </Col>
                    )}
            </Carousel>
            :
            <Container fluid className="previewContainerNoItineraries">
                <Col as="h4">You have no saved itineraries! Browse your recommended adventures or our full catalog to start wandering!</Col>
            </Container>
            }
        </Container>
    )
  }
  
  export default MyPastItinerariesPreviewContainer;
        // <Container fluid className="containerWidth" >
        //     {/* <h1>My Itineraries Preview Container</h1> */}
        //     <Row as="h1">Places I've Been</Row>
        //     <CardDeck>
        //         {firstFour.length > 0
        //         ? firstFour.map(itinerary => <ItineraryThumbnailContainer parent="myItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>)
        //         : <Col as="h4">You have no saved itineraries! Browse your recommended adventures or our full catalog to start wandering!</Col>}
        //     </CardDeck>
        // </Container>