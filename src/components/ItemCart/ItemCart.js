import React from 'react'
import { Card } from 'react-bootstrap'
import '../ItemCart.scss'
import { Button } from 'bootstrap'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({ product }) => {
    const {deleteElement} = useCartContext();
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={product.img} alt={product.title} />
            <Card.ImgOverlay>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>Precio: ${product.price}</Card.Text>
                <Card.Text>Cantidad: {product.quantity}</Card.Text>
                <Card.Text>SubTotal: ${product.quantity * product.price}</Card.Text>
            </Card.ImgOverlay>
            <Button><button onClick={() => deleteElement(product.id)}>Eliminar</button></Button>
        </Card>
    );
}

export default ItemCart