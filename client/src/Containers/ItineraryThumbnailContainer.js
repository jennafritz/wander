import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import SaveItineraryModal from '../Components/SaveItineraryModal'
import Heart from '../heart_icon.png'

function ItineraryThumbnailContainer({itinerary, parent}) {

    let history = useHistory()
    const photos = useSelector(state => state.photos.allPhotos.filter(photo => photo.itinerary_id === itinerary.id))
    const myItineraries = useSelector(state => state.itineraries.myItineraries)
    const user = useSelector(state => state.user.currentUser)

    const [modalShow, setModalShow] = useState(false);
    
    let mine = myItineraries.find(myItinerary => myItinerary.id === itinerary.id)
    return (
        <div>
            {/* <h1>Itinerary Thumbnail Container</h1> */}
            <h3>{itinerary.name}</h3>
            {parent === "RecItinerariesListContainer" ? <h4>{itinerary.match}/5</h4> : null}
            {photos.length > 0 ? <img src={photos[0].url} height="200px"/> : null}<br/>
            {parent === "ItineraryListContainer" && mine ? <img src={Heart} width="30px" /> : null}
            <button onClick={() => {
                if(user.premium){
                    history.push(({pathname: "/itineraryDetails", state: {itinerary, photos, mine}}))
                } else {
                    if(mine){
                        history.push(({pathname: "/itineraryDetails", state: {itinerary, photos, mine}}))
                    } else {
                        setModalShow(true)
                    }
                }
            }
            }>View Details</button>
            <SaveItineraryModal itinerary={itinerary} photos={photos} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
  }
  
  export default ItineraryThumbnailContainer;