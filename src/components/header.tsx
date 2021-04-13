import * as React from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <h3>Steven Web Solutions</h3>
            <nav>
                <ul>
                    <NavLink to='/'><li>Home</li></NavLink>

                    <NavLink to='/aboutus'><li>About Us</li></NavLink>
                    <li><a href='index.html' />Portfolio</li>
                    <li><a href='index.html' />Services</li>
                    <li><a href='index.html' />Blog</li>
                    <li><a href='index.html' />Contact Us</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;