import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"


export const CartContainer = () => {
    const { cartList, vaciarCarrito } = useContext(CartContext)

    return (
        <div>
            {cartList.map(product => <div key={product.id}>
                <img className="w-25" src={product.imgUrl} />
                Cantidad: {product.cantidad} - Precio: {product.price}
            </div>
            )}
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}