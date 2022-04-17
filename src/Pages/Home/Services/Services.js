import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] =useState([]);

    useEffect( () => {
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div className='service'>
            <div className='container text-center py-2'>
            <h1 className='text-danger py-5'>My Services</h1>
            <div className='services'>
                {
                    services.map( service => <Service 
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </div>
        </div>
    );
};

export default Services;