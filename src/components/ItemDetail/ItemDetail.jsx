
import { useState } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { ItemCounter } from "../ItemCounter/ItemCounter"

import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad"
import { Link } from "react-router-dom"


export const ItemDetail = ({ product }) => {

    const [isCounter, setIsCounter] = useState(true)

    const { addProduct } = useCartContext()

    const onAdd = (cantidad) => {
        addProduct({ ...product, cantidad })
        setIsCounter(false)
    }

    return (
        <div className="row">
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
                {
                    isCounter ?
                        <ItemCounter initial={1} stock={100} onAdd={onAdd} />
                        :

                        <>
                            <Link className='btn btn-outline-dark ' to='/cart'>Terminar compra</Link>
                            <Link className='btn btn-outline-dark ' to='/'>Seguir comprando</Link>
                        </>


                }

                {/* <Intercambiabilidad /> */}
            </div>
        </div>
    )
}
