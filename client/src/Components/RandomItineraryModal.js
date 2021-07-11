import Modal from 'react-bootstrap/Modal'
import ItineraryThumbnailContainer from '../Containers/ItineraryThumbnailContainer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function RandomItineraryModal(props) {


    const user = useSelector(state => state.user.currentUser)
    const [randomItinerary, setRandomItinerary] = useState({})

    useEffect(() => {
        generateRandomItinerary()
    }, [])

    const generateRandomItinerary = () => {
        fetch(`http://localhost:3000/itineraries/generate_random_itinerary?userId=${user.id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "Content-Type": "application/json"
            }
        })  
        .then(res => res.json())
        .then(generatedItinerary => setRandomItinerary(generatedItinerary))
    }

    return (
        <Modal
        {...props}
          id="randomItineraryModal"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton >
            <Modal.Title id="contained-modal-title-vcenter" >
              How about some time in {randomItinerary.destination} this {randomItinerary.season}?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <ItineraryThumbnailContainer parent="RandomItineraryModal" itinerary={randomItinerary} key={randomItinerary.id}/>
          </Modal.Body>
          <Modal.Footer >
              Not what you had in mind?
            <button id="tryAgainButton" className="defaultButton" onClick={generateRandomItinerary}>Try Again</button>
          </Modal.Footer>
        </Modal>
      );
    }
  
export default RandomItineraryModal