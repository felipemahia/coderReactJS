import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cardProduct = () => {
    return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/assets/img/Burgers1.png" />
            <Card.Body>
                <Card.Title>Producto 1</Card.Title>
                <Card.Text>
                    Descripción del producto
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default cardProduct