import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <h3>NavBar Component</h3>
            <NavLink 
            to="/profile"
            exact
            >
            Profile
            </NavLink>
            <NavLink 
            to="/myJourneys"
            exact
            >
            My Journeys
            </NavLink>
            <NavLink 
            to="/catalog"
            exact
            >
            Itinerary Catalog
            </NavLink>
            <NavLink 
            to="/recommended"
            exact
            >
            Recommended Adventures
            </NavLink>
            <NavLink 
            to="/submitATrip"
            exact
            >
            Submit a Trip
            </NavLink>
        </div>
    )
  }
  
  export default NavBar;