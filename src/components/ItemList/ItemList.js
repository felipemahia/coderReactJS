import ItemProduct from "../ItemProduct/ItemProduct";
import CardGroup from 'react-bootstrap/CardGroup';
import './ItemList.scss'

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