import * as React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';

import Home from './components/home';

function App() {
    return(
        <>
        <BrowserRouter>
            <div className='header'>
                <h3>Seb Wolutions</h3>
                <nav>
                    <ul>
                                <li><a href='index.html'/>Home</li>
                                <li><a href='index.html'/>About Us</li>
                                <li><a href='index.html'/>Portfolio</li>
                                <li><a href='index.html'/>Services</li>
                                <li><a href='index.html'/>Blog</li>
                                <li><a href='index.html'/>Contact Us</li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route path='/' component={Home}/>
            </Switch>

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

        </BrowserRouter>
        </>
    );
};

export default App;