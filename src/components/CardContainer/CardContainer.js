import { useEffect, useState } from 'react';
import products from '../../utils/productMock';
import CardList from '../CardList/CardList';

const CardContainer = ({ section }) => {
    const [listProducts, setListProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        /* No quiero NI ESCRIBIR fetch, mi archienemigo. Si así funciona, así está bien xD */
        getProducts
            .then((res) => {
                setListProducts(res);
            })
            .catch((error) => {
            })
            .finally(() => {
            })
    }, [])

    return (
        <div>
            <h2>{section}</h2>
            <CardList dataProducts={listProducts} />
        </div>
    )
}

export default CardContainer