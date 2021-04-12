import * as React from 'react';

function Footer() {
    return (
    <div className='.footer'>
        <div className='description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla minima porro eaque, explicabo similique. Amet sequi rem nisi inventore. Et blanditiis quo voluptatibus inventore repudiandae facere eum quasi vero?</p>
        </div>
        <div className='services'>
            <h5>Services</h5>    
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