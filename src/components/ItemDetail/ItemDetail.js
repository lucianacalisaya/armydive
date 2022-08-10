import Counter from '../Counter/Counter';

const ItemDetail = ({ name, img, price, description }) => {
    const handleOnAdd = (quantity) => {
        console.log(`Add to chart: ${quantity}`)
    };

    return (
        <div>
            <h3>{name}</h3>
            <img className='product-image' src={img} alt={name}/>
            <p>{price}</p>
            <p>{description}</p>
            <Counter stock={10} onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail