import './MainCategories.scss';
import Item from "../Item/Item";

const MainCategories = ({products}) => {
    return(
        <div className='categories'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>      
    );
};

export default MainCategories