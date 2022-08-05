import { useState, useEffect } from 'react'
import { getProduct } from '../../utils/productMock';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() =>{
        getProduct(productId).then(response =>{
            setProduct(response)
        }).catch (error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId ]) 

    if(loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div className="container">
            <ItemDetail product={product}/>
        </div>
    )
};

export default ItemListContainer;