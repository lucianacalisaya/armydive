import './Promo.scss';
import { useState } from 'react';

const Promo = ({greeting}) => {
    // const [close, setClose] = useState(false);
    // const handleClose = (){
    //     setClose
    // }

    return (
        <div className="banner">
            <h5 className="banner__title">{greeting}</h5>
            {/* <button className='banner__close' onClick={handleClose}></button> */}
        </div>
    )
}

export default Promo