import './MainContainer.scss';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Carousel from '../Carousel/Carousel';
import { useParams } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../services/firebase';

const MainContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const {mainProducts} = useParams();

    useEffect(() => {
        const collectionRef = collection(db, 'products')
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
    }, [mainProducts]);
    if(loading) {
        return
    }
    return (
        <div className="main">
            {/*<Carousel/>*/}
            <h3 className="main__title">Our products</h3>
            <ItemList products={products}/>
        </div>
    );
};

export default MainContainer