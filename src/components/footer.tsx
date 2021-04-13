import * as React from 'react';

function Footer() {
    return (
    <div className='footer'>
        <div className='description'>
            <h4>SWS</h4>
            <br/>
            <p>We design and develop the highest quality web services to professionals and businesses in the world.</p>
        </div>
        <div className='services'>
            <h5>Services</h5>  
            <br/>  
            <ul>
                <li>Website Design and Development</li>
                <li>Social Media Marketing (SMM)</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Chatbox Development</li>
                <li>UI/UX Design</li>
            </ul>
        </div>
        <div className='useful-links'>
            <h5>Useful Links</h5>
            <br/>
            <ul>
                <li><a>About Us</a></li>
                <li><a>Our Portfolio</a></li>
                <li><a>Contact</a></li>
                <li><a>Blog</a></li>
                <li><a>Privacy Policy</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Footer;