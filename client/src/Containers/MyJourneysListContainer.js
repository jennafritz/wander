import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'

function MyJourneysListContainer() {

    const myItineraries = useSelector(state => state.itineraries.myItineraries)

    return (
        <div>
            <h1>My Journeys List Container</h1>
            {myItineraries.map(itinerary => <ItineraryThumbnailContainer itinerary={itinerary} key={itinerary.id} parent="MyJourneysListContainer" mine={true}/>)}
        </div>
    )
  }
  
  export default MyJourneysListContainer;