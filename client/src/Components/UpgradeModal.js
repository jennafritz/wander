import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { setUpProfile } from '../reducers.js/userReducer';

function UpgradeModal(props) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)

    return (
        <Modal
        {...props}
          id="upgradeModal"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Upgrade to Premium
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Good choice! By upgrading to a Premium account, you'll benefit from all the perks Wander has to offer, including unlimited access to all itineraries and booking links for most activities, plus more exclusive features coming soon!
            </p>
            <p>To proceed, please enter your credit card information.</p>
            <Form id="upgradeCreditCardForm">
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control 
                            type="text"
                            placeholder="Full Name"
                            disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control 
                            type="text"
                            placeholder="Card Number"
                            disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control 
                            as="select"
                            disabled>
                                <option>Month</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control 
                            as="select"
                            disabled>
                                <option>Year</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control 
                            type="select"
                            placeholder="cvv"
                            disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
                <p>By continuing, you authorize Wander to charge your credit card on a monthly basis until you cancel your subscription. To agree to these terms, choose Upgrade below. Otherwise, press Cancel.</p>
          </Modal.Body>
          <Modal.Footer>
            <button id="upgradeButton" className="defaultButton" onClick={() => {
                dispatch(setUpProfile({userId: user.id, premium: true})).then(() => props.onHide())
                }}>Upgrade</button>
            <button id="upgradeCancelButton" className="defaultButton" onClick={props.onHide}>Cancel</button>
          </Modal.Footer>
        </Modal>
      );
    }
  
export default UpgradeModal