import React from 'react';

import {NavLink} from 'react-router-dom'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/create' className="">Create Project</NavLink>
            </li>
            <li>
                <NavLink to='/pr' className="">Log Out</NavLink>
            </li>
            <li>
                <NavLink to='/' className="btn btn-floating orange ">VR</NavLink>
            </li>
        </ul>
    );
}

export default SignedInLinks;