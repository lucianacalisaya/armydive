import React from 'react';
import './Scroll.scss'
const Scroll = (props) => {
  return( 
    <div className='results'>
      {props.children}
    </div>	
  );
}

export default Scroll;