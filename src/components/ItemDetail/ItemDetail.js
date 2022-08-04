import Card from 'react-bootstrap/Card';
import item from '../../utils/itemDetailMock';

const ItemDetail2 = ({ type }) => {
    const [itemDetail, setItemDetail] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then((res) => {
                setItemDetail(res);
            })
            .catch((error) => {
            })
            .finally(() => {
            })
    }, [])

    return (
        <>
        <h2>{type}</h2>
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
    )
}




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