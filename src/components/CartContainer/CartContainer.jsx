
import { useCartContext } from "../../contexts/CartContext"



export const CartContainer = () => {
    const { cartList, vaciarCarrito } = useCartContext()
    console.log(cartList)

    return (
        <div>
            {cartList.map(product => <div key={product.id}>
                <img className="w-25" src={product.imgUrl} />
                Cantidad: {product.cantidad} - Precio: {product.price} - Subtotal {product.price * product.cantidad}
                <button className="btn btn-danger"> X </button>
            </div>
            )}
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}