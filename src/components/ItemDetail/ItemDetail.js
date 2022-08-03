import Card from 'react-bootstrap/Card';

const ItemDetail = ({ data }) => {
    const { title, description, price, img1, img2, stock } = data
    return (
        <>
        <Card className="bg-dark text-white">
            <Card.Img src={img1} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {stock}
                </Card.Text>
                <Card.Text>{price}</Card.Text>
            </Card.ImgOverlay>
        </Card>
        </>
    );
}

export default ItemDetail