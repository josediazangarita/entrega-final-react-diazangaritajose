import { useEffect, useState } from "react"
import { mFetch } from "../../Helpers/mFetch"
import { ItemList } from "./ItemList/ItemList"

export const ItemListContainer = ({ greeting }) => {
  const [ productos, setProductos ] = useState([])
  // Llamada a mi promesa mock de una API
  useEffect(()=>{
    mFetch()
    .then(result => setProductos (result)) 
    .catch(err => console.log(err))
  }, [])

return (
  <div>
    <div style={{ margin:"25px" }}>
      <h2 className="text-center"> { greeting } </h2>
      <ItemList productos={productos} />
    </div>
  </div>
  )
}
