import CartItem from '../CartItem/CartItem';
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './Cart.scss'

const Cart = () => {
    const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext) 

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <div className='emptyCart'>
                <img className='emptyCart__image' src='https://cdn-icons-png.flaticon.com/512/6449/6449282.png' alt='products icon'/>
               <h2 className='emptyCart__title'>No items left on your cart.</h2>
               <Link className='emptyCart__link' to='/'>Home</Link>
            </div>
        )
    }
    // setTimeout(() => {
    //     console.log('probando settimeout para ver la imagen')
    return (     
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Remove</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart