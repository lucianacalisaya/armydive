import { useState, useEffect } from 'react'
import { getDocs, collection, query } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { Link } from 'react-router-dom';
import './Carousel.scss'

const Carousel = () => {
    const [products, setProducts] = useState([]);
    const collectionRef = query(collection(db, 'products'));
    getDocs(collectionRef).then(response => {
        const productsAdapted = response.docs.map(doc => {
            const data=doc.data()
            return { id: doc.id, ...data}
        });
        setProducts(productsAdapted)
    }).catch(error=> {
        console.log(error)
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselInfinite = () => {
        if (currentIndex === products.length-1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex+1);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            carouselInfinite()
        }, 3000)
        return () => clearInterval(interval);
    })
    
    const next = () => {
      setCurrentIndex((currentIndex + 1) % products.length);
    };
  
    const prev = () => {
      setCurrentIndex((currentIndex - 1 + products.length) % products.length);
    };
    

    return (
      <div className='slider'>
        <div className='slider__container'>
          {products.map((prod) => (
            <div key={prod.id} className={
                products[currentIndex].id === prod.id ? 'fade' : 'slider__item fade'
              }
            >
              <img src={prod.img} alt={prod.name} className='slider__img' />
              <div className='slider__caption'><Link className='slider__link' to={`/detail/${prod.id}`}>Buy</Link></div>
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
      </div>
    );

}

export default Carousel