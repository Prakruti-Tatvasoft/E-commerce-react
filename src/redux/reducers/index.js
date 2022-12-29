import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { LOGOUT } from "../const";
import cartReducer from "./cartReducer";
import { memberReducer } from "./memberReducer";
import { productReducer, productDetailReducer } from "./productReducer";

const reducers = combineReducers({
    product: productReducer,
    cart: cartReducer,
    productDetail: productDetailReducer,
    member: memberReducer
})

const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
        storage.removeItem('persist:root')
        return reducers(undefined, action)
    }

    return reducers(state, action)
}

export default rootReducer