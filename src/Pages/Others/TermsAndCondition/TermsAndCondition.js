import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here is our terms and conditions</h3>
            <ol>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.</li>
            </ol>
            <p>Go Back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;