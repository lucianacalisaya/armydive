import './ItemDetail.css'
import Counter from '../Counter/Counter';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ name, img, price, description, stock }) => {
    
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
    };

    return (
        <div className='detail'>
            <div className='detail__image-container'>
                <img className='detail__image' src={img} alt={name}/>
            </div>
            <div className='detail__info'>
                <h3 className='detail__title'>{name}</h3>
                <p className='detail__price'>${price}</p>
                {
                    quantityToAdd === 0 ? (
                    <Counter stock={stock} onConfirm={handleOnAdd}/> 
                    ) : (
                        <Link className='detail__cart' to='/cart'>Go to cart</Link>
                    )
                }
                <p className='detail__description'>{description}</p>
            </div>
        </div>
    )
}

export default ItemDetail