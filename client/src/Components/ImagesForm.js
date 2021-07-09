import NavBar from "./NavBarComponent";
import {useEffect, useState} from 'react'

function ImagesForm({day, updateImagesArray, removeImageFromParent}) {

    const [imageInputList, setImageInputList] = useState([
        {imageUrl: "", caption: "", order: "", id: ""}
    ])

    useEffect(() => {
        updateImagesArray(imageInputList)
    }, [imageInputList])
    
    const handleAddImage = () => {
        setImageInputList([...imageInputList, {imageUrl: "", caption: "", order: "", id: ""}])
    }

    const handleRemoveImage = (index) => {
        const list = [...imageInputList]
        list.splice(index, 1)
        setImageInputList(list)
    }

    const handleImageInputChange = (event, index) => {
        const {name, value} = event.target
        const list = [...imageInputList]
        list[index][name] = value
        list[index].order = index + 1
        list[index].id = `${index + 1}`
        setImageInputList(list)
    }

    return (
        <div >
            <label htmlFor="images">Images</label>
                {imageInputList.map((image, index) => {
                    return(
                        <div>
                            <label>Image {index+ 1}:</label>
                            <br/>
                            <label htmlFor="imageUrl">URL</label>
                            <input  
                            required
                            name="imageUrl"
                            value={image.imageUrl}
                            onChange={(event) => handleImageInputChange(event, index)}
                            />
                            <label htmlFor="caption">Caption</label>
                            <input  
                            required
                            name="caption"
                            value={image.caption}
                            onChange={(event) => handleImageInputChange(event, index)}
                            />
                            {/* <button onClick={() => {
                                handleRemoveImage(index)
                                removeImageFromParent(`${index + 1}`)
                            }}>Remove Image</button> */}
                        </div>
                    )   
                })}
                <button onClick={() => handleAddImage()} >Add Another Image</button>
        </div>
    )
  }
  
  export default ImagesForm;