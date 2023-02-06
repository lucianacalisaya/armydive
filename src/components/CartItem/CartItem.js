import { useContext} from 'react';
import CartContext from '../../context/CartContext';
import './CartItem.scss'

const CartItem = ({id, img, name, quantity, price}) => {
    const {removeItem} = useContext(CartContext);
    const handleRemove = (id) => {
        removeItem(id)
    }
    return (
        <div className='cartItem'>
            <div className='cartItem__imageContainer'>
                <img className='cartItem__image' src={img} alt={name}/>
            </div>
            <div className='cartItem__detail'>
                <div className='cartItem__removeItem'>
                    <button className='cartItem__removeButton' onClick={() => handleRemove(id)}>Remove</button>
                    <h2 className='cartItem__title'>
                        {name}
                    </h2>
                </div>
                <p className='cartItem__unitPrice'>
                    ${price} USD
                </p>
                <p className='cartItem__quantity'>
                    {quantity}
                </p>
                <p className='cartItem__totalPrice'>
                    <span className='cartItem__totalPrice--bold'>Total:</span> ${price * quantity} USD
                 </p>
            </div>
        </div>
    )
}
export default CartItem