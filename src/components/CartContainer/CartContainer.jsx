
import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext"



export const CartContainer = () => {
    const { cartList, vaciarCarrito, getTotalQuantity, getTotalPrice, removeProductById } = useCartContext()
    console.log(cartList)

    const [checkoutMessage, setCheckoutMessage] = useState("");

    const handleCheckout = () => {
        // Lógica para finalizar la compra
        setCheckoutMessage("¡Compra finalizada! Gracias por tu compra.");
    };

    return (
        <div>
            {cartList.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                cartList.map((product) => (
                    <div key={product.id}>
                        <img
                            className="w-25"
                            src={product.imgUrl}
                            alt={product.title}
                        />
                        Producto: {product.name} -Cantidad: {product.cantidad} - Precio: {product.price} - Subtotal{" "}
                        {product.price * product.cantidad}
                        <button
                            className="btn btn-danger"
                            onClick={() => removeProductById(product.id)}
                        >
                            X
                        </button>
                    </div>
                ))
            )}
            {cartList.length > 0 && (
                <>
                    <div>
                        Cantidad total de productos: {getTotalQuantity()}
                    </div>
                    <div>
                        Precio total de productos: ${getTotalPrice().toFixed(2)}
                    </div>
                    <button className="btn btn-primary" onClick={handleCheckout}>
                        Finalizar compra
                    </button>
                    <button className="btn btn-danger" onClick={vaciarCarrito}>
                        Vaciar carrito
                    </button>
                    {checkoutMessage && <p>{checkoutMessage}</p>}
                </>
            )}
        </div>
    );
};
