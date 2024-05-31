// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_storageBucket,
//   messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_appId,
//   measurementId: process.env.NEXT_PUBLIC_measurementId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC1S25u2r_x7v8PvR8m0Fcq1LR7wBa2PSc",
  authDomain: "getfunnels-ds.firebaseapp.com",
  projectId: "getfunnels-ds",
  storageBucket: "getfunnels-ds.appspot.com",
  messagingSenderId: "340131938008",
  appId: "1:340131938008:web:ae7531df88fc7e52faa1ad",
  measurementId: "G-EHXBV0JG6Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  const analytics = getAnalytics(app);
}

export default app;
