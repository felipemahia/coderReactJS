import './ItemProduct.scss'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ItemProduct = ({ data }) => {
    const { id, title, price, description, img, /* stock */ } = data
    return (

        <Row xs={1} md={4}>
            <Col>
                <Card border="secondary" style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={`${img}`} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}, {price}
                        </Card.Text>
                        <Link to={`/products/${id}`}>
                            <Button variant="primary">Ver más</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
}

export default ItemProduct