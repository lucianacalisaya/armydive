import Counter from '../Counter/Counter';

const Item = ({product}) => {
    const album =product.filter(obj => {
        return obj.category === 'album';
    });
    const handleOnAdd = (quantity) => {
        console.log(`Add to chart: ${quantity}`)
    };
    return (
        <div>
         {album.map(obj => {
            return (
            <div key= {obj.id}>
                <h3>{obj.name}</h3>
                <img src={obj.img} alt={obj.name}/>
                <Counter stock={10} onAdd={handleOnAdd}/>
            </div>  
            )})}    
        </div>
        
      )
     
    
}

export default Item