import Modal from 'react-bootstrap/Modal'

function AlertModal(props) {

  console.log(props)
    return (
      <Modal
        {...props}
          id="saveItineraryModal"
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              
            </Modal.Title>
          </Modal.Header> */}
          <Modal.Body style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
              {props.message}
          </Modal.Body>
          <Modal.Footer>
            <button id="saveItineraryCancelButton" className="defaultButton" onClick={() => props.alertControl()}>Dismiss</button>
          </Modal.Footer>
        </Modal>
      );
    }
  
export default AlertModal