import ItemList from '../ItemList/ItemList';
import React, { useEffect, useState } from 'react';
import 'bootstrap';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import { useParams } from 'react-router-dom';


const ItemListContainer = ({ section }) => {
    const [listProducts, setListProducts] = useState([]);
    const { categoryId } = useParams()
    //const filterType = products.filter((products) => products.type === type)

    

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (categoryId) {
        const queryFilter = query(queryCollection, where('type', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setListProducts(res.docs.map(product => ({id: product.id, ...product.data()}))));
            } else{
                getDocs(queryCollection)
                .then(res => setListProducts(res.docs.map(product => ({id: product.id, ...product.data()}))));
            }
        /* const traerProductos = (categoryId) => new Promise((resolve, reject) => {
            setTimeout(() => {
                if (categoryId) {
                    resolve(products.filter((products) => products.type === categoryId))
                } else {
                    resolve(products)
                }
            }, 2000)
        })
        const getProduct = async () => {
            try {
                const responseLog = await traerProductos(categoryId)
                setListProducts(responseLog)
            }
            catch (error) {
                console.log(error)
            }
        }
        getProduct() */
    }, [categoryId])

    return (
        <div className='row'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}

export default ItemListContainer