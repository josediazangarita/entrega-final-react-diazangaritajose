import { useCounter } from "../../hooks/useCounter.js"

export const ItemCounter = ({ initial = 1, stock = 100, onAdd }) => {
  const { counter, handleSumar, handleRestar } = useCounter(initial, stock)

  const handleOnAdd = () => {
    onAdd(counter)
  }

  return (
    <div className="col-12 text-center mt-5">
      <button className='btn btn-outline-dark' onClick={handleSumar}> + </button>
      <label>{counter}</label>
      <button className='btn btn-outline-dark' onClick={handleRestar}> - </button>
      <button className='btn btn-outline-dark' onClick={handleOnAdd}> Agregar al carrito </button>
    </div>
  )
}
