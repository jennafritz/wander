// import React, { useState, useCallback, forwardRef } from 'react';
// import { GoogleMapProvider } from '@ubilabs/google-maps-react-hooks';
// import { useGoogleMap } from '@ubilabs/google-maps-react-hooks';
// import { useSelector } from 'react-redux';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const MapCanvas = React.forwardRef((props, ref) => (
//   <div ref={ref} style={{height: "30vh", width: "60vw"}}/>
// ));

// function MapOfMyJourneys() {

//   const [mapContainer, setMapContainer] = useState(null);
//   const mapRef = useCallback((node) => {
//     node && setMapContainer(node);
//   }, []);

//   const user = useSelector(state => state.user.currentUser) 
//   const myItineraries = useSelector(state => state.itineraries.myItineraries)
//   const myPastItineraries = useSelector(state => state.itineraries.myPastItineraries)
//   const myFutureItineraries = useSelector(state => state.itineraries.myFutureItineraries)
//   const {map} = useGoogleMap()

//   let myMarker = {title: "Me", coords: {lat: parseFloat(user.latitude), lng: parseFloat(user.longitude)}}

//   let pastMapMarkers = []

//     myPastItineraries.forEach(itinerary => {
//         pastMapMarkers = [...pastMapMarkers, {title: itinerary.destination, coords: {lat: parseFloat(itinerary.latitude), lng: parseFloat(itinerary.longitude)}}]
//     })  

//     let futureMapMarkers = []

//     myFutureItineraries.forEach(itinerary => {
//         futureMapMarkers = [...futureMapMarkers, {title: itinerary.destination, coords: {lat: parseFloat(itinerary.latitude), lng: parseFloat(itinerary.longitude)}}]
//     })

//     const addMyMarker = (map) => {
//       const marker = new window.google.maps.Marker({
//         map, 
//         position: myMarker.coords,
//         title: myMarker.title,
//         icon: {
//           url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
//         }
//       })
//     }

//     const addPastMarkers = (map) => {
//       pastMapMarkers.forEach((link, index) => {
//           const marker = new window.google.maps.Marker({
//               map,
//               position: link.coords,
//               title: link.title,
//               icon: {
//                 url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
//               }
//           })
//       })
//   }

//   const addFutureMarkers = (map) => {
//     futureMapMarkers.forEach((link, index) => {
//         const marker = new window.google.maps.Marker({
//             map,
//             position: link.coords,
//             title: link.title,
//             icon: {
//               url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
//             }
//         })
//     })
// }

//   return (
//     <Container fluid>
//       <GoogleMapProvider
//       googleMapsAPIKey={process.env.REACT_APP_MAPS_API_KEY}
//       mapContainer={mapContainer}
//       libraries={['places']}
//       options={{center: {lat: parseFloat(user.latitude), lng: parseFloat(user.longitude)}}}
//       onLoad={map => {
//           map.setZoom(2)
//           addMyMarker(map)
//           addPastMarkers(map)
//           addFutureMarkers(map)
//       }}
//       >
//         <React.StrictMode>
//           <MapCanvas ref={mapRef} />
//         </React.StrictMode>
//       </GoogleMapProvider>
//     </Container>
//   );
// }

// export default MapOfMyJourneys;