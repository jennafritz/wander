import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'

function MyItinerariesPreviewContainer() {

    const myItineraries = useSelector(state => state.itineraries.myItineraries)
    let firstFour = myItineraries.slice(0, 4)

    return (
        <Container fluid className="containerWidth" >
            {/* <h1>My Itineraries Preview Container</h1> */}
            <Row as="h1">Places I've Been</Row>
            <CardDeck>
                {firstFour.length > 0
                ? firstFour.map(itinerary => <ItineraryThumbnailContainer parent="myItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>)
                : <Col as="h4">You have no saved itineraries! Browse your recommended adventures or our full catalog to start wandering!</Col>}
            </CardDeck>
        </Container>
    )
  }
  
  export default MyItinerariesPreviewContainer;