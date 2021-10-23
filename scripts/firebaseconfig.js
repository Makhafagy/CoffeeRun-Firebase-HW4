// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

(function (window) {
    'use strict';
    window.FirebaseConfig = {
      apiKey: "AIzaSyCy75Ab7SWoNY5ujJUVYGpuizV8geH0dNw",
          authDomain: "coffeerun-firebase-4ee16.firebaseapp.com",
          projectId: "coffeerun-firebase-4ee16",
          storageBucket: "coffeerun-firebase-4ee16.appspot.com",
          messagingSenderId: "534273785235",
          appId: "1:534273785235:web:8e816c6895de04aa42fc66",
          measurementId: "G-K31FMQ9KFH"
    };
    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;

  })(window);
