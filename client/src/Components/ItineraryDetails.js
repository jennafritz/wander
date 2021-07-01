function ItineraryDetails({itinerary}) {
    return (
        <div>
            <h3>Itinerary Details Component</h3>
            <h3>{itinerary.name}</h3>
            <h3>{itinerary.destination}</h3>
            <h3>{itinerary.length}</h3>
            <h3>{itinerary.locale}</h3>
            <h3>{itinerary.classification}</h3>
            {itinerary.days.map(day => {
                return <ul>
                    Day {day.number}:
                    {day.activities.map(activity => {
                        return <li>{activity.name}</li>
                    })}
                </ul>
            
            })}
        </div>
    )
  }
  
  export default ItineraryDetails;