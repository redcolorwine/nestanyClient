import { goodsAPI } from "../api/api";

const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CARD';
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const IS_LOADING = 'IS_LOADING';
const SET_ERR_DATA = 'SET_ERR_DATA';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const UPDATE_ITEM_COUNT = 'UPDATE_ITEM_COUNT';
const UPDATE_TOTAL_PRICE = 'UPDATE_TOTAL_PRICE'

let initialState = {
    errData: '',
    cartData: '',
    cartItems: '',
    isLoading: false,
    deleteItemInfo: '',
    updatedItem: '',
    updatedTotalPrice: ''
}

let cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            return {
                ...state,
            }
        }
        case SET_ERR_DATA: {
            return {
                ...state,
                errData: action.errData
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case GET_CART_ITEMS: {
            return {
                ...state,
                cartItems: action.cartItems
            }
        }
        case DELETE_CART_ITEM: {
            return {
                ...state,
                deleteItemInfo: action.deleteItemInfo
            }
        }
        case UPDATE_ITEM_COUNT: {
            return {
                ...state,
                updatedItem: action.updatedItem
            }
        }
        case UPDATE_TOTAL_PRICE: {
            return {
                ...state,
                updatedTotalPrice: action.updatedTotalPrice
            }
        }
        default: {
            return state;
        }
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
export const addItemToCart = () => {
    return {
        type: ADD_ITEM_TO_CART
    }
}
export const getCartItems = (cartItems) => {
    return {
        type: GET_CART_ITEMS, cartItems
    }
}
export const deleteCartItem = (deleteItemInfo) => {
    return {
        type: DELETE_CART_ITEM, deleteItemInfo
    }
}
export const updateItemCount = (updatedItem) => {
    return {
        type: UPDATE_ITEM_COUNT, updatedItem
    }
}
export const updateTotalPrice = (updatedTotalPrice) => {
    return {
        type: UPDATE_TOTAL_PRICE, updatedTotalPrice
    }
}
export const addItemToCartThunk = (goodId, userId) => {
    return (dispatch) => {
        goodsAPI.addItemToCart(goodId, userId).then(response => {
            setIsLoading(true);
            console.log(response);
            dispatch(addItemToCart());
            setIsLoading(false);
        })
    }
}
export const getCartItemsThunk = (userId) => {
    return (dispatch) => {
        goodsAPI.getCartItems(userId).then(response => {
            setIsLoading(true);
            dispatch(getCartItems(response.data))
            setIsLoading(false);
        })
    }
}
export const deleteCartItemThunk = (cartId) => {
    return (dispatch) => {

        goodsAPI.deleteCartItem(cartId).then(response => {
            setIsLoading(true);
            dispatch(deleteCartItem(response.data));
            setIsLoading(false);
        })
    }
}
export const updateItemCountThunk = (cartId, count) => {
    return (dispatch) => {
        goodsAPI.updateItemCount(cartId, count).then(response => {
            setIsLoading(true);
            dispatch(updateItemCount(response.data));
            setIsLoading(false);
        })
    }
}
export const updateTotalPriceThunk = (cartId, total_price) => {
    return (dispatch) => {
        goodsAPI.updateTotalPrice(cartId, total_price).then(response => {
            setIsLoading(true);
            dispatch(updateTotalPrice(response.data));
            setIsLoading(false);
        })
    }
}
export default cartReducer;