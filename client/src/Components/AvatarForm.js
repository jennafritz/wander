import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { setUpProfile } from '../reducers.js/userReducer'

function AvatarForm() {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user.currentUser)

    const [picture, setPicture] = useState("")

    function handleCustomPhoto(event) {
        setPicture(event.target.value)
    }

    const handleSetAvatar = (url) => {
        setPicture(url)
    }

    return (
        <div>
            <h3>Avatar Form Component</h3>

            <img 
            style={picture === "http://images.summitmedia-digital.com/cosmo/images/2019/11/30/palawan-1575079999.png" ? {border: "2px solid red"} : null} 
            onClick={() => handleSetAvatar("http://images.summitmedia-digital.com/cosmo/images/2019/11/30/palawan-1575079999.png")} 
            src="http://images.summitmedia-digital.com/cosmo/images/2019/11/30/palawan-1575079999.png" 
            alt="Palawan" 
            width="500px"/>

            <img 
            style={picture === "https://gradivahotels.com/wp-content/uploads/2019/07/Best-Travel-Destination.jpg" ? {border: "2px solid red"} : null} 
            onClick={() => handleSetAvatar("https://gradivahotels.com/wp-content/uploads/2019/07/Best-Travel-Destination.jpg")} 
            src="https://gradivahotels.com/wp-content/uploads/2019/07/Best-Travel-Destination.jpg" 
            alt="Scandinavia" 
            width="500px"/>

            <img 
            
            style={picture === "https://thetravelscene.com/Over-the-water-bungalowsa.jpg" ? {border: "2px solid red"} : null} 
            onClick={() => handleSetAvatar("https://thetravelscene.com/Over-the-water-bungalowsa.jpg")} 
            src="https://thetravelscene.com/Over-the-water-bungalowsa.jpg" 
            alt="Bungalows" 
            width="500px"/>

            <img 
            style={picture === "https://www.tripsavvy.com/thmb/vP7pCia2UJMBSz-lWLFUyEFtLMk=/1883x1414/filters:no_upscale():max_bytes(150000):strip_icc()/Manarola-Liguria-Coast-Italy-Sunset-5b5fcb3b46e0fb00828b35dd.jpg" ? {border: "2px solid red"} : null} 
            onClick={() => handleSetAvatar("https://www.tripsavvy.com/thmb/vP7pCia2UJMBSz-lWLFUyEFtLMk=/1883x1414/filters:no_upscale():max_bytes(150000):strip_icc()/Manarola-Liguria-Coast-Italy-Sunset-5b5fcb3b46e0fb00828b35dd.jpg")} 
            src="https://www.tripsavvy.com/thmb/vP7pCia2UJMBSz-lWLFUyEFtLMk=/1883x1414/filters:no_upscale():max_bytes(150000):strip_icc()/Manarola-Liguria-Coast-Italy-Sunset-5b5fcb3b46e0fb00828b35dd.jpg" 
            alt="Italian Coast" 
            width="500px"/>

            <img 
            style={picture === "https://www.wanderlustchloe.com/wp-content/uploads/2017/10/Aberta-Canada.jpg" ? {border: "2px solid red"} : null} 
            onClick={() => handleSetAvatar("https://www.wanderlustchloe.com/wp-content/uploads/2017/10/Aberta-Canada.jpg")} 
            src="https://www.wanderlustchloe.com/wp-content/uploads/2017/10/Aberta-Canada.jpg" 
            alt="Canada" 
            width="500px"/>

            <img 
            style={picture === "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" ? {border: "2px solid red"} : null} 
            onClick={() => handleSetAvatar("https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900")} 
            src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" 
            alt="Eiffel Tower" 
            width="500px"/>

            <img 
            style={picture === "https://cdn.cnn.com/cnnnext/dam/assets/170606121226-japan---travel-destination---shutterstock-230107657.jpg" ? {border: "2px solid red"} : null} 
            onClick={() => handleSetAvatar("https://cdn.cnn.com/cnnnext/dam/assets/170606121226-japan---travel-destination---shutterstock-230107657.jpg")} 
            src="https://cdn.cnn.com/cnnnext/dam/assets/170606121226-japan---travel-destination---shutterstock-230107657.jpg" 
            alt="Japan" 
            width="500px"/>

            <img 
            style={picture === "https://757967.smushcdn.com/1421783/wp-content/uploads/2020/01/Venice-Italy-Italys-Floating-City-The-city-has-so-many-places-to-visit-that-needs-to-be-seen-slowly..jpg?lossy=1&strip=0&webp=1" ? {border: "2px solid red"} : null} 
            onClick={() => handleSetAvatar("https://757967.smushcdn.com/1421783/wp-content/uploads/2020/01/Venice-Italy-Italys-Floating-City-The-city-has-so-many-places-to-visit-that-needs-to-be-seen-slowly..jpg?lossy=1&strip=0&webp=1")} 
            src="https://757967.smushcdn.com/1421783/wp-content/uploads/2020/01/Venice-Italy-Italys-Floating-City-The-city-has-so-many-places-to-visit-that-needs-to-be-seen-slowly..jpg?lossy=1&strip=0&webp=1" 
            alt="Venice" 
            width="500px"/>

            <form onSubmit={(event) => {
                event.preventDefault()
                dispatch(setUpProfile({userId: user.id, picture: picture})).then(response => {
                    if(response.error){
                        alert(response.payload)
                    } 
                    else {
                        history.push("/profile")
                    }
                })
                }}>
                <label>Choose Your Own Photo:</label><br/>
                <input 
                type="text"
                id="picture"
                name="picture"
                onChange={handleCustomPhoto}
                />
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
  }
  
  export default AvatarForm;