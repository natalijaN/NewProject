import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignInLink = (props) => {
    return (
        <ul className='right'>
            <li><NavLink to='/create'>Нов оглас</NavLink></li>
            <li><a href='/' onClick={props.signOut}>Одјави се</a></li>
            <li>
                <NavLink to='/' className='btn green lighten-1'>
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLink)