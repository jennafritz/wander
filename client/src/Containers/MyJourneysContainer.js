import MyJourneysSummary from '../Components/MyJourneysSummary'
import MyJourneysListContainer from './MyJourneysListContainer'
import NavBar from '../Components/NavBar'

function MyJourneysContainer() {
    return (
        <div>
            <NavBar />
            <h1>My Journeys Container</h1>
            <MyJourneysSummary />
            <MyJourneysListContainer />
        </div>
    )
  }
  
  export default MyJourneysContainer;