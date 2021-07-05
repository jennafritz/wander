import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { createUserItinerary } from '../reducers.js/userItinerariesReducer'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchAllItineraries, fetchMyItineraries } from '../reducers.js/itinerariesReducer';
import { removeCreditFromUser } from '../reducers.js/userReducer';

function SaveItineraryModal(props) {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user.currentUser)
    
    return (
        <Modal
        {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Confirm Save Itinerary
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              You must save this itinerary to your account in order to view its details. Doing so will reduce your account's itinerary credits by one. To continue, press Save below. Otherwise, press Cancel to return to the catalog.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => {
                dispatch(createUserItinerary({user_id: user.id, itinerary_id: props.itinerary.id})).then(response => {
                    if(response.error){
                        alert(response.payload)
                        return response.payload
                    } else {
                        dispatch(removeCreditFromUser(user))
                        dispatch(fetchAllItineraries())
                        dispatch(fetchMyItineraries(user.id))
                        history.push(({pathname: "/itineraryDetails", state: {itinerary: props.itinerary, photos: props.photos}}))
                    }
                })
            }}>Save</Button>
            <Button onClick={props.onHide}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  
export default SaveItineraryModal