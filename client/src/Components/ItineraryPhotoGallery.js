function ItineraryPhotoGallery({photos}) {
    return (
        <div>
            {/* <h3>Itinerary Photo Gallery Component</h3> */}
            {photos.map(photo => {
                return(
                <div>
                    <img src={photo.url} alt={photo.caption} width="500px"/>
                    <p>{photo.caption}</p>
                </div>
                )
            })}
        </div>
    )
  }
  
  export default ItineraryPhotoGallery;