
import { useEffect, useState } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad"
import { Link, useParams } from "react-router-dom"


export const ItemDetail = ({ product }) => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    const [isCounter, setIsCounter] = useState(true)

    const { addProduct } = useCartContext()

    const onAdd = (cantidad) => {
        addProduct({ ...product, cantidad })
        setIsCounter(false)
    }

    const { pid } = useParams(

    )

    // Acceder a un documento firebase
    useEffect(() => {
        const dbFirestore = getFirestore() // conecta con servicios de firestore

        const queryDoc = doc(dbFirestore, 'products', pid) // apuntando a un doc de firestore

        getDoc(queryDoc)
            .then(resultado => setProducto({ id: resultado.id, ...resultado.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    console.log(producto)

    return (
        <div className="row">
            <div className="col-12 text-center mt-5">
                <h1>Detalle del producto</h1>
            </div>
            <div className="col-12 text-center mt-5">
                <img src={producto.imgUrl} alt={'imagen de tarjeta de suscripción'} className="img-fluid" style={{ maxHeight: "400px" }} />
                <h4>{producto.name}</h4>
            </div>

            <div className="col-12 text-center mt-5">
                <h5>Descripción: {producto.description}</h5>
                <h5>Precio: {producto.price}</h5>
                <h5>Stock: {producto.stock}</h5>
                {
                    isCounter ?
                        <ItemCounter initial={1} stock={100} onAdd={onAdd} />
                        :

                        <>
                            <Link className='btn btn-danger' style={{ margin: "10px" }} to='/cart'>Terminar compra</Link>
                            <Link className='btn btn-primary' style={{ margin: "10px" }} to='/'>Seguir comprando</Link>
                        </>


                }

                {/* <Intercambiabilidad /> */}
            </div>
        </div>
    )
}
