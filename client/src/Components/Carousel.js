import React from 'react'
import '../carousel.css' //will be added later
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'

const Carousel = (props) => {
    const {children, show} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)){
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <Container fluid className="carousel-container">
            <div className="carousel-wrapper">
                {
                currentIndex > 0 &&
                <button className="left-arrow" onClick={prev}>
                    &lt;
                </button>
                }

                <div className="carousel-content-wrapper">
                    <div className={`carousel-content show-${show}`} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
                        {children}
                    </div>
                </div>

                {
                currentIndex < (length - show) &&
                <button className="right-arrow" onClick={next}>
                    &gt;
                </button>
                }

            </div>
        </Container>
    )
}

export default Carousel