// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMIKaB24zwegjxOzoaA7_GRTvfvladwSA",
  authDomain: "iot-temp-sensor-2ebb3.firebaseapp.com",
  projectId: "iot-temp-sensor-2ebb3",
  storageBucket: "iot-temp-sensor-2ebb3.appspot.com",
  messagingSenderId: "445082511404",
  appId: "1:445082511404:web:62ac00537c63ae9ac04989",
  measurementId: "G-35XS5YLRDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
