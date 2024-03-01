import React from 'react'
import itemImg from './../../media/clothes/hoodie1.jpg';
import cmedia from './foundItem.module.css';

const FoundItem = (props) => {
    return (
        <div className={cmedia.foundItem}>
            <img src={itemImg} alt="" />
            <h2>{props.type} {props.name}</h2>
            <div className={cmedia.priceBox}>
                <h3>{props.price}p</h3>
            </div>
            <button>Удалить</button>
        </div>
    )
}

export default FoundItem