import React from 'react';
import Item from '../Item/Item';
import './SearchbarResult.scss'

function SearchbarResult({ filteredResult }) {
  const filtered = filteredResult.map(item =>  <Item key={item.title} item={item} />); 
  return (
    <div className='searchbarResult'>
      {filtered}
    </div>
  );
}

export default SearchbarResult;