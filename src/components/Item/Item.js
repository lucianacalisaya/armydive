import './Item.scss';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price}) => {

    return (
            <Link to={`./detail/${id}` } className='product'>
                <div className='product__imageContainer'>
                    <img className='product__image' src={img} alt={name}/>
                </div>
                <h3 className='product__title'>{name}</h3>
                <h4 className='product__price'><span>From</span> ${price}USD</h4>
            </Link>
      );
};

export default Item