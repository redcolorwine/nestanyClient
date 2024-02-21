import React, { useEffect, useState } from 'react'
import cmedia from './order.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { pay } from '../../redux_store/cartReducer';


const Order = (props) => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const paymentData = useSelector(state => state.cart.paymentData);
    const paymentStatus = useSelector(state => state.cart.paymentStatus);
    const [totalPrice, setTotal] = useState(0);

    const addPay = async (amount) => {
        try {
            await dispatch(pay(amount))
            console.log(paymentData);
            await window.location.replace(paymentData.confirmation.confirmation_url)
            // await history(paymentData.confirmation.confirmation_url)
            //нужно наверное удалить все товары из корзины
           
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {

        if (cartItems) {
            const totalP = cartItems.reduce(
                function (sum, currentItem) {
                    return sum + (currentItem.price * currentItem.count)
                },
                0
            )
            setTotal(totalP);
        }

    }, [paymentData])
    return (
        <div className={cmedia.order}>
            <div className={cmedia.orderWrapper}>
                <h1>Итого</h1>
                <hr />
                <div className={cmedia.goods}>
                    <p>{`Товары (${cartItems && cartItems.reduce(function (sum, currentItem) { return sum + currentItem.count }, 0)

                        })`}</p>
                    <p>123{props.price}</p>
                </div>
                <div className={cmedia.total}>
                    <p>Итого</p>
                    <p className={cmedia.totalP}>{cartItems && cartItems.reduce(
                        function (sum, currentItem) {
                            return sum + (currentItem.price * currentItem.count)
                        },
                        0
                    )}</p>
                </div>
                <button onClick={() => addPay(totalPrice)}>Оформить заказ</button>
                <div className={cmedia.check}>
                    <input type="checkbox" name="ch1" id="" />
                    <label htmlFor="ch1">Согласен с условиями использования торговой площадкой</label>
                </div>
            </div>
        </div>
    )
}

export default Order