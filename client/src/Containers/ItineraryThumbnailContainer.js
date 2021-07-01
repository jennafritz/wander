import ItineraryDetailsContainer from './ItineraryDetailsContainer'
import {useHistory} from 'react-router-dom'

function ItineraryThumbnailContainer({itinerary, parent}) {

    let history = useHistory()

    return (
        <div>
            <h1>Itinerary Thumbnail Container</h1>
            <h3>{itinerary.name}</h3>
            <img src={itinerary.photos[1].url} height="200px"/>
            {/* <ItineraryDetailsContainer itinerary={itinerary}/> */}
            <button onClick={() => {
                history.push(({pathname: "/itineraryDetails", state: {itinerary: itinerary}}))
            }
            }>View Details</button>
        </div>
    )
  }
  
  export default ItineraryThumbnailContainer;