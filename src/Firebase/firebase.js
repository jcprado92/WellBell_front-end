// Imports
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAuth } from "firebase/auth";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtYb0I4aPnZKPbB4bbQ0VB7rpHZqha06s",
  authDomain: "wellbell-4a40d.firebaseapp.com",
  projectId: "wellbell-4a40d",
  storageBucket: "wellbell-4a40d.appspot.com",
  messagingSenderId: "33154837166",
  appId: "1:33154837166:web:cffc47a7ec9154036edb3f",
  measurementId: "G-5YXH5XPXZ7",
  databaseURL:"https://wellbell-4a40d-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//messaging
const messaging = getMessaging();

export const retrieveToken = () => {
    return getToken(messaging, {vapidKey: 'BP2vnUBO-X6Aw6KNtsS9Pst64XUuK_Pdscd70wrrylC_-g-oGW7nABQ6P-Mdr32jBL8isvGGB4Hn2MSb73DzwVk'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  export const onMessageListener = () =>
  new Promise((resolve) => {
    console.log("onmessage thing works")
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });

//Auth

export const auth = getAuth(app);


