import { useEffect, useState } from "react"
import { mFetch } from './../../Helpers/mFetch';
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const { pid } = useParams()

    useEffect(() => {
        mFetch(pid)
            .then(res => setproduct(res))
            .catch(err => console.log('Error: ', err))
    }, [])

    const onAdd = (cantidad) => {
        console.log(`La cantidad seleccionada es: ${cantidad}`)
    }

    return (
        <div classeName="row">
            <div className="col-12 text-center mt-5">
                <h1>Detalle del producto</h1>
            </div>
            <div className="col-6 text-center mt-5">
                <img src={product.imageUrl} alt={product.name} className="img-fluid" />
                <h2>{product.name}</h2>
            </div>

            <div className="col-6 text-center mt-5">
                <h4>Descripción: {product.description}</h4>
                <h4>Precio: {product.price}</h4>
                <h4>Stock: {product.stock}</h4>
            </div>
        </div>
    )
}