import CartItem from '../CartItem/CartItem';
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './Cart.scss'

const Cart = () => {
    const { cart, getQuantity, getTotal } = useContext(CartContext) 

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
    return (     
        <div className='cart'>
            <div className='cart__titleContainer'>
                <h1 className='cart__title'>Shopping cart</h1>
                <hr/>
            </div>
            <div className='cart__detail'>
                <div>
                    { cart.map(p => <CartItem key={p.id} {...p}/>) }
                </div>
                <div className='cart__totalContainer'>
                    <h3 className='cart__total'>Total: <span className='cart__price'>${total}</span></h3>
                    {/* saque clearCart <button onClick={() => clearCart()} className='cart__removeButton'>Empty cart</button>*/}
                    <Link className='cart__checkoutLink' to='/checkout'>Checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart