
import './CardProducts.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const CardProducts = ({data}) => {
    const { title, price, description, img, stock } = data
    /* const data = {title, description, price, img, stock} validar para que no sea data.XXXX*/
    return (
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
    );
}

export default CardProducts