import Navbar from './components/Navbar/Navbar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import CartWidget from "./components/CartWidget/CartWidget";
import Social from "./components/Social/Social";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          <ItemListContainer greeting="Llegamos a Argentina!"/>
        </div> */}
        <div className="header-top">
          <Social/>
          <CartWidget/>
        </div>
        <Navbar />
        {/*<FontAwesomeIcon icon="fa-solid fa-basket-shopping-simple" />*/}
      </header>
    </div>
  );
}

export default App;
