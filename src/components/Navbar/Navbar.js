import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar (props) {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list--item"><Link onClick={(e) => props.handleClick(e.target)} to='armydive/' className="navbar__list--link">Home</Link></li>
                <li className="navbar__list--item"><Link onClick={(e) => props.handleClick(e.target)} to='armydive/category/album' className="navbar__list--link">Albums</Link></li>
                <li className="navbar__list--item"><Link onClick={(e) => props.handleClick(e.target)} to='armydive/category/merch' className="navbar__list--link">Merch</Link></li>
                <li className="navbar__list--item"><Link onClick={(e) => props.handleClick(e.target)} to='armydive/category/bt21' className="navbar__list--link">Oficial BT21</Link></li>
                <li className="navbar__list--item"><Link onClick={(e) => props.handleClick(e.target)} to='armydive/category/hot-sale' className="navbar__list--link">Hot Sale 🔥</Link></li>
            </ul>
        </nav>
    )
}

 export default Navbar