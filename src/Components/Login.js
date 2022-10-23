import React from 'react';
//icons
import google from "../assets/google.svg"
//style
import styles from "./Login.module.css"
//
import firebase from 'firebase';
import { auth } from '../firebase';


const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <h1>Welcome to <span>Dnigram!</span></h1>
                <div 
                className={styles.button}
                onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <img src={google} alt="google"/> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;