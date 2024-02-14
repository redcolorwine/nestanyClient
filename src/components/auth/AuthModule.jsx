import React, { useEffect, useRef, useState } from 'react'
import cmedia from './auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../redux_store/authReducer';
import { useNavigate } from 'react-router-dom';

const AuthModule = (props) => {

    const [authMode, setAuthMode] = useState('register');
    const dispatch = useDispatch();
    const authData = useSelector(state => state.auth.authData);
    const errData = useSelector(state => state.auth.errData);
    const [errMessage, setErrMessage] = useState('');
    const isLoading = useSelector(state => state.auth.isLoading);
    const isAuth = useSelector(state => state.auth.isAuth);
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useNavigate();

    useEffect(() => { }, [errData])

    const authBut = (e, authType) => {
        e.preventDefault();
        setAuthMode(authType);
    }
    const loginBut = (email, password) => {
        dispatch(login(email, password));
    }
    const registerBut = (email, password) => {
        dispatch(register(email, password));
    }

    useEffect(() => {
        if (localStorage.getItem('user')) {
            props.cancelModule();
        }
    }, [isAuth])

    if (authMode === 'login') {
        return (
            <div className={cmedia.auth}>
                <div className={cmedia.authForm}>
                    <button className={cmedia.cancel} onClick={() => props.cancelModule()}>x</button>
                    <h1>Авторизация</h1>
                    <label htmlFor="email">Почтовый адрес</label>
                    <input type="text" name='email' ref={emailRef} autoComplete="new-password" />
                    <label htmlFor="email">Пароль</label>
                    <input type="password" name='password' ref={passwordRef} autoComplete="new-password" />
                    <button className={cmedia.authButton} onClick={() => loginBut(emailRef.current.value, passwordRef.current.value)}>Войти</button>
                    {errData && <p className={cmedia.errData}>{errData}</p>}
                    <a className={cmedia.swapMode} href="#" onClick={(e) => authBut(e, 'register')}>Регистрация</a>
                </div>
            </div>
        )
    } else {
        return (
            <div className={cmedia.auth}>
                <div className={cmedia.authForm}>
                    <button className={cmedia.cancel} onClick={() => props.cancelModule()}>x</button>
                    <h1>Регистрация</h1>
                    <label htmlFor="email">Почтовый адрес</label>
                    <input type="text" name='email' ref={emailRef} autoComplete="new-password" />
                    <label htmlFor="email">Пароль</label>
                    <input type="password" name='password' ref={passwordRef} autoComplete="new-password" />
                    <button className={cmedia.authButton} onClick={() => registerBut(emailRef.current.value, passwordRef.current.value)}>Зарегистрироваться</button>
                    {errData && <p className={cmedia.errData}>{errData}</p>}
                    <a className={cmedia.swapMode} href="#" onClick={(e) => authBut(e, 'login')}>Уже есть аккаунт?</a>
                </div>
            </div>
        )
    }
}

export default AuthModule