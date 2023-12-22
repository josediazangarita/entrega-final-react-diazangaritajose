import { Link } from "react-router-dom";

import { useCartContext } from "../../contexts/CartContext";

const OrderDetails = () => {
    const { cartList, getTotalPrice, vaciarCarrito } = useCartContext();
    const renderOrderDetails = () => {
        // Obtener la fecha y hora del momento de la generación de la orden de compra
        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString();
        const handleContinueShopping = () => {
            vaciarCarrito();
        };

        return (
            <div className="card">
                <div className="card-body" style={{ textAlign: 'center' }}>
                    <h5 className="card-title">Recibo de compra</h5>
                    <p>Fecha: {currentDate} Hora: {currentTime}</p>
                    {/* Muestra los detalles de la orden */}
                    {cartList.map((product) => (
                        <div key={product.id}>
                            <p>
                                Producto: <strong>{product.name}</strong> - Cantidad: {product.cantidad} - Subtotal: ${(product.price * product.cantidad).toFixed(2)}
                            </p>
                        </div>
                    ))}

                    <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
                    <br />
                    <img
                        src="dist\assets\codigo-barras.png"
                        alt="imagen código de barras"
                        className="img-fluid"
                        style={{ maxHeight: "100px" }}
                    />
                    <br />
                    {/* Botón para seguir comprando */}
                    <Link to="/" className="btn btn-success m-2" onClick={handleContinueShopping}>
                        Volver a inicio
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <div className="container mt-5">
            {renderOrderDetails()}
        </div>
    );
};

export default OrderDetails;





