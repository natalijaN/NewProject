import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import AdvicesList from './AdvicesList';

class ListingAdvices extends Component {
    render() {
        const { advices } = this.props;
        return (
            <div>
                <AdvicesList advices={advices} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        advices: state.firestore.ordered.advices
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'advices' }
    ])
)(ListingAdvices)

