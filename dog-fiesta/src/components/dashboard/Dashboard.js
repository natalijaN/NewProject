import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { FirstPage } from './FirstPage';
import { SecondPage } from './SecondPage';
import './styleDashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div className='container dashboard'>
                <div className="first_page">
                    <FirstPage />
                </div>
                <div id="second_page">
                    <SecondPage />
                </div>
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
)(Dashboard)
