import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import 'bootstrap';
import products from '../../utils/productMock';


const ItemListContainer = ({ section }) => {
    const [listProducts, setListProducts] = useState([]);
    //const filterId = products1.find (( products) => products.type === "Sushi")

    const traerProductos = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        const getProduct = async () => {
            try {
                const responseLog = await traerProductos()
                setListProducts(responseLog)
            }
            catch (error) {
                console.log(error)
            }
        }
        getProduct()
    })

    return (
        <div className='row'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}

export default ItemListContainer