// import Container from "react-bootstrap/Container"
// import { useSelector } from "react-redux"
// import { useState } from "react"

// function ItineraryFilterForm() {

//     const itineraries = useSelector(state => state.itineraries.allItineraries)
//     const [filteredItineraries, setFilteredItineraries] = useState(itineraries)

//     const user = useSelector(state => state.user.currentUser)

//     const [criteria, setCriteria] = useState({
//         season: null,
//         length: null,
//         locale: null,
//         classification: null,
//         budget: null
//     })
    
//     function handleChangeCriteria(event) {
//         const key = event.target.name
//         setCriteria({
//             ...criteria,
//             [key]: event.target.value
//         })
//     }

//     const filterItineraries = () => {
//         let filteredItineraries = [...itineraries]
//         Object.keys(criteria).forEach(requirement => {
//             let searchValue = criteria[`${requirement}`]
//             if(requirement === "length" || requirement === "budget"){
//                 searchValue = parseInt(criteria[`${requirement}`])
//             }
//             filteredItineraries = filteredItineraries.filter(itinerary => {
//                 if(!!searchValue === false){
//                     return true 
//                 } else if(searchValue && searchValue === itinerary[`${requirement}`]){
//                     return true
//                 } else if (searchValue && searchValue !== itinerary[`${requirement}`]){
//                     return false
//                 }
//             })
//         })
//         setFilteredItineraries(filteredItineraries)
//     }

//     const clearFilters = () => {
//         setFilteredItineraries(itineraries)
//         setCriteria({
//             season: null,
//             length: null,
//             locale: null,
//             classification: null,
//             budget: null
//         })
//     }

    

//     return(
//         <Container>
//             <h3>Filter Itineraries</h3>
//             <form onSubmit={(event) => {
//                 event.preventDefault()
//                 filterItineraries()
//                 }}>
//                 <Container>
//                     <label>Ideal Travel Season:</label>
//                     <input 
//                     type="radio"
//                     name="season"
//                     id="Spring"
//                     value="Spring"
//                     checked={criteria.season === "Spring"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="Spring">Spring</label>

//                     <input 
//                     type="radio"
//                     name="season"
//                     id="Summer"
//                     value="Summer"
//                     checked={criteria.season === "Summer"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="Summer">Summer</label>

//                     <input 
//                     type="radio"
//                     name="season"
//                     id="Fall"
//                     value="Fall"
//                     checked={criteria.season === "Fall"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="Fall">Fall</label>

//                     <input 
//                     type="radio"
//                     name="season"
//                     id="Winter"
//                     value="Winter"
//                     checked={criteria.season === "Winter"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="Winter">Winter</label>
//                 </Container>
//                 <label htmlFor="length">Length: {criteria.length} Days</label>
//                 <input 
//                 required
//                 type="range"
//                 id="length"
//                 name="length"
//                 min="2"
//                 max="31"
//                 value={criteria.length}
//                 onChange={handleChangeCriteria} />
//                 {/* <label>Length of Trip:</label>
//                     <input 
//                     type="radio"
//                     name="length"
//                     id="short"
//                     value="short"
//                     checked={criteria.length === "short"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="short">Short (3 or Fewer Days)</label>

//                     <input 
//                     type="radio"
//                     name="length"
//                     id="medium"
//                     value="medium"
//                     checked={criteria.length === "medium"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="medium">Medium (4-7 Days)</label>

//                     <input 
//                     type="radio"
//                     name="length"
//                     id="long"
//                     value="long"
//                     checked={criteria.length === "long"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="long">Long (A Week or More)</label>*/}
//                 <Container>
//                     <label>Ideal Travel Locale:</label>
//                     <input 
//                     type="radio"
//                     name="locale"
//                     id="City"
//                     value="City"
//                     checked={criteria.locale === "City"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="City">City</label>

//                     <input 
//                     type="radio"
//                     name="locale"
//                     id="Country"
//                     value="Country"
//                     checked={criteria.locale === "Country"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="Country">Country</label>
//                 </Container>
//                 <Container>
//                     <label>Ideal Type of Travel:</label>
//                     <input 
//                     type="radio"
//                     name="classification"
//                     value="Adventure"
//                     id="Adventure"
//                     checked={criteria.classification === "Adventure"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="Adventure">Adventure</label>

//                     <input 
//                     type="radio"
//                     name="classification"
//                     value="Culture"
//                     id="Culture"
//                     checked={criteria.classification === "Culture"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="Culture">Culture</label>
//                 </Container>
//                 <Container>
//                     <label>Typical Travel Budget:</label>
//                     <input 
//                     type="radio"
//                     name="budget"
//                     id="1"
//                     value="1"
//                     checked={criteria.budget === "1"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="1">$</label>

//                     <input 
//                     type="radio"
//                     name="budget"
//                     id="2"
//                     value="2"
//                     checked={criteria.budget === "2"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="2">$$</label>

//                     <input 
//                     type="radio"
//                     name="budget"
//                     id="3"
//                     value="3"
//                     checked={criteria.budget === "3"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="3">$$$</label>

//                     <input 
//                     type="radio"
//                     name="budget"
//                     id="4"
//                     value="4"
//                     checked={criteria.budget === "4"}
//                     onChange={handleChangeCriteria}
//                     />
//                     <label htmlFor="4">$$$$</label>
//                     <input type="submit" value="Submit" />
//                 </Container>
//             </form>
//             <button onClick={() => clearFilters()}>Clear Filters</button>

//         </Container>
//         )
// }

// export default ItineraryFilterForm