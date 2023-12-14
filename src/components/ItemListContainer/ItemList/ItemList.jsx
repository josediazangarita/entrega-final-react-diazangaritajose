import { Filter } from "./Filter"
import { Item } from "../Item/Item"
import { memo } from "react"

const productFiltered = ({ productos, filterState, handleFilterChange }) => (
  <>
    <div>
      <label>Buscar</label>
      <input
        className="form-control"
        type="text"
        value={filterState}
        onChange={handleFilterChange}
      />
    </div>
    <br />
    <div style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "25px",
      justifyContent: "center"
    }}>
      {filterState === ""
        ?
        productos.map(product => <Item key={product.id} product={product} />)
        :
        productos
          .filter(prod => prod.name.toLowerCase().includes(filterState))
          .map(product => <Item key={product.id} product={product} />)
      }
    </div>
  </>
)


export const ItemList = memo(({ productos }) => {
  console.log("Renderizando ItemList")
  return (
    <Filter productos={productos}>
      {productFiltered}
    </Filter>
  )
}
)


