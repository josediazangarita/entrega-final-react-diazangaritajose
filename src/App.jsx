import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ItemListContainer as Home } from "./components/ItemListContainer/ItemListContainer";
import { NavBar as Menu } from "./components/NavBar/NavBar";
import { ItemListContainer as Category } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./contexts/CartContext";
import { CartContainer } from './components/CartContainer/CartContainer';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
          <br />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}
export default App;
