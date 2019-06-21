import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import ListingAdvices from '../Advices/ListingAdvices'
import { Link } from 'react-router-dom'

export class Advices extends Component {
    render() {
        const { advices } = this.props;
        const now = advices !== undefined ? (<ListingAdvices advices={advices} />) : (<p className='white-text'>no</p>)
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
                    <h2 className="white-text center" id="aboutUs">Совети</h2>
                    {now}
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
