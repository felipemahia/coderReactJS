import { useEffect, useState } from 'react';
import products from '../../utils/productsMock';
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

/* 
Manu me sale este warning cuando lo paso por useEffect, y no se qué es:
WARNING in [eslint]
src\components\CardContainer\CardContainer.js
Line 24:8:  React Hook useEffect has a missing dependency: 'getProducts'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
 */

    return (
        <div>
            <h2>{section}</h2>
            <CardList dataProducts={listProducts} />
        </div>
    )
}

export default CardContainer