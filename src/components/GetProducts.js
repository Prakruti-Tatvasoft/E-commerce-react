import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartProducts, getAllProducts, productAddToCart, searchWithFilter } from '../redux/actions'
import { Link } from 'react-router-dom'

const GetProducts = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const products = useSelector(state => state.product)

    const handleAdd = async (id) => {
        await dispatch(productAddToCart(id))
        await dispatch(getAllCartProducts())
    }

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
        dispatch(searchWithFilter({ title: search, category: filter }))
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
        dispatch(searchWithFilter({ category: e.target.value, title: search }))
    }


    const [categories, setCategory] = useState([])
    const getCategory = () => {
        let arr = products.map(p => p.category)
        let a = arr.filter((item, index) => arr.indexOf(item) === index)
        if (a.length !== 0 && products.length !== 0) {
            setCategory(a)
        }
    }
    if (categories.length === 0) {
        getCategory()
    }

    return (
        <div className='container'>
            <br />
            <input type='text' placeholder='Search product' className='form-control' onChange={handleChange} />
            <br />

            <select onChange={handleFilterChange} className='form-control' defaultValue='select category'>
                <option disabled>select category</option>
                {categories.map(c => {
                    return <option key={c} value={c}>{c}</option>
                })}
            </select>
            <br />
            <div className="row">
                {products.map((p) => {
                    return (
                        <div className="col-md-3 " key={p._id}>
                            <Card sx={{ maxWidth: 345, minHeight: 400, height: '100%', marginBottom: 5 }}>
                                <Link to={`/product/${p._id}`} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        sx={{ height: 160 }}
                                        image={p.image}
                                    />
                                </Link>
                                <CardContent>
                                    <Typography gutterBottom sx={{ fontSize: 19 }} component="div">
                                        {p.title}
                                    </Typography>
                                    <Typography gutterBottom component="div">
                                        Price : {p.price} $
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button sx={{ position: 'relative', bottom: 0 }} variant="contained" size="small" onClick={() => handleAdd(p._id)}>Add to cart</Button>
                                </CardActions>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GetProducts
