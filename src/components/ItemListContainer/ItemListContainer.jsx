
import Loading from "../Loading/Loading"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mFetch } from "../../Helpers/mFetch"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"
import { ItemList } from "./ItemList/ItemList"


export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  // Enrutado
  const { cid } = useParams(

  )






  // useEffect(() => {
  //   const dbFirestore = getFirestore()
  //   const queryCollection = collection(dbFirestore, 'products')
  //   const queryFilter = query(queryCollection, where('category', '==', cid))
  //   const queryDoc = doc(dbFirestore, 'products', cid)

  //   if (cid) {
  //     getDocs(queryFilter)
  //       .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false))
  //   } else {
  //     getDoc(queryDoc)
  //       .then(resultado => setProducto({ id: resultado.id, ...resultado.data() }))
  //       .catch(err => console.log(err))
  //   }
  // }, [cid])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);

  //       const result = await mFetch();

  //       if (cid) {
  //         // Filtrar por categoría si cid está presente
  //         setProductos(result.filter(product => product.category === cid));
  //       } else {
  //         // No hay filtro, mostrar todos los productos
  //         setProductos(result);
  //       }
  //     } catch (error) {
  //       // Manejar errores de manera más específica si es necesario
  //       console.error('Error fetching data:', error.message);
  //       // También puedes imprimir el stack trace completo para obtener más detalles
  //       console.error(error.stack);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [cid]);



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

  console.log(productos)





  //Llamada a mi promesa mock de una API
  // useEffect(() => {
  //   if (cid) {
  //     mFetch()
  //       .then(result => setProductos(result.filter(product => product.category === cid)))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false))
  //   } else {
  //     mFetch()
  //       .then(result => setProductos(result))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false))
  //   }
  // }, [cid])



  // // Acceder a un documento firebase
  // useEffect(() => {
  //   const dbFirestore = getFirestore() // conecta con servicios de firestore

  //   const queryDoc = doc(dbFirestore, 'products', 'ZMIbRgGXQ1WdomjcU9ex') // apuntando a un doc de firestore
  //   getDoc(queryDoc)
  //     .then(resultado => setProducto({ id: resultado.id, ...resultado.data() }))
  //     .catch(err => console.log(err))
  // }, [])


  // Datos filtrados de firestore
  // useEffect(() => {
  //   const dbFirestore = getFirestore()
  //   const queryCollection = collection(dbFirestore, 'products')
  //   const queryFilter = query(queryCollection, where('category', '==', cid))

  //   getDocs(queryFilter)
  //     .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
  //     .catch(err => console.log(err))
  //     .finally(() => setLoading(false))
  // }, [])

  // console.log(productos)



  // Traer toda la colección
  // useEffect(() => {
  //   const dbFirestore = getFirestore()

  //   const queryCollection = collection(dbFirestore, "products")

  //   getDocs(queryCollection)
  //     .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
  //     .catch(err => console.log(err))
  //     .finally(() => setLoading(false))
  // }, [])
  // console.log(productos)



  return (
    <div>
      <div style={{ margin: "25px" }}>
        <h2 className="text-center"> {greeting} </h2>
        {
          loading ?
            <Loading />
            :

            <ItemList productos={productos} />
        }
      </div>
    </div>
  )
}


