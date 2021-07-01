function ItineraryPhotoGallery({photos}) {
    return (
        <div>
            <h3>Itinerary Photo Gallery Component</h3>
            {photos.map(photo => <img src={photo.url} alt={photo.caption} width="500px"/>)}
        </div>
    )
  }
  
  export default ItineraryPhotoGallery;