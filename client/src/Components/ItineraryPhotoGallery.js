import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel'

function ItineraryPhotoGallery({photos}) {
    return (
        <Carousel id="photoGalleryCarousel">
            {/* <h3>Itinerary Photo Gallery Component</h3> */}
            {photos.map(photo => {
                return(
                <Carousel.Item>
                    <img id="carouselImage" src={photo.url} alt={photo.caption} height="500vh" className="d-block "/>
                    <Carousel.Caption>
                        <Container id="carouselImageCaption">{photo.caption}</Container>
                    </Carousel.Caption>
                </Carousel.Item>
                )
            })}
        </Carousel>
    )
  }
  
  export default ItineraryPhotoGallery;