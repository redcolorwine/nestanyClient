import { authAPI } from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR_DATA = 'SET_ERROR_DATA';
const SET_IS_AUTH = 'SET_IS_AUTH';

const initialState = {
    isAuth: false,
    isLoading: false,
    errData: '',
    authData: '',
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_DATA: {
            return {
                ...state,
                authData: action.authData
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case SET_ERROR_DATA: {
            return {
                ...state,
                errData: action.errData
            }
        }
        case SET_IS_AUTH: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        default: {
            return state;
        }
    }
}

export const setAuth = (authData) => {
    return {
        type: SET_AUTH_DATA, authData
    }
}
export const setLoading = (isLoading) => {
    return {
        type: SET_LOADING, isLoading
    }
}
export const setErrData = (errData) => {
    return {
        type: SET_ERROR_DATA, errData
    }
}
export const setIsAuth = (isAuth) => {
    return {
        type: SET_IS_AUTH, isAuth
    }
}
export const login = (email, password) => {

    return (dispatch) => {
        localStorage.clear();
        authAPI.login(email, password).then(response => {
            dispatch(setErrData(''))
            dispatch(setLoading(true));
            dispatch(setAuth(response.data))
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', response.data.email)
            localStorage.setItem('userId', response.data.userId)
            localStorage.setItem('roles', response.data.roles[0].value)
            console.log(response.data)
            dispatch(setIsAuth(true));
            dispatch(setLoading(false));
        }).catch(error => {
            dispatch(setErrData(error.message))
            dispatch(setLoading(false));
        })
    }
}
export const register = (email, password) => {
    return (dispatch) => {
        localStorage.clear();
        authAPI.register(email, password).then(response => {
            dispatch(setErrData(''))
            dispatch(setLoading(true));
            dispatch(setAuth(response.data));
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.email);
            localStorage.setItem('userId', response.data.userId);
            dispatch(setIsAuth(true));
            dispatch(setLoading(false));
        }).catch(error => {
            dispatch(setErrData(error.message))
            dispatch(setLoading(false));
        })
    }
}

export const logoutThunk = () => {

    return (dispatch) => {
        localStorage.clear()
        dispatch(setAuth(''))
        dispatch(setIsAuth(false));
    }
}

export default authReducer;