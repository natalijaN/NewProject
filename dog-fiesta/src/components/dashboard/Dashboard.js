import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { FirstPage } from '../fromOldProject/FirstPage';
import { SecondPage } from '../fromOldProject/SecondPage';
import { Footer } from '../layout/Footer';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard container'>
                <FirstPage />
                <SecondPage />
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
