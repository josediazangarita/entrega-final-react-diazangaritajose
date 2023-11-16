
export const ItemList = ({productos}) => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "25px",
        justifyContent: "center"
      }}>
        {productos.map (product => <div key={product.id} className="card w-25">
                                      <div className="card-body p-0 text-center">
                                        <img src={product.imgUrl} className="w-100" alt="Imagen de Tarjeta de Suscripción" />
                                        <h5>{product.name}</h5>
                                        <p>Precio:{product.precio}</p>
                                        <p>Stock:{product.stock}</p>
                                        <p>Descripción:{product.description}</p>
                                      </div>
                                      <div className="card-footer">
                                        <button className="btn btn-outline-dark w-100">Detalle</button>
                                      </div>
                                    </div>
        )}
      </div>
  )
}
