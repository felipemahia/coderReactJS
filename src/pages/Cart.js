import React from "react"
import { Link } from "react-router-dom";
import {useCartContext} from '../context/CartContext'

const Cart = () => {
    const {cartProduct, totalPrice} = useCartContext()

    if(cartProduct.length === 0) {
        return(
            <>
            <h2>Su carrito está vacío :(</h2>
            <Link to='/'>Añadí productos acá ;)</Link>
            </>
        );
    }
    return(
        <h2>Cart vacío</h2>
    )
}

export default Cart