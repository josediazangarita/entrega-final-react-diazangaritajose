import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ItemListContainer as Home } from "./components/ItemListContainer/ItemListContainer";
import { NavBar as Menu } from "./components/NavBar/NavBar";
import { ItemCounter } from "./components/ItemCounter/ItemCounter";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioContainer from "./components/FormularioContainer/FormularioContainer";

function App() {
  const onAdd = (cantidad) => {
    console.log("La cantidad seleccionada es:", cantidad);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <Routes>
          <Route path='/'
            element={<Home greeting="Bienvenidos a la tienda de Videoland Post" />}
          />
          {/* <Route path='/category/:id'
            element={<ItemListContainer />}
          /> */}
          {/* <Route path='/item/:id'
            element={<ItemDetailContainer />}
          /> */}
          <Route path='/formu'
            element={<FormularioContainer />}
          />

          {/* <FormularioContainer /> */}

          <Route path='*'
            element={<Navigate to='/' />}
          />
        </Routes>
        <ItemCounter initial={1} stock={100} onAdd={onAdd} />
      </div>
    </BrowserRouter>
  );
}

export default App;
