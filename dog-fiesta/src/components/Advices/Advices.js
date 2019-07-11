import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import ListingAdvices from '../Advices/ListingAdvices'
import { Link } from 'react-router-dom'

export class Advices extends Component {
    render() {
        const { advices } = this.props;
        const advicesResponse = advices !== undefined ? (<ListingAdvices advices={advices} />) : (<p className='white-text'>Се вчитува...</p>)
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
                                <button className="btn green darken-2 my-btns active">Совети</button>
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
                    <h2 className="white-text center" id="aboutUs">Совети</h2>
                    {advicesResponse}
                </div>
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
)(Advices)
