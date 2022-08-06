import ItemProduct from "../ItemProduct/ItemProduct";
import CardGroup from 'react-bootstrap/CardGroup';

const ItemList = ({ dataProducts }) => {
    return (
        <>
        <CardGroup>
        {dataProducts.map(product => <ItemProduct key ={product.id} data={product}/>)}
        </CardGroup>
        </>
    )
}

export default ItemList