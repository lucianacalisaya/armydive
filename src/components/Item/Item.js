import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({id, name, img}) => {
    return (
            <div className='product'>
                <img className='product-image' src={img} alt={name}/>
                <h3 className='product-title'>{name}</h3>
                <Link to={`/detail/${id}` }>See Details</Link>
            </div>
      )  
}

export default Item