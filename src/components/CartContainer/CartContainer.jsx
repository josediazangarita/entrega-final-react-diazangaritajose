import React, { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export const CartContainer = () => {
    const { cartList, vaciarCarrito, getTotalQuantity, getTotalPrice, removeProductById } = useCartContext();
    console.log(cartList)

    const [checkoutMessage, setCheckoutMessage] = useState("");

    const handleCheckout = () => {
        // Lógica para finalizar la compra
        setCheckoutMessage("¡Compra finalizada! Gracias por tu compra.");
    };

    return (
        <div className="container mt-5">
            {cartList.length === 0 ? (
                <h1 className="text-center" style={{ color: "red" }}>El carrito está vacío.</h1>
            ) : (
                <div className="d-flex flex-wrap justify-content-around">
                    {cartList.map((product) => (
                        <div
                            key={product.id}
                            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 p-3"
                        >
                            <img
                                className="w-100 mb-2 img-fluid"
                                style={{ maxHeight: "400px" }}
                                src={product.imgUrl}
                                alt={product.title}
                            />
                            <p className="text-center font-weight-bold">
                                <h5>Nombre: {product.name}</h5>
                                <h6>Cantidad: {product.cantidad}</h6>
                                <h6>Precio: {product.price} - Subtotal{" "} {product.price * product.cantidad}</h6>
                            </p>
                            <button
                                className="btn btn-danger mx-auto d-block"
                                onClick={() => removeProductById(product.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {cartList.length > 0 && (
                <div className="text-center mt-3">
                    <p className="font-weight-bold" style={{ fontSize: "1.25rem" }}>
                        Cantidad total de productos: {getTotalQuantity()}
                    </p>
                    <h5 className="font-weight-bold">
                        Precio total de productos: ${getTotalPrice().toFixed(2)}
                    </h5>
                    <div className="button-container">
                        <button className="btn btn-primary" style={{ margin: "10px" }} onClick={handleCheckout}>
                            Finalizar compra
                        </button>
                        <button className="btn btn-danger" style={{ margin: "10px" }} onClick={vaciarCarrito}>
                            Vaciar carrito
                        </button>
                        <Link to="/" className="btn btn-success mt-2" style={{ margin: "10px" }}>
                            Seguir comprando
                        </Link>
                    </div>
                    {checkoutMessage && (
                        <h4 className="mt-3 alert alert-success">{checkoutMessage}</h4>
                    )}
                </div>
            )}
        </div>
    );
};

