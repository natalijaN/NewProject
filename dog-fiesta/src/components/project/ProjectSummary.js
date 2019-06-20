import React from 'react'
import moment from 'moment'

const ProjectSummary = ({ project }) => {
    return (
        <div className='row'>
            <div className="col m2"></div>
            <div className='col m8 z-depth-0 card grey-text text-darken-3 project-summary'>
                <span className='card-title'>{project.title}</span>
                <p>Објавено од {project.authorFirstName} {project.authorLastName}</p>
                <p className='grey-text'>{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary
