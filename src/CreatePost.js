import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './CreatePost.css';
import { addDoc, serverTimestamp } from "firebase/firestore"; 
import { colRef } from './firebase';

function CreatePost(props) {
    const [ inputText, setInputText ] = useState();

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            await addDoc(colRef, {
                avatar: props.avatar,
                image: '',
                message: inputText,
                name: props.name,
                timestamp: serverTimestamp()
            });

            setInputText('');
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    };

    return (
    <div className='createPost'>
        <div className='createPost__top'>
            <Avatar src={ props.avatar } sx={{ width: 32, height: 32}} />
            <form>
                <input value={ inputText } placeholder="What's on your mind" onChange={ evt => setInputText(evt.target.value) } />
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