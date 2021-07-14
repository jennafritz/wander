import {useDispatch, useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Wander from '../Wander.jpg'

function ItineraryReviews({itineraryReviews}) {

    return (
        <Container id="reviewsContainer" >
            <Row style={{justifyContent: 'center'}}>
                <Row style={{textAlign: 'center'}}>
                    <Col as="h3">Reviews</Col>
                </Row>

                <Container >
                    {itineraryReviews.length > 0 
                    ? itineraryReviews.map(review => (
                        <Container id="wholeReviewContainer">
                            <Row id="reviewCommentAndImageRow">
                                <Col sm={2} id="reviewerImageCol">
                                    <Image src={review.user.picture ? review.user.picture : Wander} roundedCircle height='75px' width='75px'/>
                                </Col>
                                <Col sm={10}>
                                    <Row>
                                        <Col>{review.comment}</Col>
                                    </Row>
                                </Col>
                            <Row id="reviewerUsernameRow">
                                    <Col> - {review.user.username}</Col>
                            </Row>
                            </Row>
                        </Container>
                        ))
                    : null}
                </Container>
            </Row>

        </Container>
    )
}
  
  export default ItineraryReviews;