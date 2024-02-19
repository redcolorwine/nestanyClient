import sw1 from './../media/clothes/sweetshirt1.jpg';
import sw2 from './../media/clothes/sweetshirt2.jpg';
import socks1 from './../media/clothes/socks1.jpg';
import socks2 from './../media/clothes/socks2.jpg';
import socks3 from './../media/clothes/socks3.jpg';
import socks4 from './../media/clothes/socks4.jpg';
import socks5 from './../media/clothes/socks5.jpg';
import socks6 from './../media/clothes/socks6.jpg';
import tshirt1 from './../media/clothes/tshirt1.jpg';
import tshirt2 from './../media/clothes/tshirt2.jpg';
import tshirt3 from './../media/clothes/tshirt3.jpg';
import tshirt4 from './../media/clothes/tshirt4.jpg';
import leggins1 from './../media/clothes/leggins1.jpg';
import leggins2 from './../media/clothes/leggins2.jpg';
import hoodie1 from './../media/clothes/hoodie1.jpg';
import hoodie2 from './../media/clothes/hoodie2.jpg';
import hoodie3 from './../media/clothes/hoodie3.jpg';
import hoodie4 from './../media/clothes/hoodie4.jpg';
import cap1 from './../media/clothes/cap1.jpg';
import cap2 from './../media/clothes/cap2.jpg';
import cap3 from './../media/clothes/cap3.jpg';
import jacket1 from './../media/clothes/jacket1.jpg';
import jacket2 from './../media/clothes/jacket2.jpg';
import { goodsAPI } from '../api/api';
const GET_CARDS = 'GET_CARDS';
const IS_LOADING = 'IS_LOADING';
const SET_ERR_DATA = 'SET_ERR_DATA'
const SET_ONE_CARD = 'SET_ONE_CARD';


let initialState = {
    cards: [
        { id: 1, type: 'Свитшот', brand: 'nestany', name: 'nestany clothe', description: 'Отличный комфортный свитшот', materials: ['Хлопок', 'Эластан'], price: 4990, image: sw1 },
        { id: 2, type: 'Свитшот', brand: 'nestany', name: 'nestany clothe', description: 'Отличный комфортный свитшот', materials: ['Хлопок', 'Эластан'], price: 3990, image: sw2 },
        { id: 3, type: 'Носки', brand: 'nestany', name: 'nestany clothe', description: 'Удобные носки', materials: ['Хлопок', 'Эластан'], price: 890, image: socks1 },
        { id: 4, type: 'Носки', brand: 'nestany', name: 'nestany clothe', description: 'Удобные носки', materials: ['Хлопок', 'Эластан'], price: 890, image: socks2 },
        { id: 5, type: 'Носки', brand: 'nestany', name: 'nestany clothe', description: 'Удобные носки', materials: ['Хлопок', 'Эластан'], price: 890, image: socks3 },
        { id: 6, type: 'Носки', brand: 'nestany', name: 'nestany clothe', description: 'Удобные носки', materials: ['Хлопок', 'Эластан'], price: 890, image: socks4 },
        { id: 7, type: 'Носки', brand: 'nestany', name: 'nestany clothe', description: 'Удобные носки', materials: ['Хлопок', 'Эластан'], price: 890, image: socks5 },
        { id: 8, type: 'Носки', brand: 'nestany', name: 'nestany clothe', description: 'Удобные носки', materials: ['Хлопок', 'Эластан'], price: 890, image: socks6 },
        { id: 9, type: 'Футболка', brand: 'nestany', name: 'nestany clothe', description: 'Стильная футболка', materials: ['Хлопок', 'Эластан'], price: 3990, image: tshirt1 },
        { id: 10, type: 'Футболка', brand: 'nestany', name: 'nestany clothe', description: 'Стильная футболка', materials: ['Хлопок', 'Эластан'], price: 3990, image: tshirt2 },
        { id: 11, type: 'Футболка', brand: 'nestany', name: 'nestany clothe', description: 'Стильная футболка', materials: ['Хлопок', 'Эластан'], price: 3990, image: tshirt3 },
        { id: 12, type: 'Футболка', brand: 'nestany', name: 'nestany clothe', description: 'Стильная футболка', materials: ['Хлопок', 'Эластан'], price: 3990, image: tshirt4 },
        { id: 13, type: 'Леггинсы', brand: 'nestany', name: 'nestany clothe', description: 'Прекрасные спортивные леггинсы', materials: ['Хлопок', 'Эластан'], price: 3990, image: leggins1 },
        { id: 14, type: 'Леггинсы', brand: 'nestany', name: 'nestany clothe', description: 'Прекрасные спортивные леггинсы', materials: ['Хлопок', 'Эластан'], price: 3990, image: leggins2 },
        { id: 15, type: 'Худи', brand: 'nestany', name: 'nestany clothe', description: 'Отличный комфортный худи', materials: ['Хлопок', 'Эластан'], price: 4990, image: hoodie1 },
        { id: 16, type: 'Худи', brand: 'nestany', name: 'nestany clothe', description: 'Отличный комфортный худи', materials: ['Хлопок', 'Эластан'], price: 4990, image: hoodie2 },
        { id: 17, type: 'Худи', brand: 'nestany', name: 'nestany clothe', description: 'Отличный комфортный худи', materials: ['Хлопок', 'Эластан'], price: 4990, image: hoodie3 },
        { id: 18, type: 'Худи', brand: 'nestany', name: 'nestany clothe', description: 'Отличный комфортный худи', materials: ['Хлопок', 'Эластан'], price: 4990, image: hoodie4 },
        { id: 19, type: 'Кепка', brand: 'nestany', name: 'nestany clothe', description: 'Стильная кепка', materials: ['Хлопок', 'Эластан'], price: 2990, image: cap1 },
        { id: 21, type: 'Кепка', brand: 'nestany', name: 'nestany clothe', description: 'Стильная кепка', materials: ['Хлопок', 'Эластан'], price: 2990, image: cap2 },
        { id: 22, type: 'Кепка', brand: 'nestany', name: 'nestany clothe', description: 'Стильная кепка', materials: ['Хлопок', 'Эластан'], price: 2990, image: cap3 },
        { id: 23, type: 'Куртка', brand: 'nestany', name: 'nestany clothe', description: 'Стильная куртка', materials: ['Хлопок', 'Эластан'], price: 7990, image: jacket1 },
        { id: 24, type: 'Куртка', brand: 'nestany', name: 'nestany clothe', description: 'Стильная куртка', materials: ['Хлопок', 'Эластан'], price: 7990, image: jacket2 },
    ],
    cardItems: '',
    oneCard: '',
    isLoading: false,
    errData: '',
}



let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS: {
            return {
                ...state,
                cardItems: action.cardItems
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case SET_ERR_DATA: {
            return {
                ...state,
                errData: action.errData
            }
        }
        case SET_ONE_CARD: {
            return {
                ...state,
                oneCard: action.oneCard
            }
        }
        default:
            return state;

    }
}

export const setCards = (cardItems) => {
    return {
        type: GET_CARDS, cardItems
    }
}
export const setIsLoading = (isLoading) => {
    return {
        type: IS_LOADING, isLoading
    }
}
export const setErrData = (errData) => {
    return {
        type: SET_ERR_DATA, errData
    }
}
export const setOneCard = (oneCard) => {
    return {
        type: SET_ONE_CARD, oneCard
    }
}

export const getCardsThunk = (limit, offset) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsAPI.getGoods(limit, offset).then(response => {
            dispatch(setCards(response.data))
            dispatch(setIsLoading(false))
        }).catch(error => {
            dispatch(setErrData(error.message))
            dispatch(setIsLoading(false));
        })
    }
}

export const getCardById = (id) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        goodsAPI.getGoodById(id).then(response => {
            dispatch(setOneCard(response.data))
            dispatch(setIsLoading(false))
        }).catch(error => {
            dispatch(setErrData(error.message))
            dispatch(setIsLoading(false));
        })
    }
}

export default mainReducer;