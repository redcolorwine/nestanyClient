import React, { useEffect, useState } from 'react'
import cmedia from './cartItem.module.css';
import { GoTrash } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";
import cartImg from './../../media/clothes/hoodie1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItemThunk, updateItemCountThunk, updateTotalPriceThunk } from '../../redux_store/cartReducer';
import Preloader from '../preloader/Preloader';
const CartItem = (props) => {

    const dispatch = useDispatch();
    const deleteItemInfo = useSelector((state) => state.cart.deleteItemInfo);
    const isLoading = useSelector(state => state.cart.isLoading);
    const updatedItem = useSelector(state => state.cart.updatedItem)
    const updatedTotalPrice = useSelector(state => state.cart.updatedTotalPrice)
    const [itemPrice, setPrice] = useState(props.price);
    const [countItem, setCount] = useState(props.count);

    const deleteButton = async () => {
        console.log(isLoading)
        await dispatch(deleteCartItemThunk(props.cartId));
        console.log(deleteItemInfo)
    }

    const rightButton = async () => {
        increasePrice();
        await dispatch(updateItemCountThunk(props.cartId, countItem + 1));
        // await dispatch(updateTotalPriceThunk(props.cartId, itemPrice));


    }
    const leftButton = async () => {
        decreasePrice();
        await dispatch(updateItemCountThunk(props.cartId, countItem - 1));
        // await dispatch(updateTotalPriceThunk(props.cartId, itemPrice));


    }
    const increasePrice = () => {
        setCount(countItem + 1)
        setPrice(itemPrice + props.price)

    };
    const decreasePrice = () => {
        setCount(countItem - 1)
        setPrice(itemPrice - props.price)

    }

    useEffect(() => {
        setPrice(itemPrice * props.count)
    }, [])

    useEffect(() => {
        dispatch(updateTotalPriceThunk(props.cartId, itemPrice))
    }, [itemPrice])

    console.log(updatedTotalPrice);
    console.log(updatedItem)
    if (isLoading) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={cmedia.cartItem}>
            <img src={cartImg} alt="" />
            <div className={cmedia.itemAbout}>
                <div className={cmedia.cartName}>
                    <h4>{props.name}</h4>
                    <GoTrash size={25} onClick={() => deleteButton()} />
                </div>
                <div className={cmedia.size_color}>
                    <p className={cmedia.sizeItem}>33</p>
                    <span> | </span>
                    <p className={cmedia.colorItem}>Синий</p>
                </div>
                <div className={cmedia.priceItem}>{itemPrice} P.</div>
                <div className={cmedia.countItem}>
                    {countItem > 1 && <GoTriangleLeft size={25} onClick={() => leftButton()} />}
                    <p className={cmedia.currentCount}>{countItem}</p>
                    <GoTriangleRight size={25} onClick={() => rightButton()} />
                </div>
            </div>
        </div>
    )
}

export default CartItem