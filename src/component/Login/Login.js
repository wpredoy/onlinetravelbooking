import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { newContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(newContext);
    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    // google sign in 
    const googleSignIn = () => {
        var googleSign = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleSign).then(function(result) {
            const {displayName, email} = result.user;
            const signInUser = {displayName, email};
            setLoggedInUser(signInUser)
            history.replace(from)
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
    }

    // facebook handel 
    const facebookHandel = () => {
        var facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider)
        .then(function(result) {
            var {displayName, email} = result.user;
            const signInUser = {name: displayName, email}
            setLoggedInUser(signInUser);
            history.replace(from)
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
    }

    // creat new user email & password
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: '',
        password: '',
        name: '',
        error: ''
    })
    const handelBluer = (e) => {
        let isFromValid = true;
        if(e.target.name === "email") {
             isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === "password") {
                const isPasswordValid = e.target.value.length > 6;
                const passwordNumber = /\d{1}/.test(e.target.value);
                isFromValid = isPasswordValid && passwordNumber; 
        }
        if(isFromValid) {
            const newUser = {...user}
            newUser[e.target.name] = e.target.value;
            setUser(newUser)
        }
    }
    const handelSubmit = (e) => {
        if(user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res=> {
                const newUser = {...user}
                newUser.error = '';
                setUser(newUser)
                setLoggedInUser(newUser)
                history.replace(from)
                console.log(res)
            })
            .catch( error => {
                const newUser = {...user}
                newUser.error = error.message;
                setUser(newUser)
              });
        }
        e.preventDefault();
    }
    return (
        <div className="container loginStyle">
            <div className="col-md-6 loginfromStyle">
                <h2 className="headerLogin">Login</h2>
                <form onSubmit={handelSubmit}>
                    <input type="email" onBlur={handelBluer} name="email" placeholder="Enter your email" className="inputType" required/>
                    <br/>
                    <input type="password" onBlur={handelBluer} name="password" placeholder="Enter your password" className="inputType" required/>
                    <br/>
                    <input type="submit" className="buttonType" value="submit"/>
                </form>
                <p style={{color: "tomato"}}>{user.error}</p>
            </div>
            <div><p>Or</p></div>
            <button onClick={googleSignIn} className="twinButtonStyle"><FontAwesomeIcon icon={ faGooglePlusG }/> Google</button>
            <br/>
            <button className="twinButtonStyle" onClick={facebookHandel}><FontAwesomeIcon icon={ faFacebook }/> Facebook</button>
        </div>
    );
};

export default Login;