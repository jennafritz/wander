import MyJourneysSummary from '../Components/MyJourneysSummary'
import MyJourneysListContainer from './MyJourneysListContainer'
import NavBar from '../Components/NavBar'

function MyJourneysContainer({myItineraries}) {
    return (
        <div>
            <NavBar />
            <h1>My Journeys Container</h1>
            <MyJourneysSummary myItineraries={myItineraries}/>
            <MyJourneysListContainer myItineraries={myItineraries}/>
        </div>
    )
  }
  
  export default MyJourneysContainer;