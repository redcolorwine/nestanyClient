import { applyMiddleware, combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";
import { thunk } from "redux-thunk";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
let reducers = combineReducers({
    main: mainReducer,
    auth: authReducer,
    cart: cartReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;