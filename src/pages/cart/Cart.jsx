import React from 'react'
import cmedia from './cart.module.css';
import { GoArrowLeft } from "react-icons/go";

import CartItem from '../../components/cartIem/CartItem';

const Cart = (props) => {
    return (
        <div className={cmedia.cart}>
            <div className={cmedia.cartHeader}>
                <h2>Корзина</h2>
                <a href='/' className={cmedia.backToMain}>Вернуться в магазин <GoArrowLeft size={25} /></a>
            </div>
            <div className={cmedia.cartItems}>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className={cmedia.totalPrice}>
                <h2>Сумма заказа</h2>
                <hr />
                <div className={cmedia.total}>
                    <h3>Итого </h3>
                    <p className={cmedia.totalP}>3990 P.</p>

                </div>
                <button className={cmedia.orderNow}>Заказать</button>
            </div>
        </div>
    )
}

export default Cart