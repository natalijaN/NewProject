import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

class ProjectList extends Component {
    state = {
        selectedOption: '',
        selected: []
    }

    handleOptionChange = (e) => {
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
            currentList = this.props.projects;
            newList = currentList.filter(item => {
                const lc = item.title.toLowerCase();
                const filter = e.target.value.toLowerCase();
                if (lc.includes(filter)) {
                    newList.push(item);
                    this.setState({
                        ...this.state,
                        selected: newList
                    })
                    return this.state;
                }
            });
            if (e.target.value === 'all') {
                this.setState({
                    selected: this.props.projects
                })  
                return this.state;
            }
            this.setState({
                selectedOption: e.target.value
            });
        }
    }

    render() {
        let { projects } = this.props;
        if (this.state.selectedOption !== '') {
            projects = this.state.selected;
        }
        return (
            <div className='project-list section'>
                <div className='row center'>
                    <label className='label-checkbox'>
                        <input type="radio" name="decision" value="podaruva" className='input-checkbox' onChange={this.handleOptionChange} />
                        Се подарува
                    </label>
                    <label className='label-checkbox'>
                        <input type="radio" name="decision" value="prodava" className='input-checkbox' onChange={this.handleOptionChange} />
                        Се продава
                    </label>
                    <label className='label-checkbox'>
                        <input type="radio" name="decision" value="all" className='input-checkbox' onChange={this.handleOptionChange} />
                        Сите огласи
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
