
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAzSUI6ofOyN9hy2oNAqr2sukG8G4YngbM",
    authDomain: "tugasakhirr-8bd0a.firebaseapp.com",
    databaseURL: "https://tugasakhirr-8bd0a-default-rtdb.firebaseio.com",
    projectId: "tugasakhirr-8bd0a",
    storageBucket: "tugasakhirr-8bd0a.firebasestorage.app",
    messagingSenderId: "1073743837170",
    appId: "1:1073743837170:web:2e5a419331d95dd2d79d6b",
    measurementId: "G-J5TQS4TKME"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
