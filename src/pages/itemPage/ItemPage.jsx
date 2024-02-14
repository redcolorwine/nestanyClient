import React, { useEffect } from 'react'
import cmedia from './itemPage.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import noimage from './../../media/nick-de-partee-5DLBoEX99Cs-unsplash.jpg';
import { getCardById } from '../../redux_store/mainReducer';
const ItemPage = (props) => {

    const { id } = useParams();
    const cardInfo = useSelector(state => state.main.cards);
    const currentCard = cardInfo.filter(card => card.id == id)
    const oneCard = useSelector(state => state.main.oneCard)
    const dispatch = useDispatch();
    console.log(currentCard);
    useEffect(() => {
        dispatch(getCardById(id))
    }, [])
    console.log(oneCard)
    if (!oneCard) {
        return (
            <div> ...загрузка</div>
        )
    }
    else {
        console.log(oneCard)
        return (
            // <div className={cmedia.itemPage}>
            //     <h2>{currentCard[0].type} {currentCard[0].brand} {currentCard[0].name}</h2>
            //     <div className={cmedia.image_descr}>
            //         <img src={currentCard[0].image ? currentCard[0].image : noimage} alt="" />
            //         <div className={cmedia.descrBlock}>
            //             <h3>{currentCard[0].name}</h3>
            //             <button className={cmedia.butButton}>Купить</button>
            //             <p>Описание: {currentCard[0].description ? currentCard[0].description : 'в данный момент нет описания'}</p>
            //             <p>Состав: {currentCard[0].materials && currentCard[0].materials.map(mat => { return <>{` ` + mat}</> })}</p>
            //             <p>Цена: {currentCard[0].price ? currentCard[0].price : 'в данный момент нет центы'}</p>
            //         </div>
            //     </div>
            // </div>
            <div className={cmedia.itemPage}>
                <h2>{oneCard.type} {oneCard.brand} {oneCard.name}</h2>
                <div className={cmedia.image_descr}>
                    <img src={oneCard.image ? oneCard.image : noimage} alt="" />
                    <div className={cmedia.descrBlock}>
                        <h3>{oneCard.name}</h3>
                        <button className={cmedia.butButton}>Купить</button>
                        <p>Описание: {oneCard.description ? oneCard.description : 'в данный момент нет описания'}</p>
                        <p>Состав: {currentCard[0].materials && currentCard[0].materials.map(mat => { return <>{` ` + mat}</> })}</p>
                        <p>Цена: {oneCard.price ? oneCard.price : 'в данный момент нет центы'}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default ItemPage