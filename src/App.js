import Navbar from './components/Navbar/Navbar';
import Promo from './components/Promo/Promo';
import './App.css';
import CartWidget from "./components/CartWidget/CartWidget";
import Social from "./components/Social/Social";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <Promo greeting="FREE EXPRESS SHIPPING 🚀 UNTIL AUGUST"/>
            <div className="header-top">
              <Social/>
              <CartWidget/>
            </div>
            <Navbar />
            {/*<FontAwesomeIcon icon="fa-solid fa-basket-shopping-simple" />*/}
          </header>
          <main>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
          </Routes>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
