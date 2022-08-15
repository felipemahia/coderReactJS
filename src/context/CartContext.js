import { createContext, useState } from "react";

const CartContext = createContext()

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
 
    const data = {
        cartProducts, 
        setCartProducts,
        addToCart,
        deleteAll,
        deleteElement,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }