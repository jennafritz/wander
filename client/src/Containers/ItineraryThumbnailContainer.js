import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'

function ItineraryThumbnailContainer({itinerary, parent, mine}) {

    let history = useHistory()
    const photos = useSelector(state => state.photos.allPhotos.filter(photo => photo.itinerary_id === itinerary.id))
    const myItineraries = useSelector(state => state.itineraries.myItineraries)
    
    return (
        <div>
            <h1>Itinerary Thumbnail Container</h1>
            <h3>{itinerary.name}</h3>{parent === "RecItinerariesListContainer" ? <h4>{itinerary.match}/5</h4> : null}
            {photos.length > 0 ? <img src={photos[0].url} height="200px"/> : null}
            <button onClick={() => {
                let mine = myItineraries.find(myItinerary => myItinerary.id === itinerary.id)
                if(mine){
                    history.push(({pathname: "/itineraryDetails", state: {itinerary, photos}}))
                } else {
                    alert("To view the details of this itinerary, you must save it to your account which will reduce your itinerary credits. To proceed, click Save below, otherwise click Cancel.")
                }
            }
            }>View Details</button>
        </div>
    )
  }
  
  export default ItineraryThumbnailContainer;