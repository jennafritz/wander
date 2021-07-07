import NavBar from "../Components/NavBar";
import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'
import { useState } from "react";

function ItineraryListContainer() {

    const itineraries = useSelector(state => state.itineraries.allItineraries)
    const [filteredItineraries, setFilteredItineraries] = useState(itineraries)
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

    const filterItineraries = () => {
        let filteredItineraries = [...itineraries]
        Object.keys(criteria).forEach(requirement => {
            let searchValue = criteria[`${requirement}`]
            if(requirement === "length" || requirement === "budget"){
                searchValue = parseInt(criteria[`${requirement}`])
            }
            filteredItineraries = filteredItineraries.filter(itinerary => {
                if(!!searchValue === false){
                    return true 
                } else if(searchValue && searchValue === itinerary[`${requirement}`]){
                    return true
                } else if (searchValue && searchValue !== itinerary[`${requirement}`]){
                    return false
                }
            })
        })
        setFilteredItineraries(filteredItineraries)
    }

    const clearFilters = () => {
        setFilteredItineraries(itineraries)
        setCriteria({
            season: null,
            length: null,
            locale: null,
            classification: null,
            budget: null
        })
    }

    return (
        <div>
            <NavBar />
            <br />
            {/* <h1>Itinerary List Container</h1> */}
            <h1>Wander Itinerary Catalog</h1>
            <br />
            <h3>Filter Itineraries</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                filterItineraries()
                // dispatch(setUpProfile({userId: user.id, ...filters})).then(response => {
                //     if(response.error){
                //         alert(response.payload)
                //     } else {
                //         history.push("/profile")
                //     }
                // })
                }}>
                <div>
                    <label>Ideal Travel Season:</label><br />
                    <input 
                    type="radio"
                    name="season"
                    id="Spring"
                    value="Spring"
                    checked={criteria.season === "Spring"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="Spring">Spring</label><br/>

                    <input 
                    type="radio"
                    name="season"
                    id="Summer"
                    value="Summer"
                    checked={criteria.season === "Summer"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="Summer">Summer</label><br/>

                    <input 
                    type="radio"
                    name="season"
                    id="Fall"
                    value="Fall"
                    checked={criteria.season === "Fall"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="Fall">Fall</label><br/>

                    <input 
                    type="radio"
                    name="season"
                    id="Winter"
                    value="Winter"
                    checked={criteria.season === "Winter"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="Winter">Winter</label>
                </div>
                <label htmlFor="length">Length: {criteria.length} Days</label>
                <input 
                required
                type="range"
                id="length"
                name="length"
                min="2"
                max="31"
                value={criteria.length}
                onChange={handleChangeCriteria} />
                {/* <label>Length of Trip:</label><br />
                    <input 
                    type="radio"
                    name="length"
                    id="short"
                    value="short"
                    checked={criteria.length === "short"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="short">Short (3 or Fewer Days)</label><br/>

                    <input 
                    type="radio"
                    name="length"
                    id="medium"
                    value="medium"
                    checked={criteria.length === "medium"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="medium">Medium (4-7 Days)</label><br/>

                    <input 
                    type="radio"
                    name="length"
                    id="long"
                    value="long"
                    checked={criteria.length === "long"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="long">Long (A Week or More)</label><br/>*/}
                <div>
                    <label>Ideal Travel Locale:</label><br />
                    <input 
                    type="radio"
                    name="locale"
                    id="City"
                    value="City"
                    checked={criteria.locale === "City"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="City">City</label><br/>

                    <input 
                    type="radio"
                    name="locale"
                    id="Country"
                    value="Country"
                    checked={criteria.locale === "Country"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="Country">Country</label><br/>
                </div>
                <div>
                    <label>Ideal Type of Travel:</label><br />
                    <input 
                    type="radio"
                    name="classification"
                    value="Adventure"
                    id="Adventure"
                    checked={criteria.classification === "Adventure"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="Adventure">Adventure</label><br/>

                    <input 
                    type="radio"
                    name="classification"
                    value="Culture"
                    id="Culture"
                    checked={criteria.classification === "Culture"}
                    onChange={handleChangeCriteria}
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
                    checked={criteria.budget === "1"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="1">$</label><br/>

                    <input 
                    type="radio"
                    name="budget"
                    id="2"
                    value="2"
                    checked={criteria.budget === "2"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="2">$$</label><br/>

                    <input 
                    type="radio"
                    name="budget"
                    id="3"
                    value="3"
                    checked={criteria.budget === "3"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="3">$$$</label><br/>

                    <input 
                    type="radio"
                    name="budget"
                    id="4"
                    value="4"
                    checked={criteria.budget === "4"}
                    onChange={handleChangeCriteria}
                    />
                    <label htmlFor="4">$$$$</label><br />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <button onClick={() => clearFilters()}>Clear Filters</button>

            <br />
            <br />
            {filteredItineraries.length > 0
            ? filteredItineraries.map(itinerary => <ItineraryThumbnailContainer parent="ItineraryListContainer" itinerary={itinerary} key={itinerary.id}/>)
            : <h3>We're sorry, it looks like no itineraries match your search criteria. Our catalog is continuously being updated, though, so please try this search again soon.</h3>}
        </div>
    )
  }
  
  export default ItineraryListContainer;