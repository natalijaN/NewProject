import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;

    const links = auth.uid ? <SignInLink profile={profile} /> : <SignOutLink />
    return (
        <nav className='row small-nav nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>DogFiesta</Link>             
                {links}
                <NavLink to='/projects' className='right'>Огласи</NavLink>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
