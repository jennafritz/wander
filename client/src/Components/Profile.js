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
            {/* <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/bf7ae5ff-6d2a-4548-9633-fabd9e835847/0f9a15f1-6acc-4a55-80e7-cde06e875279_rw_600.jpg?h=3473e9bf0301f64ca76e6328ed1a90c4" alt="Bucharest"/> */}

            <h3>Profile Component</h3>
            
            <img src={user.picture} alt="user profile"/>
            <h2>{user.username}</h2>
            <h3>Credits: {user.credits}</h3>
            <h3>Travel Interests</h3>
            <h4>{season}</h4>
            <h4>{user.travel_length}</h4>
            <h4>{locale}</h4>
            <h4>{classification}</h4>
        </div>
    )
  }
  
  export default Profile;