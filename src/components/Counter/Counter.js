import './Counter.css'
import { useState } from 'react'

const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

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
            <button className='counter-button' onClick={decrement}>-</button>
            <h6 className='counter-count'>{count}</h6>
            <button className='counter-button' onClick={increment}>+</button>
            <button className='counter-add' onClick={() => onAdd(count)}>Add to chart</button>
        </div>
    )
}

export default Counter