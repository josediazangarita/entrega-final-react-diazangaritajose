import { ItemListContainer as Home } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemCounter } from "./components/ItemCounter/ItemCounter";
import { NavBar as Menu } from "./components/NavBar/NavBar";
import FormularioContainer from "./components/FormularioContainer/FormularioContainer";
import { CardWidget } from "./components/CartWidget/CardWidget";


import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const onAdd = (cantidad) => {
    console.log("La cantidad seleccionada es:", cantidad);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <Routes>
          <Route path='/' element={<Home greeting='Bienvenidos a la tienda de Videoland Post' />} />
          <Route path='/category:cid' element={<Home />} />
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        {/* <ItemCounter initial={1} stock={100} onAdd={onAdd} /> */}
        <br />
        {/* <FormularioContainer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
