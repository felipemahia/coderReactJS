import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ItemDetail = ({product}) => {
    const {title, price, description,img, stock} = product
    return(
        <>
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}, {price}
                </Card.Text>
                <Card.Text>
                    {stock}
                </Card.Text>
                <ItemCount/>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemDetail