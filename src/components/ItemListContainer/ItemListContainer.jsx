import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mFetch } from "../../Helpers/mFetch"
import { ItemList } from "./ItemList/ItemList"

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const { cid } = useParams(

  )
  //Llamada a mi promesa mock de una API
  useEffect(() => {
    if (cid) {
      mFetch()
        .then(result => setProductos(result.filter(product => product.category === cid)))
        .catch(err => console.log(err))
    } else {
      mFetch()
        .then(result => setProductos(result))
        .catch(err => console.log(err))
    }
  }, [cid])

  // useEffect(() => {
  //   const dbFirestore = getFirestore() // conecta con servicios de firestore

  //   const qyeryDoc = doc(dbFirestire, 'products', 'ZMIbRgGXQ1WdomjcU9ex') // apuntando a un doc de firestore
  //   getDoc(queryDoc)
  //     .then(resultado => setProducto({ id: resultado.id, ...resultado.data() }))
  //     .catch(err => console, log(err))
  // }, [])

  // console.log(cid)

  return (
    <div>
      <div style={{ margin: "25px" }}>
        <h2 className="text-center"> {greeting} </h2>
        <ItemList productos={productos} />
      </div>
    </div>
  )
}
