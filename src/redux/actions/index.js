import { axiosWrapper } from "../../helpers/axiosWrapper"
import { GET_CART, GET_PRODUCTS, GET_PRODUCT_DETAIL, LOGOUT, REMOVE_ALL_PRODUCTS_FROM_CART, SAVE_MEMBER } from "../const"

const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const productList = await axiosWrapper.get('/products')
            dispatch({
                type: GET_PRODUCTS,
                payload: productList.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

const getAllCartProducts = () => {
    return async (dispatch) => {
        try {
            const productList = await axiosWrapper.get('/carts')
            dispatch({
                type: GET_CART,
                payload: productList.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

const productAddToCart = (productId) => {
    return async (dispatch) => {
        try {
            const res = await axiosWrapper.post('/carts', {
                productId
            })
            alert(res.data)
        } catch (error) {
            alert('This product is already added in your cart')
        }
    }
}

const productRemoveFromCart = (productId) => {
    return async (dispatch) => {
        try {
            await axiosWrapper.put('/carts', {
                productId
            })
        } catch (error) {
            console.log(error)
        }
    }
}

const RemoveAllProductsFromCart = (price) => {
    return async(dispatch) => {
        try {
            await axiosWrapper.delete('/carts')
            dispatch({ type: REMOVE_ALL_PRODUCTS_FROM_CART })
        } catch (error) {
            console.log(error);
        }
    }
}

const getProductInDetail = (productId) => {
    return async (dispatch) => {
        try {
            const res = await axiosWrapper.get(`/product/${productId}`)
            dispatch({type: GET_PRODUCT_DETAIL , payload: res.data})
        } catch (error) {
            console.log(error)
        }
    }
}

const searchWithFilter = ({ title, category }) => {
    return async (dispatch) => {
        try {
            let url = ''
            if(title && !category) {
                url +=`title=${title}`
            }
            if(category && !title) {
                url += `category=${category}`
            }
            if(title && category) {
                url = `title=${title}&category=${category}`
            }
            const res = await axiosWrapper.get(`/products?${url}`)
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

const saveUserData = (user) => {
    return async (dispatch) => {
        try {
            const res = await axiosWrapper.post('/signup', {
                ...user
            })
            dispatch({ type: SAVE_MEMBER, payload: res.data })
            localStorage.setItem('token', res.data.token)
        } catch (error) {
            console.log(error)
        }
    }
}

const logOut = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT })
    }
}

const userLogin = (user) => {
    return async (dispatch) => {
        try {
            const res = await axiosWrapper.post('/login', {
                ...user
            })
            dispatch({ type: SAVE_MEMBER, payload: res.data })
            localStorage.setItem('token', res.data.token)
        } catch (error) {
            throw error
        }
    }
}

export {
    getAllProducts,
    getAllCartProducts,
    productAddToCart,
    productRemoveFromCart,
    RemoveAllProductsFromCart,
    getProductInDetail,
    searchWithFilter,
    saveUserData,
    logOut,
    userLogin
}