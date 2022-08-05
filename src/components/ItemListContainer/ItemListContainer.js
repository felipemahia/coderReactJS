import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getProducts, getProductByType } from '../../utils/productMock'; 
import { useParams } from 'react-router-dom'
import 'bootstrap';


const ItemListContainer = ({ section }) => {
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {typeId} = useParams()

    useEffect(() => {
        
        const asyncFunction = typeId ? getProductByType : getProducts;
        asyncFunction(typeId).then(response => {
            setListProducts(response)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [typeId])
    if(loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div className='row'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}

export default ItemListContainer