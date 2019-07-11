import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import ListingInterests from './ListingInterests'
import { Link } from 'react-router-dom'

export class Interests extends Component {
    render() {
        const { interests } = this.props;
        const interestResponse = interests !== undefined ? (<ListingInterests interests={interests} />) : (<p className='white-text'>Се вчитува...</p>)
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
                                <button className="btn green darken-2 my-btns active">Занимливости</button>
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
                    <h2 className="white-text center" id="aboutUs">Занимливости</h2>
                    {interestResponse}
                </div>
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
)(Interests)
