import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCo6tW8aKIYVgddGk9NXJwlaj5A3kj-5Vo",
  authDomain: "webers-x-world.firebaseapp.com",
  projectId: "webers-x-world",
  storageBucket: "webers-x-world.firebasestorage.app",
  messagingSenderId: "731350093441",
  appId: "1:731350093441:web:93b4856d900ef8d97f4780",
  measurementId: "G-TJRKNLS4VZ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
window.query = query;
window.where = where;

window.currentUser = null;

console.log("Firebase Auth Loaded ✅");

// GOOGLE LOGIN
window.signInGoogle = async function () {

  try {

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    window.currentUser = user;

    // Save user
    localStorage.setItem("wxwUser", JSON.stringify({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    }));

    // NAVBAR UPDATE
    document.getElementById("navLoggedOut").style.display = "none";
    document.getElementById("navLoggedIn").style.display = "flex";

    document.getElementById("navUserName").textContent = user.displayName;
    document.getElementById("navUserAvatar").src = user.photoURL;

    // REVIEW FORM
    document.getElementById("reviewFormLoggedOut").style.display = "none";
    document.getElementById("reviewFormLoggedIn").style.display = "block";

    // CERTIFICATE SECTION
    document.getElementById("certLoggedOut").style.display = "none";
    document.getElementById("certLoggedIn").style.display = "block";

    alert("Login Successful ✅");

  } catch (error) {

    console.error(error);

    alert("Login Failed ❌");

  }

};

// AUTO LOGIN
onAuthStateChanged(auth, (user) => {

  if (user) {

    window.currentUser = user;

    document.getElementById("navLoggedOut").style.display = "none";
    document.getElementById("navLoggedIn").style.display = "flex";

    document.getElementById("navUserName").textContent = user.displayName;
    document.getElementById("navUserAvatar").src = user.photoURL;

    document.getElementById("reviewFormLoggedOut").style.display = "none";
    document.getElementById("reviewFormLoggedIn").style.display = "block";

    document.getElementById("certLoggedOut").style.display = "none";
    document.getElementById("certLoggedIn").style.display = "block";

  }

});

// LOGOUT
window.signOutUser = async function () {

  await signOut(auth);

  localStorage.removeItem("wxwUser");

  location.reload();

};