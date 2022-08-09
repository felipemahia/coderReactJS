import { useEffect, useState } from "react";
import products from '../../utils/productMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.scss"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams()
    const filterId = products.find (products => products.id === Number(id))

    const getItem = () => new Promise ((resolve, reject )=>{
        setTimeout(() => {
            resolve(filterId)
        }, 2000);
    })
    useEffect(() => {
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
    }, [])
    return(
        <div className="container">
            <ItemDetail data={producto} />
            {/* {console.log(producto[0])} */}
        </div>
    )
}

export default ItemDetailContainer