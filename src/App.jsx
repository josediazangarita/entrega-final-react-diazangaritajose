import { ItemListContainer as Home } from "./components/ItemListContainer/ItemListContainer";
import { ItemListContainer as Category } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemCounter } from "./components/ItemCounter/ItemCounter";
import { NavBar as Menu } from "./components/NavBar/NavBar";


import "bootstrap/dist/css/bootstrap.min.css";
import { ItemList } from "./components/ItemListContainer/ItemList/ItemList";
import { CartContextProvider } from "./contexts/CartContext";
import { CartContainer } from './components/CartContainer/CartContainer';




function App() {
  const onAdd = (cantidad) => {
    console.log("La cantidad seleccionada es:", cantidad);
  };

  return (

    <BrowserRouter>
      <CartContextProvider>
        <div className="container">
          <Menu />
          <Routes>
            <Route path='/' element={<Home greeting='Bienvenidos a la tienda de Videoland Post' />} />
            <Route path='/category/:cid' element={<Category />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />
            <Route path='/cart' element={< CartContainer />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          {/* <ItemCounter initial={1} stock={100} onAdd={onAdd} /> */}
          <br />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;
