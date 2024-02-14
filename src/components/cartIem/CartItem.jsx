import React from 'react'
import cmedia from './cartItem.module.css';
import { GoTrash } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";
import cartImg from './../../media/clothes/hoodie1.jpg';
const CartItem = () => {
    return (
        <div className={cmedia.cartItem}>
            <img src={cartImg} alt="" />
            <div className={cmedia.itemAbout}>
                <div className={cmedia.cartName}>
                    <h4>Худи Nestany</h4>
                    <GoTrash size={25} />
                </div>
                <div className={cmedia.size_color}>
                    <p className={cmedia.sizeItem}>33</p>
                    <span> | </span>
                    <p className={cmedia.colorItem}>Синий</p>
                </div>
                <div className={cmedia.priceItem}>3990 P.</div>
                <div className={cmedia.countItem}>
                    <GoTriangleLeft size={25} />
                    <p className={cmedia.currentCount}>1</p>
                    <GoTriangleRight size={25} />
                </div>
            </div>
        </div>
    )
}

export default CartItem