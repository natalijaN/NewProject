import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import BreedsList from './BreedsList';

class ListingBreeds extends Component {

    // change the user lists' current page
    changePage(page) {
        this.props.dispatch(push('/?page=' + page));
    }


    render() {
        const { breeds } = this.props;
        const {breeds, page} = this.props;
        const per_page = 10;
        const pages = Math.ceil(users.length / per_page);
        const start_offset = (page - 1) * per_page;
        let start_count = 0;
        return (
            <div>
                <BreedsList breeds={breeds} />
                <Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next
                    prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage} />
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
        { collection: 'breeds', limit: 3, orderBy: ["date", 'desc'] },
        { page: Number(state.routing.locationBeforeTransitions.query.page) || 1 }
    ])
)(ListingBreeds)
