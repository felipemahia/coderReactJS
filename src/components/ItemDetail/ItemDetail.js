import React, {useState}  from 'react';
import ItemCount from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {
    const { title, price, description, img, stock } = data;
    const [quantitySelected, setQuantitySelected] = useState(0)
    return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}, {price}
                </Card.Text>
                <Card.Footer className="text-muted">Stock de: {stock} unidades</Card.Footer>
                {
                    quantitySelected > 1 ? <Button variant="outline-primary"><Link to="/cart">Confirmar compra</Link></Button> :
                        <ItemCount stock={stock} setQuantitySelected={setQuantitySelected} productData={data}/>
                }
            </Card.Body>
        </Card>
    )
}

export default ItemDetail