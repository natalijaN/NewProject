import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import BreedsList from './BreedsList';

class ListingBreeds extends Component {
    render() {
        const { breeds } = this.props;
        return (
            <div>
                <BreedsList breeds={breeds} />           
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        breeds: state.firestore.ordered.breeds
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'breeds', orderBy: ["date", 'desc'] }
    ])
)(ListingBreeds)
