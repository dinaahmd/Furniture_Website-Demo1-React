import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
export default function ProductItem(props) {
    let navigate = useNavigate()
    let { product } = props

    let goToProductDetails = (productId) => {
        navigate(`/products/${productId}`);
    }

    return (
        <div className="col-sm-6 col-md-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '300px' }} variant="top" src={product.src} />
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>
                        {product.describe}
                    </Card.Text>
                    <Card.Text>Price : {product.price}</Card.Text>
                    <Card.Text>quantity : {product.quantity}</Card.Text>
                    <Button onClick={() => goToProductDetails(product.id)} variant="warning">Show More</Button>
                </Card.Body>
            </Card>
        </div>
    )
}