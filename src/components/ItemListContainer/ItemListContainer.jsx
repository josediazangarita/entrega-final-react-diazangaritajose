import { useEffect, useState } from "react"
import { mFetch } from "../../Helpers/mFetch"

export const ItemListContainer = ({ greeting }) => {
  const [ productos, setProductos ] = useState([])
  // Llamada a mi promesa mock de una API
  useEffect(()=>{
    mFetch()
    .then(result => setProductos (result)) 
    .catch(err => console.log(err))
  }, [])
  console.log(productos)
  return (
    <div>
      <div style={{ margin:"25px" }}>
        <h2 className="text-center"> { greeting } </h2>
      </div>
      
      
      
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "25px",
        justifyContent: "center"
      }}>
        {productos.map (product => <div key={product.id} className="card w-25">
                                      <div className="card-body">
                                        <img src={product.imgUrl} className="w-100" alt="Imagen de Tarjeta de Suscripción" />
                                        <h3>{product.name}</h3>
                                        <p>Precio:{product.precio}</p>
                                        <p>Descripción:{product.description}</p>
                                      </div>
                                      <div className="card-footer">
                                        <button className="btn btn-outline-dark w-100">Detalle</button>
                                      </div>
                                    </div>
        )}
      </div>
    </div>
  )
}
