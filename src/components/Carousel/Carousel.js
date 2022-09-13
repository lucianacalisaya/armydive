import { useState } from 'react'
import { getDocs, collection, query } from 'firebase/firestore';
import { db } from '../../services/firebase';
import './Carousel.scss'

const Carousel = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const collectionRef = query(collection(db, 'products'))
        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data=doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error=> {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
      setCurrentIndex((currentIndex + 1) % products.length);
    };
  
    const prev = () => {
      setCurrentIndex((currentIndex - 1 + products.length) % products.length);
    };

    if(loading) {
        return
    };

    return (
      <>
        <div className='slider-container'>
          {products.map((prod) => (
            <div key={prod.id} className={
                products[currentIndex].id === prod.id ? 'fade' : 'slide fade'
              }
            >
              <img src={prod.img} alt={prod.title} className='photo' />
              <div className='caption'>{prod.title}</div>
            </div>
          ))}
  
          <button onClick={prev} className='prev'>
            prev
          </button>
  
          <button onClick={next} className='next'>
            next
          </button>
        </div>
  
        <div className='dots'>
          {products.map((prod) => (
            <span key={prod.id} className={
                products[currentIndex].id === prod.id ? 'dot active' : 'dot'
              }
              onClick={() => setCurrentIndex(products.indexOf(prod))}
            ></span>
          ))}
        </div>
      </>
    );

}

export default Carousel