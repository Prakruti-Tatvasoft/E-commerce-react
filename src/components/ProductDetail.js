import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductInDetail } from '../redux/actions'

const ProductDetail = () => {
    const { id } = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductInDetail(id))
    }, [])

    const product = useSelector(state => state.productDetail)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={product.image} alt='product' height='400' width='400' />
                </div>
                <div className='col-md-6'>
                    <br />
                    <h6>{product.title}</h6>
                    <h6>{product.description}</h6>
                    <h6>{product.price} $</h6>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
