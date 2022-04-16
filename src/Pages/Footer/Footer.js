import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='text-center py-4 bg-dark text-white'>
            <h5>Copyrights &copy; belongs to <span className='text-danger fst-italic fw-bold'>--Find The Dentist--</span> {new Date().getFullYear()}</h5>
        </div>
    );
};

export default Footer;