import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import AdvicesList from './AdvicesList';

class ListingAdvices extends Component {
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
            currentList = this.props.advices;
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
        let { advices } = this.props;
        if (this.state.filtered.length !== 0) {
            advices = this.state.filtered
        }
        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Пребарај..." />
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

