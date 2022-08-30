import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore'
//import products from '../../utils/productMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.scss"
import Container from "react-bootstrap/esm/Container";
//import database from '../../firebase/config'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()

    const getItem = async () => {
        const database = getFirestore();
        const docRef = doc(database, "products", detalleId)
        const docSnap = await getDoc(docRef)
        const product = { ...docSnap.data(), id: docSnap.id }
        return product
    }
    useEffect(() => {
        const ItemAwait = async () => {
            try {
                const responseLog = await getItem()
                setProducto(responseLog)
            }
            catch (error) {
                console.log(error)
            }
        }
        ItemAwait()
    }, [detalleId])
    //const filterId = products.find (products => products.id === Number(id))
    /* const getItem = () => new Promise ((resolve, reject )=>{
        setTimeout(() => {
            resolve(filterId)
        }, 2000);
    }) */
    /*useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', detalleId);
        getDoc(queryDoc)
            .then(res => setProducto({ id: res.id, ...res.data() }));
         const ItemAwait = async () => {
            try{
                const responseLog = await getItem ()
                setProducto(responseLog)
            }
            catch(error) {
                console.log(error);
            }
        }
        ItemAwait()
    }, [detalleId])*/
    return (

        <div className="container">
            <Container>
                <ItemDetail data={producto} />
            </Container>
        </div>
    )
}

export default ItemDetailContainer