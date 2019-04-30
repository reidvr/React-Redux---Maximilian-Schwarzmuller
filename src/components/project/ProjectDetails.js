import React from 'react';

import { NavLink } from 'react-router-dom'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    console.log('id: ', id);
    

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae numquam eum minus tempora, quos quam totam, aspernatur reiciendis, magni accusantium quaerat est. Sequi neque, est perspiciatis voluptatibus iure atque voluptas.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>
                        Posted by the net Ninja
                    </div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;


