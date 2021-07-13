import Modal from 'react-bootstrap/Modal'

function AlertModal(props) {

    return (
        <Modal
        {...props}
          id="saveItineraryModal"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              
            </Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <p>
              {props.message}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button id="saveItineraryCancelButton" className="defaultButton" onClick={props.onHide}>Dismiss</button>
          </Modal.Footer>
        </Modal>
      );
    }
  
export default AlertModal