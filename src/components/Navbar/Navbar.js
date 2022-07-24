import "./Navbar.css"
import "../CartWidget/CartWidget"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="menu-container">
            <h1><a href="index.html">Armydive</a></h1>
            <ul className="menu-list">
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html">Home</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href=".index.html#recomendados">Albums</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html#guardados">Merch</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html#guardados">Oficial BT21</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html#guardados">Hot Sale 🔥</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
};

export default Navbar