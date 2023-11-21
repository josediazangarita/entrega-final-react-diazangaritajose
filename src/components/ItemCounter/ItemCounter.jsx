import { useCounter } from "../../hooks/useCounter.js"

export const ItemCounter = ({ initial = 1, stock = 100, onAdd }) => {
  const { counter, handleSumar, handleRestar } = useCounter(initial, stock)

  const handleOnAdd = () => {
    onAdd(counter)
  }

  return (
    <div className="col-12 text-center mt-5">

      <button className='btn btn-outline-danger' onClick={handleRestar}> - </button>
      <label style={{ padding: "10px", fontSize: "16px" }}>{counter}</label>
      <button className='btn btn-outline-success' onClick={handleSumar}> + </button>
      <button className='btn btn-outline-primary' style={{ marginLeft: "10px" }} onClick={handleOnAdd}> Agregar al carrito </button>
    </div>
  )
}
