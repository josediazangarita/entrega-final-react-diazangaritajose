import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    return (
        <div className="card w-25">
            <div className="card-body p-0 text-center">
                <img src={product.imgUrl} className="w-100" alt="Imagen de Tarjeta de Suscripción" />
                <h5>{product.name}</h5>
                <p>Precio: {product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Descripción: {product.description}</p>
            </div>
            <div className="card-footer">
                <Link to={`/detail/${product.id}`} className="btn btn-primary w-100">Detalle</Link>
            </div>
        </div>
    )
}
