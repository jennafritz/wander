import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { setUpProfile } from '../reducers.js/userReducer'
import { useAutocomplete } from "@ubilabs/google-maps-react-hooks";
import { useRef } from "react";
import { useGoogleMap } from "@ubilabs/google-maps-react-hooks";
import { recommendItineraries } from '../reducers.js/itinerariesReducer';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Questionnaire() {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user.currentUser)

    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState('')
    const {map} = useGoogleMap()

    const [formData, setFormData] = useState({
        travel_season: user.travel_season,
        travel_length: user.travel_length,
        travel_locale: user.travel_locale,
        travel_classification: user.travel_classification,
        budget: user.budget,
        latitude: "",
        longitude: ""
    })

    function handleChange(event) {
        const key = event.target.name
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    const onPlaceChanged = (place) => {
        if (place) {
            setInputValue(place.formatted_address || place.name)
            setFormData({
                ...formData,
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
            })
        }
        // console.log(place.geometry.location.lat())
        // console.log(place.geometry.location.lng())
        // console.log(place.formatted_address)
        inputRef.current && inputRef.current.focus()
    }

    useAutocomplete({
        inputField: inputRef && inputRef.current,
        // options: "", 
        // {
        //     fields: ['formatted_address', 'geometry', 'name', 'place_id', 'url']
        // },
        map,
        onPlaceChanged
      });

    // Their input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    // const handleSetUpProfile = () => {
    //    dispatch(setUpProfile({userId: user.id, ...formData}))        
    // }

    return (
        <Container fluid className="fullBackgroundImage verticalCenter">
            <Container id="questionnaireParentContainer">
                {/* <h3>Questionnaire Component</h3> */}
                <Row style={{textAlign: 'center'}}>
                    {user.travel_season ? <Col as="h1">Edit Your Profile</Col> : <Col as="h1">Set Up Your Profile</Col>}
                </Row>
                <Form className="formElement" onSubmit={(event) => {
                    event.preventDefault()
                    dispatch(setUpProfile({userId: user.id, ...formData})).then(response => {
                        if(response.error){
                            alert(response.payload)
                        } else {
                            dispatch(recommendItineraries(response.payload))
                            history.push("/profile")
                        }
                    })
                    }}>
                    <Container >
                        <Row>
                            <Col>
                                <Form.Label htmlFor="location">Your Location</Form.Label>
                                <Form.Control
                                required
                                id="location"
                                name="location"
                                ref={inputRef}
                                value={inputValue}
                                onChange={handleInputChange}
                                />
                                </Col>
                                <Col>
                                <Form.Label>Ideal Length of Travel (Days)</Form.Label>
                                <Form.Control 
                                required
                                type="number"
                                id="travel_length"
                                name="travel_length"
                                min="2"
                                value={formData.travel_length}
                                onChange={handleChange}
                                />
                            </Col>
                        </Row>

                        <Row className="radioRow">
                            <Col>
                                <Form.Label>Ideal Travel Season:</Form.Label>
                                <Form.Check 
                                required
                                type="radio"
                                name="travel_season"
                                id="Spring"
                                value="Spring"
                                checked={formData.travel_season === "Spring"}
                                onChange={handleChange}
                                label="Spring"
                                />

                                <Form.Check 
                                required
                                type="radio"
                                name="travel_season"
                                id="Summer"
                                value="Summer"
                                checked={formData.travel_season === "Summer"}
                                onChange={handleChange}
                                label="Summer"
                                />

                                <Form.Check 
                                required
                                type="radio"
                                name="travel_season"
                                id="Fall"
                                value="Fall"
                                checked={formData.travel_season === "Fall"}
                                onChange={handleChange}
                                label="Fall"
                                />

                                <Form.Check 
                                required
                                type="radio"
                                name="travel_season"
                                id="Winter"
                                value="Winter"
                                checked={formData.travel_season === "Winter"}
                                onChange={handleChange}
                                label="Winter"
                                />
                            </Col>

                            <Col>
                                <Form.Label>Typical Travel Budget:</Form.Label>
                                <Form.Check 
                                required
                                type="radio"
                                name="budget"
                                id="1"
                                value="1"
                                checked={String(formData.budget) === "1"}
                                onChange={handleChange}
                                label="$"
                                />

                                <Form.Check 
                                required
                                type="radio"
                                name="budget"
                                id="2"
                                value="2"
                                checked={String(formData.budget) === "2"}
                                onChange={handleChange}
                                label="$$"
                                />

                                <Form.Check 
                                required
                                type="radio"
                                name="budget"
                                id="3"
                                value="3"
                                checked={String(formData.budget) === "3"}
                                onChange={handleChange}
                                label="$$$"
                                />

                                <Form.Check 
                                required
                                type="radio"
                                name="budget"
                                id="4"
                                value="4"
                                checked={String(formData.budget) === "4"}
                                onChange={handleChange}
                                label="$$$$"
                                />
                            </Col>
                        </Row>

                        <Row className="radioRow">
                            <Col>
                                <Form.Label>Ideal Travel Locale:</Form.Label>
                                <Form.Check 
                                required
                                type="radio"
                                name="travel_locale"
                                id="City"
                                value="City"
                                checked={formData.travel_locale === "City"}
                                onChange={handleChange}
                                label="City"
                                />

                                <Form.Check 
                                required
                                type="radio"
                                name="travel_locale"
                                id="Country"
                                value="Country"
                                checked={formData.travel_locale === "Country"}
                                onChange={handleChange}
                                label="Country"
                                />
                            </Col>
                            <Col>
                                <Form.Label>Ideal Type of Travel:</Form.Label>
                                <Form.Check 
                                required
                                type="radio"
                                name="travel_classification"
                                value="Adventure"
                                id="Adventure"
                                checked={formData.travel_classification === "Adventure"}
                                onChange={handleChange}
                                label="Adventure"
                                />

                                <Form.Check 
                                required
                                type="radio"
                                name="travel_classification"
                                value="Culture"
                                id="Culture"
                                checked={formData.travel_classification === "Culture"}
                                onChange={handleChange}
                                label="Culture"
                                />
                            </Col>
                        </Row>
                        <Row style={{justifyContent: 'center', marginTop: '0px', marginBottom: '0px'}}>
                            <Form.Control id="questionnaireSubmit" className="formSubmit" type="submit" value="Submit" />
                        </Row>
                    </Container>
                </Form>
            </Container>
        </Container>
    )
  }
  
  export default Questionnaire;