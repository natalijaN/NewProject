import React from 'react'
import {NavLink} from 'react-router-dom'

const SignOutLink = () => {
    return (
        <ul className='right'>
            <li><NavLink to='/signup'>Регистрирај се</NavLink></li>
            <li><NavLink to='/signin'>Најави се</NavLink></li>
        </ul>
    )
}

export default SignOutLink