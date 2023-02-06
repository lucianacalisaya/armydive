import React, { useState } from 'react';
import Scroll from '../Scroll/Scroll';
import SearchbarResult from '../SearchbarResult/SearchbarResult';
import './Searchbar.scss'

function Searchbar({ result }) {


  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const filteredResult = result.filter(
    item => {
      return (
        item
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        item
        .subcategory
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };


  function searchbarResult() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchbarResult filteredResult={filteredResult} />
        </Scroll>
      );
    }
  }

  return (
    <section className='searchbar'>
      <div className='searchbar__container'>
        <input 
          className='searchbar__input'
          type = 'search' 
          placeholder = 'Search articles, recipes, etc.' 
          onChange = {handleChange}
        />
        <button className='searchbar__icon'>
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16665 18C10.8588 18 12.4144 17.365 13.6556 16.312L17.6852 20.708L18.9814 19.294L14.9517 14.898C15.9179 13.543 16.5 11.846 16.5 10C16.5 5.589 13.2101 2 9.16665 2C5.12323 2 1.83331 5.589 1.83331 10C1.83331 14.411 5.12323 18 9.16665 18ZM9.16665 4C12.1999 4 14.6666 6.691 14.6666 10C14.6666 13.309 12.1999 16 9.16665 16C6.1334 16 3.66665 13.309 3.66665 10C3.66665 6.691 6.1334 4 9.16665 4Z" fill="black"/>
          </svg>
        </button>
      </div>
      {searchbarResult()}
    </section>
  );
}

export default Searchbar;