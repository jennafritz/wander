import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItineraryPhotoGallery({photos}) {
    return (
        <Container>
            <Row style={{textAlign: 'center'}}>
                <Col as="h3">Photo Gallery</Col>
            </Row>
            <Carousel id="photoGalleryCarousel">
                {/* <h3>Itinerary Photo Gallery Component</h3> */}
                {photos.map(photo => {
                    return(
                    <Carousel.Item>
                        <Container id="carouselImageContainer">
                            <img id="carouselImage" src={photo.url} alt={photo.caption} height="500vh" className="d-block center-block"/>
                        </Container>
                        <Carousel.Caption>
                            <Container id="carouselImageCaption">{photo.caption}</Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}
            </Carousel>
        </Container>
    )
  }
  
  export default ItineraryPhotoGallery;