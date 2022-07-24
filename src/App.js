import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        <p>
          Proyecto de React.js
        </p>
        <a
          className="App-link"
          href="https://www.coderhouse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curso Coderhouse
        </a>
      </header>
    </div>
  );
}

export default App;
