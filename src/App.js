import './App.scss'
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Header/>
          <main>
          <Routes>
            <Route path='armydive/' element={<MainContainer/>}/>
            <Route path='./category/:categoryId' element={<ItemListContainer/>} />
            <Route path='./detail/:productId' element={<ItemDetailContainer />} />  
            <Route path='./cart' element={<Cart/>}/>
            <Route path='./checkout' element={<Checkout/>}/>
          </Routes>
          </main>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
