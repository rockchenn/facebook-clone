import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Search() {
  const [isFocus, setFocus] = useState(false);
  const form = document.querySelector('.search > form');

  const handleFocus = (e) => {
    setFocus(true);
    form.classList.remove('resize');
  };

  const handleUnfocus = (e) => {
    setFocus(false);

    if (window.innerWidth <= 950) {
      form.classList.add('resize');
    }
  };

  window.addEventListener('resize', (e) => {
    if (!isFocus && window.innerWidth <= 950) {
      form.classList.add('resize');
    } else {
      form.classList.remove('resize');
    }
  });

  return (
    <div className='search'>
        { !isFocus && <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png' alt='facebook logo' /> }
        { isFocus && <ArrowBackIcon style={{ color: '#b0b3b8' }} onClick={ handleUnfocus } /> }
        <form onClick={ handleFocus }>
            { !isFocus && <SearchIcon style={{ color: '#b0b3b8', paddingLeft: '10px', fontSize: '32px' }} /> }
            <input placeholder='Search Facebook' />
            <button type='submit' />
        </form>
    </div>
  );
}

export default Search;