import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router'
import { setUpProfile } from '../reducers.js/userReducer'

function Profile() {

    const history = useHistory()
    const dispatch = useDispatch()

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

    // if(user.travel_length >= 7){
    //     let days = user.travel_length % 7
    //     let weeks = (user.travel_length - days)/7
    //     if(days > 0){
    //         if(weeks > 1){
    //             length = `${weeks} Weeks & ${days} Days`
    //         } else {
    //             length = `${weeks} Week & ${days} Days`
    //         }
    //     } else {
    //         if(weeks > 1){
    //             length = `${weeks} Weeks`
    //         } else {
    //             length = `${weeks} Week`
    //         }
    //     }
    // } else {
    //     length = `${user.travel_length} Days`
    // }

    if(user.travel_length <= 3){
        length = "Weekend Getaways"
    } else if(user.travel_length > 3 && user.travel_length <= 7){
        length = "Refreshing Journeys"
    } else if(user.travel_length > 7){
        length = "Extended Adventures"
    }

    return (
        <div>
            {/* <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/bf7ae5ff-6d2a-4548-9633-fabd9e835847/0f9a15f1-6acc-4a55-80e7-cde06e875279_rw_600.jpg?h=3473e9bf0301f64ca76e6328ed1a90c4" alt="Bucharest"/> */}

            {/* <h3>Profile Component</h3> */}
            <h1>My Profile</h1>
            <img src={user.picture} alt="user profile" width="500px"/>
            <button onClick={() => history.push("/avatar")}>Change Avatar</button>
            <h2>{user.username}</h2>
            {user.premium === false ? <h3>Credits: {user.credits}</h3> : null}
            <h3>Travel Interests:</h3>
            <h4>{season}</h4>
            <h4>{length}</h4>
            <h4>{locale}</h4>
            <h4>{classification}</h4>
            <button onClick={() => history.push("/questionnaire")}>Edit Profile</button>
            {user.premium === false ? <button onClick={() => {
                dispatch(setUpProfile({userId: user.id, premium: true}))
                // NEED A MODAL HERE ABOUT PRICING AND PERKS
            }}>Upgrade to Premium</button> : null}
        </div>
    )
  }
  
  export default Profile;