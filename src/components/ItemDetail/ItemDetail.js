import ItemCount from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({ data }) => {
    const {title, price, description, img, stock} = data;
    return(
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}, {price}
                </Card.Text>
                <Card.Text>
                    <p>Tenemos un stock de: {stock}</p>
                </Card.Text>
                <ItemCount/>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail