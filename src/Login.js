import React from 'react';
import './Login.css';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from './firebase';

function Login(props) {
    const handleSubmit = (evt) => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //const credential = GoogleAuthProvider.credentialFromResult(result);
            //const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            props.cb({ name: user.displayName, avatar: user.photoURL });
          }).catch((error) => {
            // Handle Errors here.
            //const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            //const email = error.customData.email;
            // The AuthCredential type that was used.
            //const credential = GoogleAuthProvider.credentialFromError(error);
            props.cb({ error: errorMessage });
          });
    };

    return (
        <div className='login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png' alt='facebook logo' />
            <div>
              <button type='submit' onClick={handleSubmit}>login</button>
              <p>{ props.error }</p>
            </div>
        </div>
    );
}

export default Login;