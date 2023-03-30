import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='brand'>
                <h2>Knowledge Cafe</h2>
            </div>
            <div className='navbar'>
                <nav>
                    <a href="">Home</a>
                    <a href="">Blogs</a>
                    <a href="">Info</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;