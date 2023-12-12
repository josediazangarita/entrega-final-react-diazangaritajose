import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (product) => {
        setCartList([
            ...cartList,
            product
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    // cantidad total de productos
    // precio total de productos
    // eliminar un producto por id

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}
