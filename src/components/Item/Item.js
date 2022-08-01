import Counter from '../Counter/Counter';

const Item = ({product}) => {
    const handleOnAdd = (quantity) => {
        console.log(`Add to chart: ${quantity}`)
    };
    return (
            <li>
                <h3>{product.name}</h3>
                <img src={product.img} alt={product.name}/>
                <Counter stock={10} onAdd={handleOnAdd}/>
            </li>
      )  
}

export default Item