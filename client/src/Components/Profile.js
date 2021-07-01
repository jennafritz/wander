import {useSelector} from 'react-redux'

function Profile() {

    const user = useSelector(state => state.user.currentUser)
    
    let season
    let length
    let locale
    let classification

    if(user.travel_season === "Summer"){
        season = "Summer Journeys"
    } else if (user.travel_season === "Spring"){
        season = "Spring Adventures"
    } else if (user.travel_season === "Fall"){
        season = "Fall Forays"
    } else if (user.travel_season === "Winter"){
        season = "Winter Wanderings"
    }

    if(user.travel_locale === "City"){
        locale = "Exploring Cities"
    } else if (user.travel_locale === "Country"){
        locale = "Country Comforts"
    }

    if(user.travel_classification === "Culture"){
        classification = "Discovering New Cultures"
    } else if (user.travel_classification === "Adventure"){
        classification = "Experiencing New Adventures"
    }

    return (
        <div>
            <h3>Profile Component</h3>
            
            <img src={user.picture} alt="user profile"/>
            <h2>{user.username}</h2>
            <h4>{season}</h4>
            <h4>{user.travel_length}</h4>
            <h4>{locale}</h4>
            <h4>{classification}</h4>
        </div>
    )
  }
  
  export default Profile;