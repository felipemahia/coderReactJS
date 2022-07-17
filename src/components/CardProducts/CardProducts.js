import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProducts = ({title, description, price, img}) => {
    return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}, {price}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default CardProducts