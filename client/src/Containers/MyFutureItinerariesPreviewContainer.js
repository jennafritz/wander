import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from '../Components/Carousel'

function MyFutureItinerariesPreviewContainer() {

    const myFutureItineraries = useSelector(state => state.itineraries.myFutureItineraries)
    let firstFour = myFutureItineraries.slice(0, 4)

    return (
        <Container fluid>
            <Container fluid className="previewHeader">
                <Row as="h1">Places I'm Going</Row>
            </Container>
            {myFutureItineraries.length > 0
            ?
            <Carousel show={4}>
                {myFutureItineraries.map(itinerary =>
                <Col xs={3}>
                    <ItineraryThumbnailContainer parent="myItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>
                </Col>
                    )}
            </Carousel>
            :
            <Container fluid className="previewContainerNoItineraries">
                <Col as="h4">You have no upcoming trips! Browse your recommended adventures or our full catalog to start wandering!</Col>
            </Container>
            }
        </Container>
    )
  }
  
  export default MyFutureItinerariesPreviewContainer;
        // <Container fluid className="containerWidth" >
        //     {/* <h1>My Itineraries Preview Container</h1> */}
        //     <Row as="h1">Places I'm Going</Row>
        //     <CardDeck>
        //         {firstFour.length > 0
        //         ? firstFour.map(itinerary => <ItineraryThumbnailContainer parent="myItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>)
        //         : <Col as="h4">You have no upcoming trips! Browse your recommended adventures or our full catalog to start wandering!</Col>}
        //     </CardDeck>
        // </Container>