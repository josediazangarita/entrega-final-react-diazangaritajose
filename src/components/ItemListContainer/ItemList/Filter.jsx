import { useState } from "react"

export const Filter = ({ children, productos }) => {
  const [filterState, setFilterState] = useState("")
  const handleFilterChange = (e) => {
    //<input type="tipo" name="apellido"
    setFilterState(e.target.value)
  }

  return (
    // Children es productFiltered
    children({ productos, filterState, handleFilterChange })
  )
}


