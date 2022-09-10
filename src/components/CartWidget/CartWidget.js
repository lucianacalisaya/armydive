import './CartWidget.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext);
    
    const quantity = getQuantity();


    if(quantity === 0) {
        return (
            <div className="cart-container">
               <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="cart-widget"/>
            { quantity } 
            </div>
        )
    }
    return (
        <Link to='/cart' className="cart-container">
            <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="cart-widget"/>
            { quantity }
        </Link>
    );
};

export default CartWidget