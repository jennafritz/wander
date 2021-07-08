import React, { useState, useCallback, forwardRef } from 'react';
import { GoogleMapProvider } from '@ubilabs/google-maps-react-hooks';
import { useGoogleMap } from '@ubilabs/google-maps-react-hooks';
import { useSelector } from 'react-redux';

const MapCanvas = React.forwardRef((props, ref) => (
  <div ref={ref} style={{height: "400px", width: "65%"}}/>
));

function MapOfMyJourneys() {

  const [mapContainer, setMapContainer] = useState(null);
  const mapRef = useCallback((node) => {
    node && setMapContainer(node);
  }, []);

  const user = useSelector(state => state.user.currentUser) 
  const myItineraries = useSelector(state => state.itineraries.myItineraries)
  const {map} = useGoogleMap()
  console.log(map)

  let mapMarkers = [
      {title: "Me", coords: {lat: parseFloat(user.latitude), lng: parseFloat(user.longitude)}}
  ]

    myItineraries.forEach(itinerary => {
        mapMarkers = [...mapMarkers, {title: itinerary.destination, coords: {lat: parseFloat(itinerary.latitude), lng: parseFloat(itinerary.longitude)}}]
    })  

    console.log(mapMarkers)

  const addMarkers = (map) => {
      mapMarkers.forEach((link, index) => {
          console.log("in addMarkers")
          const marker = new window.google.maps.Marker({
              map,
              position: link.coords,
              title: link.title
          })
          console.log(marker)
      })
  }

  return (
    <GoogleMapProvider
    googleMapsAPIKey={process.env.REACT_APP_MAPS_API_KEY}
    mapContainer={mapContainer}
    libraries={['places']}
    options={{center: {lat: parseFloat(user.latitude), lng: parseFloat(user.longitude)}}}
    onLoad={map => {
        console.log(map)
        map.setZoom(2)
        addMarkers(map)
    }}
    >
       <React.StrictMode>
         <MapCanvas ref={mapRef} />
       </React.StrictMode>
    </GoogleMapProvider>
  );
}

export default MapOfMyJourneys;