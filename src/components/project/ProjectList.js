import React from 'react';

import { NavLink } from 'react-router-dom'
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects.map(project => <ProjectSummary key={project.id} project={project} />)}

        </div>
    );
}

export default ProjectList;