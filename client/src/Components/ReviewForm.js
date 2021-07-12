import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { submitItineraryReview } from '../reducers.js/reviewsReducer'
import { fetchItineraryReviews } from '../reducers.js/reviewsReducer'

function ReviewForm({setShowReviewForm, itineraryId}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user.currentUser)

    const [comment, setComment] = useState("")

    function handleChange(event) {
        setComment(event.target.value)
    }

    return (
        <Container >
            <Row>
                <Col as="h4">Submit a Review</Col>
            </Row>
            <Form onSubmit={(event) => {
                event.preventDefault()
                dispatch(submitItineraryReview({comment: comment, user_id: user.id, itinerary_id: itineraryId}))
                // .then((response) => {
                //     if(response.error){
                //         alert(response.payload)
                //     } else {
                //         dispatch(fetchItineraryReviews(itineraryId))
                //     }
                // })
                setShowReviewForm(false)
                }}>
                <Form.Group >
                    {/* <Form.Label htmlFor="comment">Comment</Form.Label> */}
                    <Form.Control 
                    as="textarea"
                    id="comment"
                    value={comment}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Control id="submitReviewInput" className="formSubmit" type="submit" value="Submit"/>
            </Form>
        </Container>
    )
  }
  
  export default ReviewForm;