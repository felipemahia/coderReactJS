import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const ItemCount = ({ stock, setQuantitySelected, id }) => {
    let initialStock = stock;
    const [inCart, setIncart] = useState(1)

    const HandleQ = (e) => {
        if (initialStock) {
            setIncart(inCart + e)
        }
    }
    /* const onAdd = () => {
        setQuantitySelected(inCart)

    } */
    return (
        <div className='contadorProductos'>
            <Button variant="outline-danger" size="sm" onClick={() => HandleQ(-1)} disabled={inCart === 1}>-</Button>
            {/* <p>{counter}</p> */}
            {/* <Link to={`/products/${id}`}>
                {' '}<Button onClick={onAdd} variant="outline-primary">Agregar al carrito</Button>{' '}
            </Link> */}
            <Button variant="outline-danger" size="sm" onClick={() => HandleQ(1)} disabled={inCart === initialStock}>+</Button>
        </div>
    )
}

export default ItemCount