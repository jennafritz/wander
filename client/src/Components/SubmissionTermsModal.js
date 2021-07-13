import Modal from 'react-bootstrap/Modal'

function SubmissionTermsModal(props) {

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
                Submission Terms and Conditions
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            By submitting this trip you sign over the full rights to this content and transfer all ownership to Wander. 
            <br/>
            <br/>
            Wander reserves the right to deduct credits from or suspend the account of any user we believe is abusing the trip submission model in order to accumulate additional credits.
            <br/>
            <br/>
            To accept these terms, choose Continue below. Otherwise, press Cancel.
          </Modal.Body>
          <Modal.Footer>
            <button id="saveItineraryCancelButton" className="defaultButton" onClick={() => {
                props.onHide()
                props.handleCreateFullTrip()
            }}>Continue</button>
            <button id="saveItineraryCancelButton" className="defaultButton" onClick={props.onHide}>Cancel</button>
          </Modal.Footer>
        </Modal>
      );
    }
  
export default SubmissionTermsModal