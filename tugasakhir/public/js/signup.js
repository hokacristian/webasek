import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Konfigurasi Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyAzSUI6ofOyN9hy2oNAqr2sukG8G4YngbM",
  authDomain: "tugasakhirr-8bd0a.firebaseapp.com",
  projectId: "tugasakhirr-8bd0a",
  storageBucket: "tugasakhirr-8bd0a.appspot.com",
  messagingSenderId: "1073743837170",
  appId: "1:1073743837170:web:2e5a419331d95dd2d79d6b",
  measurementId: "G-J5TQS4TKME"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("registerBtn").addEventListener("click", async function () {
  const nama = document.getElementById("nama").value.trim();
  const gudang = document.getElementById("gudang").value.trim();
  const username = document.getElementById("username").value.trim(); // akan jadi email
  const password = document.getElementById("password").value;
  const konfirmasi = document.getElementById("konfirmasi").value;

  if (!nama || !gudang || !username || !password || !konfirmasi) {
    alert("Semua kolom harus diisi!");
    return;
  }

  if (password !== konfirmasi) {
    alert("Password tidak cocok!");
    return;
  }

  try {
    // Buat akun user
    const userCredential = await createUserWithEmailAndPassword(auth, username, password);
    const user = userCredential.user;

    // Simpan data tambahan ke Firestore
    await setDoc(doc(db, "users", user.uid), {
      nama: nama,
      namaGudang: gudang,
      email: username
    });

    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "1login.html";

  } catch (error) {
    console.error("Error:", error);
    alert("Gagal registrasi: " + error.message);
  }
});
