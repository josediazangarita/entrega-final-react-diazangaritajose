import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const addProduct = (product) => {
        const existingProduct = cartList.find((p) => p.id === product.id);

        if (existingProduct) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            setCartList((prevCartList) =>
                prevCartList.map((p) =>
                    p.id === product.id
                        ? { ...p, cantidad: p.cantidad + product.cantidad }
                        : p
                )
            );
        } else {
            // Si el producto no está en el carrito, se agregará
            setCartList([...cartList, product]);
        }
    };

    const vaciarCarrito = () => {
        setCartList([])
    }

    // Cantidad total de productos
    const getTotalQuantity = () => {
        return cartList.reduce((total, product) => total + product.cantidad, 0);
    };

    // Precio total de productos
    const getTotalPrice = () => {
        return cartList.reduce(
            (total, product) => total + product.price * product.cantidad,
            0
        );
    };

    // Eliminar un producto por id
    const removeProductById = (productId) => {
        setCartList((prevCartList) =>
            prevCartList.filter((product) => product.id !== productId)
        );
    };

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            vaciarCarrito,
            getTotalQuantity,
            getTotalPrice,
            removeProductById,
        }}>
            {children}
        </CartContext.Provider>
    )
}
