import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", function () {
  const email = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Username dan password harus diisi!");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login berhasil!");
      window.location.href = "2home.html";
    })
    .catch((error) => {
      console.error("Login gagal:", error);
      alert("Login gagal: " + error.message);
    });
});
