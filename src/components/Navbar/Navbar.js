import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="menu-container">
            <h1 className="armydive-title">
                <Link to='/'>Armydive</Link>
            </h1>
            <ul className="menu-list">
                <li className="menu-list-item"><Link className="menu-list-item-link" to="/">Home</Link></li>
                <li className="menu-list-item"><Link to='/category/album' className="menu-list-item-link">Albums</Link></li>
                <li className="menu-list-item"><Link to='/category/merch' className="menu-list-item-link">Merch</Link></li>
                <li className="menu-list-item"><Link to='/category/bt21' className="menu-list-item-link">Oficial BT21</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-link" to="/category/hot-sale">Hot Sale 🔥</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar