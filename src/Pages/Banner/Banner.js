import { faTooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-title p-2">
                <p className='p-2'>MARY DOE <span className='text-danger'>Dantist <FontAwesomeIcon icon={faTooth} /></span>
                </p>
                
            </div>
        </div>
    );
};

export default Banner;