import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, productData }) => {
    const {addToCart} = useContext(CartContext)
    const [counter, setCounter] = useState(0)

    const oneMore = () =>{
        setCounter(counter + 1)
    }
    const oneLess = () =>{
        setCounter(counter - 1)
    }
    const onAdd = () => {
        addToCart({ ...productData, quantity: counter})
        
    }

    return (
        <div className='contadorProductos'>
            <Button variant="outline-danger" size="sm" onClick={oneLess} disabled={counter === 1}>-</Button>
            <Button onClick={onAdd} variant="outline-primary">Agregar {`${counter}`} al carrito</Button>
            <Button variant="outline-danger" size="sm" onClick={oneMore} disabled={setCounter === stock}>+</Button>
        </div>
    )
}


export default ItemCount