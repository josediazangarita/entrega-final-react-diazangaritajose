import { useEffect, useState } from "react"
import { mFetch } from './../../Helpers/mFetch';
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const { pid } = useParams()
    console.log("ver pid", pid)
    //Llamada a la API dentro de un useEffect
    useEffect(() => {
        mFetch(pid)
            .then(res => setproduct(res))
            .catch(err => console.log('Error: ', err))
    }, [])

    return (
        <ItemDetail {...product} />
    )
}