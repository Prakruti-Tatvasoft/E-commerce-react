import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
// import PropTypes from 'prop-types'

const CommonCard = ({ product, buttonProp }) => {

    return (
        <div className="col-md-3">
            <Card sx={{ maxWidth: 345, minHeight: 400, height: '100%' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={product.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description.slice(0, 100)}...
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {product.price} $
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">{buttonProp.text}</Button>
                </CardActions>
            </Card>
        </div>
    )
}

// CommonCard.propTypes = {

// }

export default CommonCard
