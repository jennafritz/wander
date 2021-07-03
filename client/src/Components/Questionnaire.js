import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { setUpProfile } from '../reducers.js/userReducer'

function Questionnaire() {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user.currentUser)

    const [formData, setFormData] = useState({
        travel_season: "",
        travel_length: "",
        travel_locale: "",
        travel_classification: "",
        budget: ""
    })

    function handleChange(event) {
        const key = event.target.name
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    // const handleSetUpProfile = () => {
    //    dispatch(setUpProfile({userId: user.id, ...formData}))        
    // }

    return (
        <div>
            <h3>Questionnaire Component</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                dispatch(setUpProfile({userId: user.id, ...formData})) 
                }}>
                <div>
                    <label>Ideal Travel Season:</label><br />
                    <input 
                    type="radio"
                    name="travel_season"
                    id="Spring"
                    value="Spring"
                    checked={formData.travel_season === "Spring"}
                    onChange={handleChange}
                    />
                    <label htmlFor="Spring">Spring</label><br/>

                    <input 
                    type="radio"
                    name="travel_season"
                    id="Summer"
                    value="Summer"
                    checked={formData.travel_season === "Summer"}
                    onChange={handleChange}
                    />
                    <label htmlFor="Summer">Summer</label><br/>

                    <input 
                    type="radio"
                    name="travel_season"
                    id="Fall"
                    value="Fall"
                    checked={formData.travel_season === "Fall"}
                    onChange={handleChange}
                    />
                    <label htmlFor="Fall">Fall</label><br/>

                    <input 
                    type="radio"
                    name="travel_season"
                    id="Winter"
                    value="Winter"
                    checked={formData.travel_season === "Winter"}
                    onChange={handleChange}
                    />
                    <label htmlFor="Winter">Winter</label>
                </div>
                <label>Ideal Length of Travel (in Days)</label><br/>
                <input 
                type="number"
                id="travel_length"
                name="travel_length"
                value={formData.travel_length}
                onChange={handleChange}
                />
                <div>
                    <label>Ideal Travel Locale:</label><br />
                    <input 
                    type="radio"
                    name="travel_locale"
                    id="City"
                    value="City"
                    checked={formData.travel_locale === "City"}
                    onChange={handleChange}
                    />
                    <label htmlFor="City">City</label><br/>

                    <input 
                    type="radio"
                    name="travel_locale"
                    id="Country"
                    value="Country"
                    checked={formData.travel_locale === "Country"}
                    onChange={handleChange}
                    />
                    <label htmlFor="Country">Country</label><br/>
                </div>
                <div>
                    <label>Ideal Type of Travel:</label><br />
                    <input 
                    type="radio"
                    name="travel_classification"
                    value="Adventure"
                    id="Adventure"
                    checked={formData.travel_classification === "Adventure"}
                    onChange={handleChange}
                    />
                    <label htmlFor="Adventure">Adventure</label><br/>

                    <input 
                    type="radio"
                    name="travel_classification"
                    value="Culture"
                    id="Culture"
                    checked={formData.travel_classification === "Culture"}
                    onChange={handleChange}
                    />
                    <label htmlFor="Culture">Culture</label><br/>
                </div>
                <div>
                    <label>Typical Travel Budget:</label><br />
                    <input 
                    type="radio"
                    name="budget"
                    id="1"
                    value="1"
                    checked={formData.budget === "1"}
                    onChange={handleChange}
                    />
                    <label htmlFor="1">$</label><br/>

                    <input 
                    type="radio"
                    name="budget"
                    id="2"
                    value="2"
                    checked={formData.budget === "2"}
                    onChange={handleChange}
                    />
                    <label htmlFor="2">$$</label><br/>

                    <input 
                    type="radio"
                    name="budget"
                    id="3"
                    value="3"
                    checked={formData.budget === "3"}
                    onChange={handleChange}
                    />
                    <label htmlFor="3">$$$</label><br/>

                    <input 
                    type="radio"
                    name="budget"
                    id="4"
                    value="4"
                    checked={formData.budget === "4"}
                    onChange={handleChange}
                    />
                    <label htmlFor="4">$$$$</label><br />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
  }
  
  export default Questionnaire;