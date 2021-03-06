import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import InterestList from './InterestList'

class ListingInterests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
            currentList = this.props.interests;
            newList = currentList.filter(item => {
                const lc = item.title.toLowerCase();
                const filter = e.target.value.toLowerCase();
                if (lc.includes(filter)) {
                    newList.push(item);
                    this.setState({
                        filtered: newList
                    })
                    return this.state;
                }
            });
        }
        else {
            this.setState({
                filtered: newList
            })
            return this.state;
        }
    }
    render() {
        let { interests } = this.props;
        if (this.state.filtered.length !== 0) {
            interests = this.state.filtered
        }
        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Пребарај..." />
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

