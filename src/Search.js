import React from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className='search'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png' alt='facebook logo' />
        <form>
            <SearchIcon style={{ color: '#b0b3b8', paddingLeft: '10px' }} />
            <input placeholder='Search Facebook' />
            <button type='submit' />
        </form>
    </div>
  );
}

export default Search;