import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <div className='row'>
                    <div className="col m2"></div>
                    <form className='white col m8 form-showing' onSubmit={this.handleSubmit}>
                        <h5 className='grey-text text-darken-3'>Најави се</h5>
                        <div className='input-field'>
                            <label htmlFor='email'>Е-пошта</label>
                            <input type='email' id='email' onChange={this.handleChange} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Лозинка</label>
                            <input type='password' id='password' onChange={this.handleChange} />
                        </div>
                        <div className='input-field'>
                            <button className='btn green linghten-1 z-depth-0'>Најави се</button>
                            <div className='red-text center'>
                                {authError ? <p>Неуспешно најавување</p> : null}
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
