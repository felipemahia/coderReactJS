import React  from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ data }) => {
    const { title, price, description, img, stock } = data;
    return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}, {price}
                </Card.Text>
                <Card.Footer className="text-muted">Stock de: {stock} unidades</Card.Footer>
                <ItemCount stock={stock} productData={data} />
            </Card.Body>
        </Card>
    )
}

export default ItemDetail