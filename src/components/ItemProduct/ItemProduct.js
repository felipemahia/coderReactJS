import './ItemProduct.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const ItemProduct = ({ data }) => {
    const {title, price, description, img, stock} = data
        return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}, {price}
                </Card.Text>
                <ItemCount/>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemProduct