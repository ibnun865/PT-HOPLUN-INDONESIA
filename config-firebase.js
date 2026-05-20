
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAifzEFCuBgWxah5QjcW5h4vH1_XPIk42Y",
  authDomain: "visitor-booking.firebaseapp.com",
  databaseURL: "https://visitor-booking-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "visitor-booking",
  storageBucket: "visitor-booking.firebasestorage.app",
  messagingSenderId: "670104525890",
  appId: "1:670104525890:web:2d3f70b5ad2ccad687e1db",
  measurementId: "G-1T329WHM0N"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);