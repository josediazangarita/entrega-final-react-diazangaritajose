
import { ItemListContainer as Home } from "./components/ItemListContainer/ItemListContainer"
import { NavBar as Menu } from "./components/NavBar/NavBar"
import { ItemCounter } from "./components/ItemCounter/ItemCounter"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const onAdd = (cantidad) => {
    console.log("La cantidad seleccionada es:", cantidad)
  }

  return (
    <>
      <div className="container">
        <Menu />
        <Home greeting= "Bienvenidos a la tienda de Videoland Post" />
        <ItemCounter initial={1} stock={100} onAdd={onAdd} />
      </div>
    </>
  )
}

export default App
