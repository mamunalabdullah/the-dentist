import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css';
import image1 from '../../../Assets/images/one.jpg'
import image2 from '../../../Assets/images/two.jpg'
import image3 from '../../../Assets/images/three.webp'

const Testimonial = () => {

        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
    };
    return (
        <div className="slider">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-primary fw-bold'>Sumaia</h3>
                        <p className='text'>She is the best dantist I have ever seen. She is very polite and helpful.</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                src={image2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className='text-primary fw-bold'>Labib</h3>
                <p className='text'>She is a very good dentist. She treats the patient very carefully and her visit fee is reasonable.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                src={image3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className='text-primary fw-bold'>Murad</h3>
                <p className='text'>Her medical equipment is latest, neat and clean.Her treatment is really good.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonial;