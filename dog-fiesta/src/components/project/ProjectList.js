import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

class ProjectList extends Component {
    state = {
        selectedOption: 'se-podaruva'
    }

    handleOptionChange = (e) => {
        console.log(e.target.value)
        this.setState({
            selectedOption: e.target.value
        });
    }

    render() {
        const { projects } = this.props;
        return (
            <div className='project-list section'>
                <div className='row center'>
                        <label className='label-checkbox'>
                            <input type="radio" name="decision" value="se-podaruva" className='input-checkbox' onChange={this.handleOptionChange} />
                            Се подарува
                    </label>
                        <label className='label-checkbox'>
                            <input type="radio" name="decision" value="se-prodava" className='input-checkbox' onChange={this.handleOptionChange} />
                            Се продава
                    </label>
                </div>
                {projects && projects.map(project => {
                    return (
                        <Link to={'/project/' + project.id} key={project.id}>
                            <ProjectSummary project={project} />
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default ProjectList
