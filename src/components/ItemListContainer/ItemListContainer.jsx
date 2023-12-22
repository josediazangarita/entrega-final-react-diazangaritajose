
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

import Loading from "../Loading/Loading"
import { ItemList } from "./ItemList/ItemList"

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  // Enrutado
  const { cid } = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, 'products');
    let queryResult;

    if (cid) {
      // Filtrar por categoría si cid está presente
      const queryFilter = query(queryCollection, where('category', '==', cid));
      queryResult = getDocs(queryFilter);
    } else {
      // No hay filtro, traer toda la colección
      queryResult = getDocs(queryCollection);
    }

    queryResult
      .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [cid]);

  return (
    <div>
      <div className="m-4">
        <h2 className="text-center">{greeting}</h2>
        {loading ? (
          <Loading />
        ) : (
          <ItemList productos={productos} />
        )}
      </div>
    </div>
  )
}


