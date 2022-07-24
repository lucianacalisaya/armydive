import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="menu-container">
            <ul className="menu-list">
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html">Inicio</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html">Recomendados</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html">Guardados</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html">Inicio</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="index.html">Inicio</a></li>
            </ul>
        </nav>
    )
};

export default Navbar