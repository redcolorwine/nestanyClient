import React, { useEffect, useState } from 'react'
import cmedia from './card.module.css';
import { useNavigate } from 'react-router-dom';
import anyImg from './../../media/angela-bailey-jlo7Bf4tUoY-unsplash.jpg';
import cartImg from './../../media/icons/cart.png';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCartThunk, getCartItemsThunk } from '../../redux_store/cartReducer';

const Card = (props) => {

    const history = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems)
    const [inCart, setInCart] = useState(false);
    const srcImage = `http://localhost:5000/goods/pictures/${props.image}`;
    const onCartClick = () => {
        if (localStorage.getItem('userId')) {
            let uId = localStorage.getItem('userId');
            dispatch(addItemToCartThunk(props.id, uId));
            setInCart(true);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('userId')) {
            dispatch(getCartItemsThunk(localStorage.getItem('userId')))
        }
    }, [])

    useEffect(() => {
        if (cartItems.length) {
            if (cartItems.find(cartItem => cartItem.goodId == props.id)) {
                setInCart(true);
            }
        }
    }, [cartItems])

    return (
        <div className={cmedia.card} >
            <img src={srcImage} alt="" onClick={() => history(`/items/${props.id}`)} />
            <h2>{props.type} {props.name}</h2>
            <div className={cmedia.priceBox}>
                <h3>{props.price}p</h3>
                {!inCart
                    ? <img src={cartImg} onClick={() => onCartClick()} alt="" />
                    : <p>Уже в корзине</p>
                }
            </div>

        </div>
    )
}

export default Card