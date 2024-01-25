import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
         const user = userCredential.user;
        console.log("Logged in successfully:", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorCode, errorMessage);
      });
  }
  
  function register() {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered and logged in:", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration error:", errorCode, errorMessage);
      });
  }
  
  function signOut() {
    firebase.auth().signOut()
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  }
  