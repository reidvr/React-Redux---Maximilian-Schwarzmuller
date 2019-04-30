import React from 'react';

import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const NavBar = (props) => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                {props.signedIn ? <SignedInLinks /> : <SignedOutLinks />}

            </div>
        </nav>
    );
}

export default NavBar;

