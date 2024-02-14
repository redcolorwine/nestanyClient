import React, { forwardRef, useEffect, useState } from 'react'
import cmedia from './main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card/Card';
import { getCardsThunk } from '../../redux_store/mainReducer';


const Main = forwardRef((props, ref) => {

    const cardsData = useSelector((state) => state.main.cards);
    const serverCards = useSelector((state) => state.main.cardItems);
    const dispatch = useDispatch();

    const [filterClothe, setFilter] = useState('');

    useEffect(() => {
        dispatch(getCardsThunk(10, 0));
    }, [])

    if (!cardsData) {
        return (<>загрузка</>)
    }
    console.log(serverCards)
    return (
        <div className={cmedia.main}>
            <div className={cmedia.logoBlock}>
                <h1>nestany</h1>
            </div>
            <div className={cmedia.catalog}>
                <nav>
                    <li onClick={() => setFilter('')}>Все</li>
                    <li onClick={() => setFilter('Футболка')}>ФУТБОЛКИ</li>
                    <li onClick={() => setFilter('Шорты')}>ШОРТЫ</li>
                    <li onClick={() => setFilter('Майка')}>МАЙКИ</li>
                    <li onClick={() => setFilter('Носки')}>НОСКИ</li>
                    <li onClick={() => setFilter('Леггинсы')}>ЛЕГГИНСЫ, ВЕЛОСИПЕДКИ</li>
                    <li onClick={() => setFilter('Куртка')}>КУРТКИ</li>
                    <li onClick={() => setFilter('Худи')}>ХУДИ</li>
                    <li onClick={() => setFilter('Свитшот')}>СВИТШОТЫ</li>
                    <li onClick={() => setFilter('Кепка')}>ГОЛОВНЫЕ УБОРЫ</li>
                    <li onClick={() => setFilter('Аксессуар')}>АКСЕССУАРЫ</li>
                </nav>
            </div>
            <div className={cmedia.cards} ref={ref}>
                {/* {cardsData && filterClothe === ''
                    ?
                    cardsData.map(card => {
                        return (<Card id={card.id} key={card.id} image={card.image} name={card.name} type={card.type} price={card.price} />)
                    })
                    :
                    cardsData.map(card => {
                        if (card.type == filterClothe)
                            return (<Card id={card.id} key={card.id} image={card.image} name={card.name} type={card.type} price={card.price} />)
                    })

                } */}
                {serverCards.rows && serverCards.rows.map(card => {
                    return (<Card id={card.id} key={card.id} image={card.img} name={card.name} type={card.type} price={card.price} />)
                })}
            </div>
        </div>
    )
});

export default Main