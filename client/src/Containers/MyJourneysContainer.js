import MyJourneysSummary from '../Components/MyJourneysSummary'
import MyJourneysListContainer from './MyJourneysListContainer'
import NavBar from '../Components/NavBar'

function MyJourneysContainer({myItineraries}) {
    return (
        <div>
            <NavBar />
            {/* <h1>My Journeys Container</h1> */}
            <h1>My Journeys</h1>
            <br />
            <h2>Travel Summary</h2>
            <MyJourneysSummary myItineraries={myItineraries}/>
            <br />
            <h2>Trips</h2>
            <MyJourneysListContainer myItineraries={myItineraries}/>
        </div>
    )
  }
  
  export default MyJourneysContainer;