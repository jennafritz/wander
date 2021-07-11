import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'

function RecItinerariesPreviewContainer() {

    const recommendedItineraries = useSelector(state => state.itineraries.recommendedItineraries)    
    let firstFour = recommendedItineraries.slice(0, 4)
    
    return (
        <Container fluid className="containerWidth">
            {/* <h1>Recommended Itineraries Preview Container</h1> */}
            <Row as="h1">Recommended Trips</Row>
            <CardDeck>
                {firstFour.length > 0
                ? firstFour.map(itinerary => <ItineraryThumbnailContainer parent="RecItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>)
                : <Col as="h4">Looks like you've saved all the itineraries in our catalog!</Col>}           
            </CardDeck>
        </Container>
    )
  }
  
  export default RecItinerariesPreviewContainer;