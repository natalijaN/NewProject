import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import InterestList from './InterestList'

class ListingInterests extends Component {
    render() {
        const { interests } = this.props;
        return (
            <div>
                <InterestList interests={interests} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        interests: state.firestore.ordered.interests
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'interests' }
    ])
)(ListingInterests)

