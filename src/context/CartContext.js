import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext =() => useContext(CartContext)

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([])

    const addToCart = (product) => {
        const productInCart = cartProducts.some(item => item.id === product.id)
        if (productInCart === true) {
            const copyArray = cartProducts.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + product.quantity,
                    }
                }
                else {
                    return item
                }
            })
            setCartProducts(copyArray)
        }
        else {
            setCartProducts([...cartProducts, product])
        }
    }
    const deleteAll = () =>{
        setCartProducts([])
    }
    const deleteElement = (id) => {
        const newCart = cartProducts.filter(product => product.id !== id)
        setCartProducts(newCart)
    }
    const totalPrice = () => {
        return cartProducts.reduce((prev, act) => prev + act.quantity * act.price, 0); 
    }
    const totalProducts = () => cartProducts.reduce((acumulador, productoActual) => acumulador+productoActual.quantity, 0)

    const data = {
        cartProducts, 
        setCartProducts,
        addToCart,
        deleteAll,
        deleteElement,
        totalPrice,
        totalProducts
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }