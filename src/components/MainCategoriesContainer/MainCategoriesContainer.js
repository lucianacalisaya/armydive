import './MainCategoriesContainer.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';
import MainCategories from '../MainCategories/MainCategories';

const MainCategoriesContainer = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();

    useEffect(() => {
        const collectionRef = query(collection(db, 'products'), where('category', '==', categoryId))
        getDocs(collectionRef).then(response => {
            const categoriesAdapted = response.docs.map(doc => {
                const data=doc.data()
                return { id: doc.id, ...data}
            })
            setCategories(categoriesAdapted)
        }).catch(error=> {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId]);
    if(loading) {
        return
    }
    return (
        <div className="albums-container">
            <h3 className="albums-title">{categoryId}</h3>
            <MainCategories products={categories}/>
        </div>
    );
};

export default MainCategoriesContainer