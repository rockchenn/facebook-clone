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
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { colRef, storage } from './firebase';
import { Scrollbars } from 'react-custom-scrollbars-2';

function CreatePost(props) {
    const [ isPopUpOpen, setIsPopUpOpen ] = useState(false);
    const [ inputText, setInputText ] = useState('');
    const [ hasImage, setHasImage ] = useState(false);
    const [ inputImage, setInputImage ] = useState(null);

    const openPopUp = (e) => {
        e.preventDefault();
        setIsPopUpOpen(true);
    };

    const closePopUp = (e) => {
        e.preventDefault();
        setIsPopUpOpen(false);
        setHasImage(false);
        setInputImage(null);
    }

    const handleTextChanged = (e) => {
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

        if (inputText !== '' || inputImage != null) {
            /* reference
             * https://firebase.google.com/docs/firestore/quickstart#add_data
             */
            try {
                if (inputImage?.exist === false) {
                    console.log('upload image');
                    await uploadBytes(inputImage.f_ref, inputImage.file);
                }

                await addDoc(colRef, {
                    avatar: props.avatar,
                    image: inputImage == null ? '' : await getDownloadURL(inputImage.f_ref),
                    message: inputText,
                    name: props.name,
                    timestamp: serverTimestamp()
                });
            } catch (err) {
                alert(err);
            }
        };

        setIsPopUpOpen(false);
        setHasImage(false);
        setInputText('');
        setInputImage(null);
    }

    const openImageFile = (e) => {
        /* reference:
         * https://stackoverflow.com/questions/40210281/div-that-acts-as-file-upload
         */
        document.getElementById('fileUpload').click();
    };

    const handleImageChange = async (e) => {
        const [ file ] = e.currentTarget.files;

        /* check file type */
        if (file == null || !file.type.startsWith('image'))     return;
      
        const r = new FileReader();
        const read_progress = (fileReader, file, howToRead) => {
            const promise = new Promise(resolve => fileReader.onload = () => resolve(fileReader.result));
            fileReader[howToRead](file);
            return promise;
        };

        try {
            /* preview */
            /* reference:
            * https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
            * https://stackoverflow.com/questions/63044839/how-can-i-await-an-event-listener-inside-a-function
            */
            document.getElementById('preview').src = await read_progress(r, file, 'readAsDataURL');

            /* calc hash */
            /* reference:
            * https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_string
            */
            const hashBuffer = await crypto.subtle.digest("SHA-256", await read_progress(r, file, 'readAsArrayBuffer'));
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(byte => {
                return byte.toString(16).padStart(2, '0');
            }).join('');

            /* upload file if server doesn't has it */
            /* reference:
            * https://stackoverflow.com/questions/71293364/firebase-storage-web-v9-how-to-check-if-file-exists-in-bucket
            * https://firebase.google.com/docs/storage/web/upload-files
            */
            /* Create a reference */
            const f_ref = ref(storage, hashHex + '.' + file.type.split('/')[1]);
            let exist = false;
            try {
                await getDownloadURL(f_ref);
                exist = true;
            } catch (err) {
            }
            setInputImage({ f_ref, file, exist });
        } catch (err) {
            alert(err);
            setInputImage(null);
        }
    };

    return (
    <div className='createPost'>
        {
            isPopUpOpen &&
            <>
                <div className='backdrop' onClick={ closePopUp }></div>
                <div className="popUpInput">
                    <div className="popUpInput__header">
                        <div>
                            <h3>Create post</h3>
                            <a href="#" onClick={ closePopUp }>X</a>
                        </div>
                        <div>                    
                            <Avatar src={ props.avatar } sx={{ width: 32, height: 32}} />
                            <p>{ props.name }</p>
                        </div>
                    </div>
                    <div className="popUpInput__message">
                        <div className="popUpInput__message__text" contentEditable="true" onInput={ handleTextChanged }>
                        </div>
                        { hasImage &&
                            <div className="popUpInput__message__image" onClick={ openImageFile }>
                                <div>
                                    <Scrollbars
                                        style={{ height: '100%' }}
                                        autoHide
                                        renderThumbVertical={({ style, props}) =>
                                            <div style={{ ...style, backgroundColor: '#b7b8bc80', borderRadius: '3px', width: '7px' }} {...props} />
                                    }>
                                        <a href="#" onClick={ e => { e.stopPropagation(); setHasImage(false); setInputImage(null); } }>X</a>
                                        <input id="fileUpload" type="file" accept="image/*" onChange={ handleImageChange } />
                                        <img id="preview" />
                                        { inputImage == null && <p>Add Photos/Videos</p> }
                                    </Scrollbars>
                                </div>
                            </div>
                        }
                        <div className="popUpInput__message__initial">What's on your mind, { props.name }?</div>
                    </div>
                    <div className="popUpInput__widget">
                        <div>
                            <PaletteIcon style={{ color: 'yellow', fontSize: '32px' }} />
                            <EmojiEmotionsIcon style={{ color: 'yellow', fontSize: '32px' }} />
                        </div>
                        <div>
                            <span>Add to your post</span>
                            <InsertPhotoIcon style={{ color: '#45bd62', fontSize: '32px' }} onClick={ e => setHasImage(true) } />
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
            </>
        }
        <div className='createPost__top'>
            <Avatar src={ props.avatar } sx={{ width: 32, height: 32}} />
            <div className='trPopUpInput' onClick={ openPopUp }><span>{ inputText ? inputText : "What's on your mind, " + props.name + "?" }</span></div>
        </div>        
        <div className='createPost__bottom'>
            <div className='createPost__bottom__option'>
                <VideoCameraFrontIcon style={{ color: 'red', fontSize: '26px' }} />
                <h4>Live video</h4>
            </div>

            <div className='createPost__bottom__option'>
                <InsertPhotoIcon style={{ color: 'green', fontSize: '26px' }} />
                <h4>Photo/video</h4>
            </div>

            <div className='createPost__bottom__option'>
                <EmojiEmotionsIcon style={{ color: 'yellow', fontSize: '26px' }} />
                <h4>Feeling/activity</h4>
            </div>
        </div>
    </div>
  );
}

export default CreatePost;