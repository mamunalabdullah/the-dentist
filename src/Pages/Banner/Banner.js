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
                <h1 className='w-50 p-2'>Hi! my name is <span className='colorful'>Mary Doe</span> I am a <span className='colorful'>Doctor</span>.</h1>
            </div>
        </div>
    );
};

export default Banner;