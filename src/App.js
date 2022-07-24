import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greeting="Llegamos a Argentina!"/>
        {/*<FontAwesomeIcon icon="fa-solid fa-basket-shopping-simple" />*/}
      </header>
    </div>
  );
}

export default App;
