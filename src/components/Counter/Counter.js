import './Counter.css';
import { useState } from 'react';

const Counter = ({ stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }
    return (
        <div className='counter'>
            <div className='counter__buttons'>
                <button className='counter__button counter__button--left' onClick={decrement}>-</button>
                <h6 className='counter__count'>{quantity}</h6>
                <button className='counter__button counter__button--right' onClick={increment}>+</button>  
            </div>
            <button className='counter__add' onClick={() => onAdd(quantity)}>Add to cart</button>
        </div>
    );
};
/*Cambie onConfirm por onAdd para ver si era eso y sigue igual */
export default Counter