import React from 'react';
import './Post.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Post() {
  return (
    <div className='post'>
        <div className='post__header'>
            <AccountCircleIcon style={{ color: 'b7b8bc', fontSize: '32px' }} />
            <div>
                <h4>name</h4>
                <p>timestamp</p>
            </div>
        </div>
        <div className='post__body'>
            <p>this works</p>
        </div>
    </div>
  );
}

export default Post;