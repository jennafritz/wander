import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from '../Components/Carousel'

function RecItinerariesPreviewContainer() {

    const recommendedItineraries = useSelector(state => state.itineraries.recommendedItineraries)    
    let firstFour = recommendedItineraries.slice(0, 4)
    
    return (
        <Container fluid>
            <Container fluid className="previewHeader">
                <Row as="h1">Recommended Trips</Row>
            </Container>
            {recommendedItineraries.length > 0
            ?
            <Carousel show={4}>
                {recommendedItineraries.map(itinerary =>
                <Col xs={3}>
                    <ItineraryThumbnailContainer parent="RecItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>
                </Col>
                )}
            </Carousel>
            :
            <Container fluid className="previewContainerNoItineraries">
                <Col as="h4">Looks like there are no good matches for you right now. Our catalog is always being updated, though, so please check back again soon.</Col>
            </Container>
            }
        </Container>
    )
  }
  
  export default RecItinerariesPreviewContainer;
            // <Container fluid className="containerWidth">
            //     <CardDeck>
            //         {firstFour.length > 0
            //         ? firstFour.map(itinerary => <ItineraryThumbnailContainer parent="RecItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>)
            //         : <Col as="h4">Looks like there are no good matches for you right now. Our catalog is always being updated, though, so please check back again soon.</Col>}           
            //     </CardDeck>
            // </Container>