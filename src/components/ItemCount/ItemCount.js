import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const ItemCount = ({ stock, setQuantitySelected, id }) => {
    const [counter, setCounter] = useState(1)

    const oneMore = () =>{
        setCounter(counter + 1)
    }
    const oneLess = () =>{
        setCounter(counter - 1)
    }
    const onAdd = () => {
        setQuantitySelected(counter)
    }

    return (
        <div className='contadorProductos'>
            <Button variant="outline-danger" size="sm" onClick={oneLess} disabled={counter === 1}>-</Button>
            <Link to={`/products/${id}`}>
                <Button onClick={onAdd} variant="outline-primary">Agregar {`${counter}`} al carrito</Button>
            </Link>
            <Button variant="outline-danger" size="sm" onClick={oneMore} disabled={setCounter === stock}>+</Button>
        </div>
    )
}


export default ItemCount