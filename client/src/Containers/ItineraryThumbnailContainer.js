import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'

function ItineraryThumbnailContainer({itinerary, parent}) {

    let history = useHistory()
    const photos = useSelector(state => state.photos.allPhotos.filter(photo => photo.itinerary_id === itinerary.id))

    useEffect(() => {
        console.log("itinerary thumbnail useEffect")
        console.log(photos)
    }, [])


    return (
        <div>
            <h1>Itinerary Thumbnail Container</h1>
            <h3>{itinerary.name}</h3>
            {photos.length > 0 ? <img src={photos[0].url} height="200px"/> : null}
            <button onClick={() => {
                history.push(({pathname: "/itineraryDetails", state: {itinerary, photos}}))
            }
            }>View Details</button>
        </div>
    )
  }
  
  export default ItineraryThumbnailContainer;