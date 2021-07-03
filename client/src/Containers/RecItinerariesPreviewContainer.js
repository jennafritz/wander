import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'
import {useSelector} from 'react-redux'

function RecItinerariesPreviewContainer() {

    const recommendedItineraries = useSelector(state => state.itineraries.recommendedItineraries)    
    
    return (
        <div>
            <h1>Recommended Itineraries Preview Container</h1>
            {recommendedItineraries.map(itinerary => <ItineraryThumbnailContainer parent="RecItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id} mine={false}/>)}           
        </div>
    )
  }
  
  export default RecItinerariesPreviewContainer;