import Modal from 'react-bootstrap/Modal'
import { createUserItinerary } from '../reducers.js/userItinerariesReducer'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchAllItineraries, fetchMyFutureItineraries, fetchMyItineraries, fetchMyPastItineraries } from '../reducers.js/itinerariesReducer';
import { removeCreditFromUser } from '../reducers.js/userReducer';

function SaveItineraryModal(props) {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user.currentUser)
    const myItineraries = useSelector(state => state.itineraries.myItineraries)

    let mine = myItineraries.find(myItinerary => myItinerary.id === props.itinerary.id)
    
    return (
        <Modal
        {...props}
          id="saveItineraryModal"
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
              You must save this itinerary to your account in order to view its details. Doing so will reduce your account's itinerary credits by one. To continue, press Save below. Otherwise, click Cancel to return to the catalog.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button 
              id="saveItinerarySaveButton"
              className="defaultButton"
              onClick={() => {
                dispatch(createUserItinerary({user_id: user.id, itinerary_id: props.itinerary.id, past: false})).then(response => {
                    if(response.error){
                        alert(response.payload)
                        return response.payload
                    } else {
                        dispatch(removeCreditFromUser(user))
                        
                        dispatch(fetchMyItineraries(user.id)).then(() => dispatch(fetchMyPastItineraries(user.id))).then(() => dispatch(fetchMyFutureItineraries(user.id))).then(() => dispatch(fetchAllItineraries())).then((response) => {
                          let itinerary = response.payload.find(singleItinerary => singleItinerary.id === props.itinerary.id)
                          history.push(({pathname: "/itineraryDetails", state: {itinerary: itinerary, photos: props.photos, mine: true}}))
                        })
                    }
                })
            }}>Save</button>
            <button id="saveItineraryCancelButton" className="defaultButton" onClick={props.onHide}>Cancel</button>
          </Modal.Footer>
        </Modal>
      );
    }
  
export default SaveItineraryModal