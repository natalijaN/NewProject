import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import ListingBreeds from '../Breeds/ListingBreeds'
import { Link } from 'react-router-dom'

export class Breeds extends Component {
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
