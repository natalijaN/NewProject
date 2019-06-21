import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import ListingBreeds from '../Breeds/ListingBreeds'
import { Link } from 'react-router-dom'

export class Breeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.breeds
        });
    }

    handleChange(e) {
        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList
            currentList = this.props.breeds;
            // console.log(currentList)
            // Use .filter() to determine which breeds should be displayed
            // based on the search terms
            newList = currentList.filter(item => {
                // change current item to lowercase
                const lc = item.title.toLowerCase();
                console.log(lc)
                // change search term to lowercase
                const filter = e.target.value.toLowerCase();
                console.log(filter)
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                if (lc.includes(filter)) {
                    console.log("in filter")
                    console.log(item)
                    newList.push(item);
                    console.log(newList)
                    this.setState({
                        filtered: newList
                    })
                }
            });
        }
        console.log(newList)
            // else {
        //     // If the search bar is empty, set newList to original task list
        //     newList = this.props.breeds;
        // }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });

    }

    render() {
        const { breeds } = this.props;
        const now = breeds !== undefined ? (<ListingBreeds breeds={breeds} />) : (<p className='white-text'>no</p>)
        return (
            <div className='row'>
                <div className="col m4 about-us">
                    <ul>
                        <li>
                            <Link to='/breeds'>
                                <a className="btn green darken-2 my-btns">Раси</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/advices'>
                                <a className="btn green darken-2 my-btns">Совети</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/interests'>
                                <a className="btn green darken-2 my-btns">Занимливости</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/aboutus'>
                                <a className="btn green darken-2 my-btns">За нас</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='col m8'>
                    <h2 className="white-text center" id="aboutUs">Раси</h2>
                    <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                    {now}
                </div>
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
        { collection: 'breeds' }
    ])
)(Breeds)
