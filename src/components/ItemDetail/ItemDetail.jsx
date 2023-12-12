
import { useCartContext } from "../../contexts/CartContext"
import { ItemCounter } from "../ItemCounter/ItemCounter"

import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad"

export const ItemDetail = ({ product }) => {

    const { addProduct } = useCartContext()

    const onAdd = (cantidad) => {
        addProduct({ ...product, cantidad })
    }

    return (
        <div classeName="row">
            <div className="col-12 text-center mt-5">
                <h1>Detalle del producto</h1>
            </div>
            <div className="col-12 text-center mt-5">
                <img src={product.imgUrl} alt={'imagen de tarjeta de suscripción'} className="img-fluid" />
                <h2>{product.name}</h2>
            </div>

            <div className="col-12 text-center mt-5">
                <h4>Descripción: {product.description}</h4>
                <h4>Precio: {product.price}</h4>
                <h4>Stock: {product.stock}</h4>
                <ItemCounter initial={1} stock={100} onAdd={onAdd} />
                {/* <Intercambiabilidad /> */}
            </div>
        </div>
    )
}
