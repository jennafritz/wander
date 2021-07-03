import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'

function MyJourneysListContainer() {

    const myItineraries = useSelector(state => state.itineraries.myItineraries)

    return (
        <div>
            <h1>My Journeys List Container</h1>
            {myItineraries.length > 0
            ? myItineraries.map(itinerary => <ItineraryThumbnailContainer itinerary={itinerary} key={itinerary.id} parent="MyJourneysListContainer" mine={true}/>)
            : <h3>You have no saved itineraries! Browse your recommended adventures or our full catalog to start wandering!</h3>}
        </div>
    )
  }
  
  export default MyJourneysListContainer;