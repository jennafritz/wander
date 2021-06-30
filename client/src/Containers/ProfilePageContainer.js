import RecItineraryPreviewContainer from './RecItineraryPreviewContainer'
import MyItinerariesPreviewContainer from './MyItinerariesPreviewContainer'
import Profile from '../Components/Profile'
import NavBar from '../Components/NavBar'

function ProfilePageContainer({user}) {
    console.log("profile container", user)
    return (
        <div>
            <NavBar />
            <h1>Profile Page Container</h1>
            <Profile user={user}/>
            <MyItinerariesPreviewContainer />
            <RecItineraryPreviewContainer />
        </div>
    )
  }
  
  export default ProfilePageContainer;