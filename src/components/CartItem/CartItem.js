import { useContext} from 'react';
import CartContext from '../../context/CartContext';
import './CartItem.css'

const CartItem = ({id, img, name, quantity, price}) => {
    const {removeItem} = useContext(CartContext);
    const handleRemove = (id) => {
        removeItem(id)
    }
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading()
    //     }, 300)
    // })
    // if(loading)  {
    //     return <h1>Loading...</h1>
    // }
    return (
        <div className='cartItem'>
            <div className='cartItem__detail'>
                <img className='cartItem__image' src={img} alt={name}/>
                <h2 className=''>
                    {name}
                </h2>
            </div>
            <div className='cartItem__detail'>
                <p className=''>
                    Quantity: {quantity}
                </p>
                <p className=''>
                    Price x unit: ${price}
                </p>
            </div>           
            <div className='cartItem__detail'>
                 <p className=''>
                     Subtotal: ${price * quantity}
                 </p>
                 <button className='' onClick={() => handleRemove(id)}>remove</button>
            </div>
        </div>
    )
}
export default CartItem