import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { picture, price, name, description} = service;
    return (
        <div>
            <Card style={{ width: '18rem' }} className='service-card'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description.slice(0, 200)+'...........'}
                </Card.Text>
                <h1>$ {price}</h1>
                </Card.Body>
                <Link to="/checkout" className='button-link py-2'>Checkout</Link>
            </Card>
        </div>
    );
};

export default Service;