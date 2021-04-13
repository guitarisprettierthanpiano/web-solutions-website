import * as React from 'react';

function AboutUs(){
    return(
        <div className='about-us-container'>
            <div className='about-us-main'>
                <h2>About Us</h2>
                <br/>
                <h3>We are a design and web development agency with a proven professional history of working in the information technology and services industry. We provide the highest quality services to clients around the world.</h3>
                <br/>
                <button>Launch Project</button>
            </div>
            <div className='about-us-h1-1'>
                <h1>The Big Picture</h1>
            </div>
            <div className='about-us-p'>
                <p>We know what people need - quality work at agreeable prices to help you succeed. We put the effort and time into understanding what our clients expect. With our years of experience and solid reputation, we can guarantee that you will be satisfied with our services. That is the big picture at Steven Web Solutions.</p>
            </div>
            <div className='about-us-h1-2'>
                <h1>What We Offer</h1>
            </div>
            <div className='about-us-services'>
                <div className='services-11'>
                    <img src='./images/img1.png'/>
                    <h4>Professional Website Design</h4>
                    <p>Meticilious website design for your business and personal profile. We can design it ourselves or with your vision.</p>
                </div>
                <div className='services-12'>
                    <img src='./images/img1.png' />
                    <h4>Instant Customer Support</h4>
                    <p>24/7 availabilty for any needs for past and present clients. E-mail or phone.</p>
                </div>
                <div className='services-13'>
                    <img src='./images/img1.png' />
                    <h4>Regular Action Plan</h4>
                    <p>You will receive a regular action plan to stay ahead of your competitors.</p>
                </div>
                <div className='services-21'>
                    <img src='./images/img1.png' />
                    <h4>Fully responsive design</h4>
                    <p>Your website will display neatly on any device it is browsed on from the smallest phone to the largest desktop monitor.</p>
                </div>
                <div className='services-22'>
                    <img src='./images/img1.png' />
                    <h4>Search Engine Priority</h4>
                    <p>Your website will be ranked ahead of your competitors on search engines.</p>
                </div>
                <div className='services-23'>
                    <img src='./images/img1.png' />
                    <h4>Customer Satisfaction</h4>
                    <p>We are happy when you are happy. This is why you will always get the quality service you deserve.</p>
                </div>
            </div>
            <div className='about-us-pitch'>
                <h3>We're Available To Turn Your Business Around</h3>
                <h4>We ensure the best practices to help you grow and achieve your desired success.</h4>
                <button>Get Started</button>
            </div>
        </div>
    );
}

export default AboutUs; 