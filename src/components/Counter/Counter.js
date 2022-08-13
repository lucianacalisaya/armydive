import './Counter.css'
import { useState } from 'react'

const Counter = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock ) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div className='counter'>
            <div className='counter__buttons'>
                <button className='counter__button counter__button--left' onClick={decrement}>-</button>
                <h6 className='counter__count'>{count}</h6>
                <button className='counter__button counter__button--right' onClick={increment}>+</button>  
            </div>
            <button className='counter__add' onClick={() => onConfirm(count)}>Add to cart</button>
        </div>
    )
}

export default Counter