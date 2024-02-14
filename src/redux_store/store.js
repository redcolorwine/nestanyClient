import { applyMiddleware, combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";
import { thunk } from "redux-thunk";
import authReducer from "./authReducer";
let reducers = combineReducers({
    main: mainReducer,
    auth:authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;