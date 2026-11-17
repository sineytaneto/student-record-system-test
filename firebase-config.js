// firebase-config.js
// Put this file in the same folder as your HTML pages (next to index.html / login.html).

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js"; // uncomment if you use Firebase login

const firebaseConfig = {
  apiKey: "AIzaSyCN50shsMUCic_SwzeCO212IiB4kWrZO0Y", // copy-paste from the console to be safe
  authDomain: "student-records-manageme-c4099.firebaseapp.com",
  projectId: "student-records-manageme-c4099",
  storageBucket: "student-records-manageme-c4099.firebasestorage.app",
  messagingSenderId: "241198333282",
  appId: "1:241198333282:web:a55091a9ac7143ccc1803b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const auth = getAuth(app);
