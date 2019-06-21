import React, { Component } from 'react'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import './styleProjects.css';

class Listing extends Component {  
    render() {
        const { projects } = this.props;
        return (
            <div>
                <ProjectList projects={projects} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] }
    ])
)(Listing)
