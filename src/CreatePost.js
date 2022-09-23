import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PaletteIcon from '@mui/icons-material/Palette';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PlaceIcon from '@mui/icons-material/Place';
import FlagIcon from '@mui/icons-material/Flag';
import './CreatePost.css';
import { addDoc, serverTimestamp } from "firebase/firestore"; 
import { colRef } from './firebase';

function CreatePost(props) {
    const [ inputText, setInputText ] = useState();

    const openPopUpInput = (e) => {
        e.preventDefault();
        document.querySelector('.popUpInput').className = 'popUpInput active';
        document.querySelector('.backdrop').className = 'backdrop active';
    };

    const handlePopUpInputChanged = (e) => {
        e.preventDefault();

        /* reference
         * https://z3388638.medium.com/%E5%A6%82%E4%BD%95%E9%87%9D%E5%B0%8D-contenteditable-%E5%85%83%E7%B4%A0%E5%81%9A%E7%B0%A1%E6%98%93-get-set-value-%E4%BB%A5-react-%E7%82%BA%E4%BE%8B-bbdf4d89c143
         */
        let text = '';
        e.target.childNodes.forEach((node, i) => {
          text += (node.innerText || node.nodeValue || '').replace(/\n/g, '');
          if (i !== e.target.childNodes.length - 1) {
            text += '\n';
          }
        });

        document.querySelector('.popUpInput__message__initial').className = 'popUpInput__message__initial' + (text ? ' off' : '');
        
        setInputText(text);
    }

    const submitPost = async (e) => {
        e.preventDefault();

        if (inputText !== '') {
            /* reference
             * https://firebase.google.com/docs/firestore/quickstart#add_data
             */
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

        document.querySelector('.popUpInput').className = 'popUpInput';
        document.querySelector('.backdrop').className = 'backdrop';
    }

    return (
    <div className='createPost'>
        <div className='createPost__top'>
            <Avatar src={ props.avatar } sx={{ width: 32, height: 32}} />
            <div className='trPopUpInput' onClick={ openPopUpInput }><span>What's on your mind, { props.name }?</span></div>
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
        <div className="popUpInput">
            <div className="popUpInput__header">
                <div>
                    <h3>Create post</h3>
                    <a href="">X</a>
                </div>
                <div>                    
                    <Avatar src={ props.avatar } sx={{ width: 32, height: 32}} />
                    <p>{ props.name }</p>
                </div>
            </div>
            <div className="popUpInput__message">
                <div className="popUpInput__message__text" contentEditable="true" onInput={ handlePopUpInputChanged }>
                </div>
                <div>
                    <PaletteIcon style={{ color: 'yellow', fontSize: '32px' }} />
                </div>
                <div>
                    <EmojiEmotionsIcon style={{ color: 'yellow', fontSize: '32px' }} />
                </div>
                <div className="popUpInput__message__initial">What's on your mind, { props.name }?</div>
            </div>
            <div className="popUpInput__widget">
                <div>
                    <span>Add to your post</span>
                    <InsertPhotoIcon style={{ color: '#45bd62', fontSize: '32px' }} />
                    <PersonAddIcon style={{ color: '#1877f2', fontSize: '32px' }} />
                    <EmojiEmotionsIcon style={{ color: '#f7b928', fontSize: '32px' }} />
                    <PlaceIcon style={{ color: '#f5533d', fontSize: '32px' }} />
                    <FlagIcon style={{ color: '#39afd5', fontSize: '32px' }} />
                </div>
                <div onClick={ submitPost }>
                    <span>Post</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CreatePost;