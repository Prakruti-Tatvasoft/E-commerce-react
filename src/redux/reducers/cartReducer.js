import { GET_CART, REMOVE_ALL_PRODUCTS_FROM_CART } from "../const"

const cartReducer = (state=[], action) => {
    switch(action.type) {
        case GET_CART:
            return [...action.payload]
        case REMOVE_ALL_PRODUCTS_FROM_CART:
            return []
        default:
            return state
    }
}

export default cartReducer