import Modal from 'react-bootstrap/Modal'

function NoCreditsModal(props) {

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
              No Credit in Account
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              You have no credits left. Either submit a trip to our catalog for credit or upgrade to a Premium account for unlimited itinerary views.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button id="saveItineraryCancelButton" className="defaultButton" onClick={props.onHide}>Dismiss</button>
          </Modal.Footer>
        </Modal>
      );
    }
  
export default NoCreditsModal