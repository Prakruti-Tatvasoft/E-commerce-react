import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartProducts, productRemoveFromCart, RemoveAllProductsFromCart } from '../redux/actions'
import { Link } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch()

    const handleRemove = async (id) => {
        await dispatch(productRemoveFromCart(id))
        await dispatch(getAllCartProducts())
    }

    useEffect(() => {
        dispatch(getAllCartProducts())
    }, [])

    const cartList = useSelector(state => state.cart)
    const products = []
    cartList.map((c) => products.push(c.productId))


    const [price, setPrice] = useState(0)
    const handleCheckout = () => {
        setPrice(products.reduce((accumulator, item) => {
            return accumulator + item.price;
        }, 0))
        dispatch(RemoveAllProductsFromCart(price))
    }

    return (
        <>
            <div className='container'>
                <div className="row">
                    {
                        cartList.length > 0
                            ?
                            <>
                                {products.map((p) => {
                                    return (
                                        <>

                                            <div className="card mb-3" style={{ maxWidth: '540px' }} key={p._id}>
                                                <div className="row no-gutters">
                                                        <div className="col-md-4">
                                                        <Link to={`/product/${p._id}`} style={{ textDecoration: 'none', color: 'black' }}>

                                                            <img src={p.image} className="card-img" alt='product' height='150' />
                                                            </Link>

                                                        </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <p className="card-text">{p?.title}</p>
                                                            <p className="card-text">{p?.description?.slice(0, 70)}...</p>
                                                            <p className="card-text">{p?.price} $</p>
                                                            <Button variant='contained' onClick={() => handleRemove(p._id)}>Remove item</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                {/* <Button variant="contained" onClick={() => handleCheckout(price)}>Checkout</Button> */}
                                <Button variant="contained" onClick={() => handleCheckout(price)}>Checkout</Button>
                            </>
                            :
                            <h5> Total price : {price}</h5>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart
