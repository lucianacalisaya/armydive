import './CartWidget.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext);
    
    const quantity = getQuantity();


    if(quantity === 0) {
        return (
            <div className="cartWidget">
               <img className='cartWidget__empty' src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="cart-widget"/>
               <p className='cartWidget__quantity'>{ quantity }</p>
            </div>
        )
    }
    return (
        <Link to='/cart' className="cartWidget">
            <img className='cartWidget__notEmpty' src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="cart-widget"/>
            <p className='cartWidget__quantity'>{ quantity }</p>
        </Link>
    );
};

export default CartWidget