import { createContext } from "react"

export const CartContext = createContext([])

export const CartContextProvider = ({ children }) => {
    //estados y funciones para context

    return (
        <CartContext.Provider value={{
            //aquí
        }}>
            {children}
        </CartContext.Provider>
    )
}
