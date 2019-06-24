import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import ListingBreeds from '../Breeds/ListingBreeds'
import { Link } from 'react-router-dom'

export class Breeds extends Component {
    render() {
        let { breeds } = this.props;
        const now = breeds !== undefined ? (<ListingBreeds breeds={breeds} />) : (<p className='white-text'>Loading</p>)
        return (
            <div className='row'>
                <div className="col m4 about-us">
                    <ul>
                        <li>
                            <Link to='/breeds'>
                                <button className="btn green darken-2 my-btns">Раси</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/advices'>
                                <button className="btn green darken-2 my-btns">Совети</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/interests'>
                                <button className="btn green darken-2 my-btns">Занимливости</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/aboutus'>
                                <button className="btn green darken-2 my-btns">За нас</button>                            
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
