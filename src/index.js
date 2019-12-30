import './App.css';
import React from 'react';
import reactDom from 'react-dom';
import  firebase from 'firebase';
import App from './App';


firebase.initializeApp(config);

var dest = document.querySelector("#root");

reactDom.render(
    <App/>,
    dest
);
