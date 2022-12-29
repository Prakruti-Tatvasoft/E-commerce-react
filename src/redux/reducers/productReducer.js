import { GET_PRODUCTS, GET_PRODUCT_DETAIL } from "../const"

const productReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return [...action.payload]
        default:
            return state
    }
}

const productDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAIL:
            return { ...action.payload }
        default:
            return state
    }
}

export {
    productReducer,
    productDetailReducer
}