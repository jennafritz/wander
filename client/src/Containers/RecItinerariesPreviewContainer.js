import ItineraryThumbnailContainer from './ItineraryThumbnailContainer'

function RecItinerariesPreviewContainer({itineraries}) {
    return (
        <div>
            <h1>Recommended Itineraries Preview Container</h1>
            {itineraries.map(itinerary => <ItineraryThumbnailContainer parent="RecItinerariesPreviewContainer" itinerary={itinerary} key={itinerary.id}/>)}           
        </div>
    )
  }
  
  export default RecItinerariesPreviewContainer;