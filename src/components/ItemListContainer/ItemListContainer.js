import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import 'bootstrap';
import products from '../../utils/productMock';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ section }) => {
    const [listProducts, setListProducts] = useState([]);
    const { categoryId } = useParams()
    //const filterType = products.filter((products) => products.type === type)

    const traerProductos = (type) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type) {
                resolve(products.filter((products) => products.type === categoryId))
            } else {
                resolve(products)
            }
        }, 2000)
    })

    useEffect(() => {
        const getProduct = async () => {
            try {
                const responseLog = await traerProductos(categoryId)
                setListProducts(responseLog)
            }
            catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [categoryId])

    return (
        <div className='row'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}

export default ItemListContainer