import React from 'react';

import {NavLink} from 'react-router-dom'

const SignedOutLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/signup' className="">Sign Up</NavLink>
            </li>
            <li>
                <NavLink to='/signin' className="">Login</NavLink>
            </li>
        </ul>
    );
}

export default SignedOutLinks;