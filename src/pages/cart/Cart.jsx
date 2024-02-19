import React, { useEffect, useState } from 'react'
import cmedia from './cart.module.css';
import { GoArrowLeft } from "react-icons/go";

import CartItem from '../../components/cartIem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItemsThunk } from '../../redux_store/cartReducer';
import Preloader from '../../components/preloader/Preloader';

const Cart = (props) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const isLoading = useSelector(state => state.cart.isLoading);
    const deletedItem = useSelector(state => state.cart.deleteItemInfo);
    const updatedItem = useSelector(state => state.cart.updatedItem);
    const updatedTotalPrice = useSelector(state => state.cart.updatedTotalPrice)
    const [totalPrice, setTotal] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('userId')) {
            dispatch(getCartItemsThunk(localStorage.getItem('userId')))

        }
        if (cartItems) {
            const totalP = cartItems.reduce(
                function (sum, currentItem) {
                    return sum + (currentItem.price * currentItem.count)
                },
                0
            )
            setTotal(totalP);
        }

    }, [deletedItem, updatedTotalPrice])

    // useEffect(() => {
    //     if (cartItems) {
    //         const totalP = cartItems.reduce(
    //             function (sum, currentItem) {
    //                 return sum + (currentItem.price * currentItem.count)
    //             },
    //             0
    //         )
    //         setTotal(totalP);
    //     }
    // }, [updatedTotalPrice])
    console.log(updatedTotalPrice);
    if (isLoading) {
        return (<Preloader />)
    }

    return (
        <div className={cmedia.cart}>
            <div className={cmedia.cartHeader}>
                <h2>Корзина</h2>
                <a href='/' className={cmedia.backToMain}>Вернуться в магазин <GoArrowLeft size={25} /></a>
            </div>
            <div className={cmedia.cartItems}>
                {cartItems
                    ? cartItems.map(cartItem => {
                        return (<CartItem name={cartItem.name} count={cartItem.count} brand={cartItem.brand} goodId={cartItem.goodId} cartId={cartItem.id} image={cartItem.img} price={cartItem.price} total_price={cartItem.total_price} type={cartItem.type} userId={cartItem.userId} />)
                    })
                    : <div>Ваша корзина пуста</div>
                }
            </div>
            <div className={cmedia.totalPrice}>
                <h2>Сумма заказа</h2>
                <hr />
                <div className={cmedia.total}>
                    <h3>Итого </h3>
                    <p className={cmedia.totalP}>{totalPrice} P.</p>

                </div>
                <button className={cmedia.orderNow}>Заказать</button>
            </div>
        </div>
    )
}

export default Cart