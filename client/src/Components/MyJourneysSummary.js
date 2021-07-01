function MyJourneysSummary({myItineraries}) {

    let totalDaysTraveled = 0

    myItineraries.forEach(itinerary => {
        let numDays = itinerary.days.length
        totalDaysTraveled += numDays
        return totalDaysTraveled
    })

    return (
        <div>
            <h3>My Journeys Summary Component</h3>
            <h5>Trips Taken: {myItineraries.length}</h5>
            <h5>Days Traveled: {totalDaysTraveled}</h5>
        </div>
    )
  }
  
  export default MyJourneysSummary;