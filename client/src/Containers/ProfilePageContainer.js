import RecItinerariesPreviewContainer from './RecItinerariesPreviewContainer'
import MyItinerariesPreviewContainer from './MyItinerariesPreviewContainer'
import Profile from '../Components/Profile'
import NavBar from '../Components/NavBar'

function ProfilePageContainer({user, itineraries, myItineraries}) {
    return (
        <div>
            <NavBar />
            <h1>Profile Page Container</h1>
            <Profile user={user}/>
            <MyItinerariesPreviewContainer myItineraries={myItineraries}/>
            <RecItinerariesPreviewContainer itineraries={itineraries}/>
        </div>
    )
  }
  
  export default ProfilePageContainer;