import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="menu-container">
            <h1 className="armydive-title">
                <Link to='/'>Armydive</Link>
            </h1>
            <ul className="menu-list">
                <li className="menu-list-item"><a className="menu-list-item-link" href="/">Home</a></li>
                <li className="menu-list-item"><Link to='/category/album' className="menu-list-item-link">Albums</Link></li>
                <li className="menu-list-item"><Link to='/category/merch' className="menu-list-item-link">Merch</Link></li>
                <li className="menu-list-item"><Link to='/category/bt21' className="menu-list-item-link">Oficial BT21</Link></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html#guardados">Hot Sale 🔥</a></li>
            </ul>
        </nav>
    )
};

export default Navbar