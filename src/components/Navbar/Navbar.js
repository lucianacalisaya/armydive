import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="menu-container">
            <h1 className="armydive-title">
                <Link to='/'>Armydive</Link>
            </h1>
            <ul className="menu-list">
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html">Home</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href=".index.html#recomendados">Albums</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html#guardados">Merch</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html#guardados">Oficial BT21</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html#guardados">Hot Sale 🔥</a></li>
            </ul>
        </nav>
    )
};

export default Navbar