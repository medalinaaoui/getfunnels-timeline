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
  apiKey: "AIzaSyBlA3oe12r_96kDNpzz9pzA7cRZHBHoz4A",
  authDomain: "the-se7enth-art.firebaseapp.com",
  projectId: "the-se7enth-art",
  storageBucket: "the-se7enth-art.appspot.com",
  messagingSenderId: "859349123340",
  appId: "1:859349123340:web:25487cef5df163cd034929",
  measurementId: "G-6BQXQ68LWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  const analytics = getAnalytics(app);
}

export default app;
