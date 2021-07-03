import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'

function MyItinerariesPreviewContainer() {

    const myItineraries = useSelector(state => state.itineraries.myItineraries)

    return (
        <div>
            <h1>My Itineraries Preview Container</h1>
            {myItineraries.length > 0
            ? myItineraries.map(itinerary => <ItineraryThumbnailContainer parent="myItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>)
            : <h3>You have no saved itineraries! Browse your recommended adventures or our full catalog to start wandering!</h3>}
        </div>
    )
  }
  
  export default MyItinerariesPreviewContainer;