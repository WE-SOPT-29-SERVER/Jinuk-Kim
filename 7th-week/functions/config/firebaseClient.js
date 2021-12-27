const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyCOgmqFJm3eUsZCxVNPSdiPB7XBEUZgjDw",
  authDomain: "we-sopt-jinuk.firebaseapp.com",
  projectId: "we-sopt-jinuk",
  storageBucket: "we-sopt-jinuk.appspot.com",
  messagingSenderId: "411015579389",
  appId: "1:411015579389:web:7be521e64f691db1ef2094",
  measurementId: "G-2F8GKW0TR8"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth };
