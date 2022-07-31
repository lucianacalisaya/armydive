import Navbar from './components/Navbar/Navbar';
import Promo from './components/Promo/Promo';
import './App.css';
import CartWidget from "./components/CartWidget/CartWidget";
import Social from "./components/Social/Social";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
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
        <ItemListContainer greeting="Albums"/>
      </main>
    </div>
  );
}

export default App;
