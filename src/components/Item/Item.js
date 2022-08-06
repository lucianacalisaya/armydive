import './Item.css';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom'

const Item = ({id, name, img}) => {
    const handleOnAdd = (quantity) => {
        console.log(`Add to chart: ${quantity}`)
    };
    return (
            <li className='product'>
                <h3 className='product-title'>{name}</h3>
                <img className='product-image' src={img} alt={name}/>
                <Link to={`/detail/${id}`}>See Details</Link>
                <Counter stock={10} onAdd={handleOnAdd}/>
            </li>
      )  
}

export default Item