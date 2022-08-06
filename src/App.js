import Navbar from './components/Navbar/Navbar';
import Promo from './components/Promo/Promo';
import './App.css';
import CartWidget from "./components/CartWidget/CartWidget";
import Social from "./components/Social/Social";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
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
          <Route path='/' element={<ItemListContainer greeting='Our Products'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Albums'/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
