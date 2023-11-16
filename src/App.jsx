import { ItemListContainer as Home } from "./components/ItemListContainer/ItemListContainer"
import { NavBar as Menu } from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className="container">
        <Menu />
        <Home greeting= "Bienvenidos a la tienda de Videoland Post" />
      </div>
    </>
  )
}

export default App
