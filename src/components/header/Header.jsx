import React, { useEffect, useState } from 'react'
import cmedia from './header.module.css';
import loginImg from './../../media/icons/login.png';
import logoutImg from './../../media/icons/logout.png';
import cartImg from './../../media/icons/cart.png';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthModule from '../auth/AuthModule';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux_store/authReducer';
import Modal from 'react-modal';
import { userAPI } from '../../api/api';
import LocationComponent from '../locationComponent/LocationComponent';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Header = (props) => {

    const history = useNavigate();
    const [auth, setAuth] = useState(false);
    const [authModule, setAuthModule] = useState(false);
    const [email, setEmail] = useState('');
    const isAuth = useSelector(state => state.auth.isAuth);
    const authData = useSelector(state => state.auth.authData);
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const logout = () => {
        const userId = localStorage.getItem('userId');
        dispatch(logoutThunk(userId));
        setModalIsOpen(false);
    }

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const modalContent = (
        <div>
            <h2>Уведомление</h2>
            <p>Вы точно желаете выйти?</p>
            <div className="buttons">
                <button onClick={closeModal}>Нет</button>
                <button onClick={() => logout()}>Да</button>
            </div>
        </div>
    );
    const onSubmit = async (e) => {
        e.preventDefault();
        await history('/')
        props.resultRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const cancelModule = () => {
        setAuthModule(false);
    }
    const logBut = () => {
        setAuthModule(true)
    }

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setEmail(localStorage.getItem('user'))
        } else {
            setEmail('')
        }
        console.log(authData);
    }, [authData])

    return (
        <div className={cmedia.header}>

            <div className={cmedia.logo}>

                <h2>nestany</h2>
                <LocationComponent />
            </div>

            <div>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                    {modalContent}
                </Modal>
            </div>
            <nav>
                <li><a onClick={(e) => onSubmit(e)} to="">КАТАЛОГ</a></li>
                <li><NavLink to="/">ГЛАВНАЯ</NavLink></li>
                <li><NavLink to="/delivery">ДОСТАВКА</NavLink></li>
                <li><NavLink to="/about">О НАС</NavLink></li>
                <li><NavLink to="/contacts">КОНТАКТЫ</NavLink></li>
            </nav>
            <div className={cmedia.authBlock}>
                {email
                    ? <div className={cmedia.auth}><NavLink to="">{email}</NavLink> <img onClick={() => openModal()} className={cmedia.logButton} src={logoutImg} alt="" /> <img src={cartImg} onClick={() => history('/cart')} alt="" /></div>
                    : <div className={cmedia.auth}><NavLink to="">Вход/Авторизация</NavLink> <img onClick={() => logBut()} className={cmedia.logButton} src={loginImg} alt="" /> <img src={cartImg} onClick={() => history('/cart')} alt="" /></div>
                }
                {authModule && <AuthModule cancelModule={cancelModule} />}
            </div>
        </div>
    )
}

export default Header