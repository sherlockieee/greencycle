import React from 'react';
import '../App.css';
import './navbar.css';

export default function NavBar() {
    return (
        <nav className='navbar row'>
            <div>
                <a className='navbar-brand-name' href="/">GreenCycle</a>
            </div>
            <div>
                <a className='btn btn--primary' href="/cart">Cart</a>
                <a className='btn btn--primary' href="/login">Sign in</a>
                <a className='btn btn--secondary' href="/signup">Sign up</a>
            </div>
        </nav>
    )
}
