import { memo } from "react"
import { Link } from "react-router-dom"

export const Item = memo(({ product }) => {
    console.log("Renderizando item")
    return (
        <div className="card w-25">
            <div className="card-body p-0 text-center">
                <img src={product.imgUrl} className="w-100" style={{ maxHeight: "400px" }} alt="Imagen de Tarjeta de Suscripción" />
                <h5>{product.name}</h5>
                <h6>Precio: {product.price}</h6>
                <h6>Stock: {product.stock}</h6>
                <h6>Descripción: {product.description}</h6>
            </div>
            <div className="card-footer">
                <Link to={`/detail/${product.id}`} className="btn btn-primary w-100">Detalle</Link>
            </div>
        </div>
    )
}
)
