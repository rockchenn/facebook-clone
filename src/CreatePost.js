import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './CreatePost.css';

function CreatePost() {

    const handleSubmit = (evt) => {
        evt.preventDefault();
    };

    return (
    <div className='createPost'>
        <div className='createPost__top'>
            <AccountCircleIcon style={{ color: 'b7b8bc', fontSize: '32px' }} />
            <form>
                <input placeholder="What's on your mind" />
                <button onClick={handleSubmit} type='submit' />
            </form>
        </div>        
        <div className='createPost__bottom'>
            <div className='createPost__bottom__option'>
                <VideoCameraFrontIcon style={{ color: 'red', fontSize: '32px' }} />
                <h4>Live video</h4>
            </div>

            <div className='createPost__bottom__option'>
                <InsertPhotoIcon style={{ color: 'green', fontSize: '32px' }} />
                <h4>Photo/video</h4>
            </div>

            <div className='createPost__bottom__option'>
                <EmojiEmotionsIcon style={{ color: 'yellow', fontSize: '32px' }} />
                <h4>Feeling/activity</h4>
            </div>
        </div>
    </div>
  );
}

export default CreatePost;