import CartItem from '../CartItem/CartItem';
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext) 

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <div>
               <h1>No items left on your cart.</h1>
               <Link to='/'>Home</Link>
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
        </div>
    )
}

export default Cart