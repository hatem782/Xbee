const firebase = require("firebase");

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAMIKaB24zwegjxOzoaA7_GRTvfvladwSA",
  authDomain: "iot-temp-sensor-2ebb3.firebaseapp.com",
  projectId: "iot-temp-sensor-2ebb3",
  storageBucket: "iot-temp-sensor-2ebb3.appspot.com",
  messagingSenderId: "445082511404",
  appId: "1:445082511404:web:62ac00537c63ae9ac04989",
  measurementId: "G-35XS5YLRDY",
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

module.exports = { database };
