import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import ItineraryFilterForm from './ItineraryFilterForm';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

function ItineraryFilterModal(props) {


    const [criteria, setCriteria] = useState({
        season: null,
        length: null,
        locale: null,
        classification: null,
        budget: null
    })
    
    function handleChangeCriteria(event) {
        const key = event.target.name
        setCriteria({
            ...criteria,
            [key]: event.target.value
        })
    }

    return (
        <Modal
        id="filterModal"
        {...props}
          size="lg"
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Filter Itineraries
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="filterModalBody">
            <Container>
            <Form onSubmit={(event) => {
                event.preventDefault()
                props.filterItineraries(criteria)
                }}>
                <Container>
                    <Form.Label>Ideal Travel Season:</Form.Label>
                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="season"
                        id="Spring"
                        value="Spring"
                        checked={criteria.season === "Spring"}
                        onChange={handleChangeCriteria}
                        label="Spring"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="season"
                        id="Summer"
                        value="Summer"
                        checked={criteria.season === "Summer"}
                        onChange={handleChangeCriteria}
                        label="Summer"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="season"
                        id="Fall"
                        value="Fall"
                        checked={criteria.season === "Fall"}
                        onChange={handleChangeCriteria}
                        label="Fall"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="season"
                        id="Winter"
                        value="Winter"
                        checked={criteria.season === "Winter"}
                        onChange={handleChangeCriteria}
                        label="Winter"
                        />
                    </Form.Group>
                </Container>
                <Container>
                    <Form.Group>
                        <Form.Label htmlFor="length">Length: {criteria.length} Days</Form.Label>
                        <Form.Control 
                        className="filterRange"
                        required
                        type="range"
                        id="length"
                        name="length"
                        min="2"
                        max="31"
                        value={criteria.length}
                        onChange={handleChangeCriteria} />
                    </Form.Group>
                </Container>
                {/* <Form.Label>Length of Trip:</Form.Label>
                    <input 
                    type="radio"
                    name="length"
                    id="short"
                    value="short"
                    checked={criteria.length === "short"}
                    onChange={handleChangeCriteria}
                    />
                    <Form.Label htmlFor="short">Short (3 or Fewer Days)</Form.Label>

                    <input 
                    type="radio"
                    name="length"
                    id="medium"
                    value="medium"
                    checked={criteria.length === "medium"}
                    onChange={handleChangeCriteria}
                    />
                    <Form.Label htmlFor="medium">Medium (4-7 Days)</Form.Label>

                    <input 
                    type="radio"
                    name="length"
                    id="long"
                    value="long"
                    checked={criteria.length === "long"}
                    onChange={handleChangeCriteria}
                    />
                    <Form.Label htmlFor="long">Long (A Week or More)</Form.Label>*/}
                <Container>
                    <Form.Label>Ideal Travel Locale:</Form.Label>
                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="locale"
                        id="City"
                        value="City"
                        checked={criteria.locale === "City"}
                        onChange={handleChangeCriteria}
                        label="City"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="locale"
                        id="Country"
                        value="Country"
                        checked={criteria.locale === "Country"}
                        onChange={handleChangeCriteria}
                        label="Country"
                        />
                    </Form.Group>
                </Container>
                <Container>
                    <Form.Label>Ideal Type of Travel:</Form.Label>
                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="classification"
                        value="Adventure"
                        id="Adventure"
                        checked={criteria.classification === "Adventure"}
                        onChange={handleChangeCriteria}
                        label="Adventure"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="classification"
                        value="Culture"
                        id="Culture"
                        checked={criteria.classification === "Culture"}
                        onChange={handleChangeCriteria}
                        label="Culture"
                        />
                    </Form.Group>
                </Container>
                <Container>
                    <Form.Group>
                        <Form.Label>Typical Travel Budget:</Form.Label>
                        <Form.Check 
                        type="radio"
                        name="budget"
                        id="1"
                        value="1"
                        checked={criteria.budget === "1"}
                        onChange={handleChangeCriteria}
                        label="$"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="budget"
                        id="2"
                        value="2"
                        checked={criteria.budget === "2"}
                        onChange={handleChangeCriteria}
                        label="$$"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="budget"
                        id="3"
                        value="3"
                        checked={criteria.budget === "3"}
                        onChange={handleChangeCriteria}
                        label="$$$"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check 
                        type="radio"
                        name="budget"
                        id="4"
                        value="4"
                        checked={criteria.budget === "4"}
                        onChange={handleChangeCriteria}
                        label="$$$$"
                        />
                    </Form.Group>
                </Container>
                    <Form.Group style={{display: 'flex', justifyContent: 'center', marginBottom: '0px'}}>
                        <Form.Control id="filterSubmit" className="formSubmit" type="submit" value="Submit" />
                    </Form.Group>
            </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer style={{justifyContent: 'center'}}>
            <button id="clearFiltersButton" className="defaultButton" onClick={() => {
                props.clearFilters()
                setCriteria({
                    season: null,
                    length: null,
                    locale: null,
                    classification: null,
                    budget: null
                })
            }}>Clear</button>
          </Modal.Footer>
        </Modal>
      );
    }
  
export default ItineraryFilterModal