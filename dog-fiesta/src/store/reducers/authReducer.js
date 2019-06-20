
const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGGIN_ERROR': {
            console.log('error')
            return {
                ...state,
                authError: 'Login failed'
            }
        }
        case 'LOGGIN_SUCCESS': {
            console.log('loggin success');
            return {
                ...state,
                authError: null
            }
        }
        case 'SIGNOUT_SUCCESS': {
            console.log('signout success');
            return state;
        }
        case 'SIGNUP_SUCCESS': {
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        }
        case 'SIGNUP_ERROR': {
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        }
        default:
            return state;
    }
}

export default authReducer