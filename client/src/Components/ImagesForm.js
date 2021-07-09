import NavBar from "./NavBarComponent";
import {useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        <Container fluid>
            {imageInputList.map((image, index) => {
                return(
                    <Container>
                        <Row>
                            <Col>
                                <Form.Label htmlFor="imageUrl" >Image {index+ 1} URL:</Form.Label>
                                <Form.Control
                                type="text"  
                                required
                                name="imageUrl"
                                value={image.imageUrl}
                                onChange={(event) => handleImageInputChange(event, index)}
                                />
                            </Col>
                            <Col>
                                <Form.Label htmlFor="caption">Caption:</Form.Label>
                                <Form.Control
                                type="text"  
                                required
                                name="caption"
                                value={image.caption}
                                onChange={(event) => handleImageInputChange(event, index)}
                                />
                                {/* <button onClick={() => {
                                    handleRemoveImage(index)
                                    removeImageFromParent(`${index + 1}`)
                                }}>Remove Image</button> */}
                            </Col>
                        </Row>
                    </Container>
                )   
            })}
                <button id="addImageButton" className="defaultButton" onClick={() => handleAddImage()} >Add Another Image</button>
        </Container>
    )
  }
  
  export default ImagesForm;