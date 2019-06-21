import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authAction'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <div className="row">
                    <div className='col m2'></div>
                    <form className='white col m8 form-showing' onSubmit={this.handleSubmit}>
                        <h5 className='grey-text text-darken-3'>Регистрирај се</h5>
                        <div className='input-field'>
                            <label htmlFor='email'>E-пошта</label>
                            <input type='email' id='email' onChange={this.handleChange} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Лозинка</label>
                            <input type='password' id='password' onChange={this.handleChange} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='firstName'>Име</label>
                            <input type='text' id='firstName' onChange={this.handleChange} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='lastName'>Презиме</label>
                            <input type='text' id='lastName' onChange={this.handleChange} />
                        </div>
                        <div className='input-field'>
                            <button className='btn green linghten-1 z-depth-0'>Регистрирај се</button>
                            <div className="center red-text">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatcToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(SignUp)
