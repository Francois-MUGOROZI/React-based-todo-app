import './App.css';
import React from 'react';
import reactDom from 'react-dom';
import  firebase from 'firebase';
import App from './App';


const config = {
    apiKey: "AIzaSyCHTk8REcfmeK_k7cM5OO-yFcnY0V_Ytro",
    authDomain: "shared-task-63bbc.firebaseapp.com",
    databaseURL: "https://shared-task-63bbc.firebaseio.com",
    projectId: "shared-task-63bbc",
    storageBucket: "shared-task-63bbc.appspot.com",
    messagingSenderId: "450230086080",
    appId: "1:450230086080:web:9c3610867bd4a37a574025",
    measurementId: "G-M43NFXQ6RN"
}

firebase.initializeApp(config);

var dest = document.querySelector("#root");

reactDom.render(
    <App/>,
    dest
);
