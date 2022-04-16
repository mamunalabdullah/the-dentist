import React from 'react';
import './About.css';
import picture from '../../Assets/images/mamun.jpg';

const About = () => {
    return (
        <div className='container py-5'>
            <div className="about-contents d-flex justify-space-between">
            <div className="about-img">
                <img src={picture} alt="" className='w-100 py-2'/>
            </div>
            <div className="about-text ms-5 mt-5">
                <h1>Hi, This is Abdullah Al Mamun</h1>
                <h5>Web Developer(Front-end)</h5>
                <p className='text-start'>My goal is work in any fast growing local or large multinational organization with immense responsibility. So that, my situational and transformational leadership style, problem solving, communication, language, and volunteering skills can be utilize efficiently to bring a positive change in the organization. In the long run I want to become a full stack web developer. </p>
            </div>
            </div>
        </div>
    );
};

export default About;