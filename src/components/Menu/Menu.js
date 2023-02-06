import './Navbar.scss';
import { Link } from 'react-router-dom';
// import Searchbar from '../Searchbar/Searchbar';
// import { useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import { getDoc, doc } from 'firebase/firestore';
// import { db } from '../../services/firebase';

const Navbar = () => {
    // const [result, setResult] = useState();
    // // const [loading, setLoading] = useState(true)
    // const { resultId } = useParams();

    // useEffect(() => {
    //     getDoc(doc(db, 'products', resultId)).then(response => {
    //         console.log(response)
    //         const data = response.data()
    //         const resultsAdapted = { id: response.id, ...data}
    //         setResult(resultsAdapted)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    //     // .finally(() => {
    //     //     setLoading(false)
    //     // })
    // }, [resultId])    
    return (
        <nav className="menu-container">
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
