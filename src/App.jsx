import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting= "Bienvenidos a Videoland Post" />
      </div>
    </>
  )
}

export default App
