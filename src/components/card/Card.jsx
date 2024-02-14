import React from 'react'
import cmedia from './card.module.css';
import { useNavigate } from 'react-router-dom';
import anyImg from './../../media/angela-bailey-jlo7Bf4tUoY-unsplash.jpg';
const Card = (props) => {

    const history = useNavigate();


    return (
        <div className={cmedia.card} onClick={() => history(`/items/${props.id}`)}>
            <img src={anyImg} alt="" />
            <h2>{props.type} {props.name}</h2>
            <h3>{props.price}p</h3>
        </div>
    )
}

export default Card