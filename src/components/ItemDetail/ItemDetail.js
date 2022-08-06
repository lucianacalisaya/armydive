const ItemDetail = ({ name, img, price, description }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img className='product-image' src={img} alt={name}/>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
}

export default ItemDetail